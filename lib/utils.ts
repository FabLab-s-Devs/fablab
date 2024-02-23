import { type ClassValue, clsx } from "clsx"
import { endOfWeek, startOfWeek, format, isWithinInterval } from "date-fns";
import { twMerge } from "tailwind-merge"
import { IReservation } from "./db/models/reservation.model";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWeekDate(date?: string)
{
  const fmDate = format(date || new Date(), "yyyy/MM/dd");
  const startOfWeekDate = startOfWeek(new Date(fmDate), { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(new Date(fmDate), { weekStartsOn: 1 });
  return { start: startOfWeekDate, end: endOfWeekDate }
}
export function filterReservationsForWeek(date: string, reservations: IReservation[]) {
  const week = getWeekDate(date);
  return reservations.filter(res => {
    const resDate = new Date(res.date);
    return isWithinInterval(resDate, week);
  });
}
export function nextweek() {
  var today = new Date();
  var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  return nextweek;
}