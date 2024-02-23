'use server';

import { connectToDB } from "@/lib/db/index";
import Reservation, { IReservation } from "@/lib/db/models/reservation.model";
import { filterReservationsForWeek } from "@/lib//utils";

export async function createReservation({ teamId, date, place, period, status }: IReservation) {
    const teamRes = await getReservations(teamId);
    const res = filterReservationsForWeek(date, teamRes);

    if (res.length == 2)
        return (-1);
    try {
        await connectToDB();
        const reservation = await Reservation.create({
            date,
            teamId,
            place,
            period,
            status: status ? status : undefined,
            createdAt: new Date(),
        });
        return JSON.parse(JSON.stringify(reservation));
    } catch (error) {
        console.error('Failed to create reservation:', error);
        throw error;
    }
}

export async function updateReservation(resId: string, reservationDetails: IReservation) {
    try {
        await connectToDB();

        const updateResult = await Reservation.findOneAndUpdate({ _id: resId }, {
            $set: reservationDetails
        }).lean();

        return updateResult;
    } catch (error) {
        console.error('Failed to update reservation:', error);
        throw new Error('Error updating reservation details');
    }
}

export async function removeReservation(email: string) {
    try {
        await connectToDB();
        const result = await Reservation.deleteOne({ email: email });
        return result;
    } catch (error) {
        console.error('Failed to remove reservation:', error);
        throw error;
    }
}

export async function getReservation(resId: string) {
    try {
        await connectToDB();
        const reservation: IReservation | null = await Reservation.findOne({ _id: resId })
        return JSON.parse(JSON.stringify(reservation));
    } catch (error) {
        console.error('Failed to get reservation:', error);
        throw error;
    }
}

export async function getPeriodCountByDate(date: string) {
    try {
        await connectToDB();
        const reservations = await getReservations(undefined, date);
        const periodCount = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        }

        reservations.forEach((res: IReservation) => {
            if (periodCount.hasOwnProperty(res.period)) {
                periodCount[res.period] += 1;
            }
        })

        return periodCount;
    } catch (error) {
        console.error('Failed to get reservations by date:', error);
        throw error;
    }
}


export async function getReservations(teamId?: string, date?: string) {
    const filter: any  = {};

    if (date) {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        filter.date = { $gte: startOfDay, $lte: endOfDay };
    }

    if (teamId) {
        filter.teamId = teamId
    }

    try {
        await connectToDB();
        const reservations = await Reservation.find(filter);
        return JSON.parse(JSON.stringify(reservations));
    } catch (error) {
        console.error('Failed to get reservation:', error);
        throw error;
    }
}
