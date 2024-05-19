import { type ClassValue, clsx } from "clsx"
import { endOfWeek, startOfWeek, format, isWithinInterval, addDays } from "date-fns";
import { twMerge } from "tailwind-merge"
import { IReservation } from "./db/models/reservation.model";
import { parse } from "path";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWeekDate(date?: Date)
{
  const fmDate = format(date || new Date(), "yyyy/MM/dd");
  const startOfWeekDate = startOfWeek(new Date(fmDate), { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(new Date(fmDate), { weekStartsOn: 1 });
  return { start: startOfWeekDate, end: endOfWeekDate }
}

export function getNextWeek(date?: Date)
{
    const fmDate = format(date || new Date(), "yyyy/MM/dd");
    const today = addDays(new Date(fmDate), 1);
    const nextSaturday = addDays(today, 6);
    return { start: today, end: nextSaturday }
}


export function filterReservationsForWeek(date: Date, reservations: IReservation[]) {
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
export function parseName(name: string) {
  if (!name) return ""
  var values = name.split(" ").map((value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase())
  return values.join(" ");
}

export const periodsMap = {
  "1": "09:00 - 12:00",
  "2": "12:00 - 15:00",
  "3": "15:00 - 18:00",
  "4": "18:00 - 21:00"
};

export const parseTime = (timeString: string) => {
  const now = new Date();
  const [hours, minutes] = timeString.split(':').map(Number);
  now.setHours(hours, minutes, 0, 0);
  return now
};

export const getNextPeriodStart = () => {
  const now = new Date();

  for (let key in periodsMap) {
      const [start, end] = periodsMap[key as keyof typeof periodsMap].split(' - ');
      const startTime = parseTime(start);
      const endTime = parseTime(end);
      if (now.getTime() > startTime.getTime() && now.getTime() < endTime.getTime()) {
          return endTime;
      }
  }

  const firstPeriodStartTime = parseTime(periodsMap["1"].split(' - ')[0]);
  return new Date(firstPeriodStartTime.getTime() + 24 * 60 * 60 * 1000);
};

export const getNextPeriod = () => {
  const now = new Date();

  for (let key in periodsMap) {
      const [start, end] = periodsMap[key as keyof typeof periodsMap].split(' - ');
      const startTime = parseTime(start);
      const endTime = parseTime(end);
      if (now.getTime() > startTime.getTime() && now.getTime() < endTime.getTime()) {
          return parseInt(key);
      }
  }
  return 1;
};