import { getTimeAgo } from "../utilities"

export const useTimeAgo = (timestamp: number) => {
  const locale = "es";
  const timeago = getTimeAgo(timestamp, locale);

  const date = new Date(timestamp);

  const formatedDate = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' }).format(date);

  return {
    dateTime: formatedDate,
    timeago
  }
};