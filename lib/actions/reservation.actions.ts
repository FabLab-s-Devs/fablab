'use server';

import { connectToDB } from "@/lib/db/index";
import Reservation, { IReservation } from "@/lib/db/models/reservation.model";
import { getWeekDate } from "@/lib/utils";
import { getTeam } from "@/lib/actions/team.actions";

export async function createReservation({ teamId, date, period }: IReservation) {
    try {
        const team = await getTeam(teamId);
        if (!team)
            return { error: "You should have a team" };

        const teamRes = await getReservations(teamId, date, team.place, true);

        
        // Check if a reservation exists for today
        const selctedDate = new Date(date);
        selctedDate.setHours(0, 0, 0, 0);
        const hasReservationToday = teamRes.some((reservation: { date: string | number | Date; }) => {
            
            const resDate = new Date(reservation.date);
            console.log(reservation.date);
            resDate.setHours(0, 0, 0, 0);
            return resDate.getTime() === selctedDate.getTime();
        });

        
        
        
        if (hasReservationToday)
        return { error: "You can't reserve more than once per day" };
    
        if (teamRes.length == 2)
            return { error: "You can't have more than 2 reservations per week" };
    
        await connectToDB();
        const reservation = await Reservation.create({
            date,
            teamId,
            place: team.place,
            period,
            status: "confirmed",
            createdAt: new Date(),
        });
        return JSON.parse(JSON.stringify(reservation));
    } catch (error) {
        console.error('Failed to create reservation:', error);
        return { error: 'Failed to create reservation due to an unexpected error.' };
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


export async function getReservations(teamId?: string, date?: Date, place?: string, week?: boolean) {
    const filter: any  = {};

    if (date) {
        const weekDate = getWeekDate(date);
        const startOfDay = week ? weekDate.start : new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = week ? weekDate.end : new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        filter.date = { $gte: startOfDay, $lte: endOfDay };
    }

    if (teamId) {
        filter.teamId = teamId
    }

    if (place) {
        filter.place = place
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

export async function getPeriodCountByDate(date: Date, place?: string) {
    try {
        await connectToDB();
        const reservations = await getReservations(undefined, date, place);
        const periodCount: { [key: string]: number } = {
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
