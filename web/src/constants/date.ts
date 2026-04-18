export const TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
	hour12: false,
	hour: "2-digit",
	minute: "2-digit",
} as const;

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
	month: "2-digit",
	day: "2-digit",
	year: "numeric",
} as const;
