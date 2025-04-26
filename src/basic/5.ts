export enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
  
export const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Sunday || day === DayOfWeek.Saturday;
};