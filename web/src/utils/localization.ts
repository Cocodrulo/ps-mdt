import { DATE_FORMAT_OPTIONS, TIME_FORMAT_OPTIONS } from "@/constants";
import type { ITranslations, IConfig } from "@/interfaces/ITranslations";

const DEFAULT_LOCALE = "en";

const {config, translations}: {config: IConfig, translations: ITranslations} = await getTranslations(DEFAULT_LOCALE);

async function getTranslations(locale: string) {
	return import(`@/translations/${locale}.json`).then((module) => {
		return module as {config: IConfig, translations: ITranslations};
	});
}

export const getLocalizedDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
	return new Date(date).toLocaleDateString(config.dateLocale, {
		...DATE_FORMAT_OPTIONS,
		...options,
	});
};

export const getLocalizedTime = (date: Date, options?: Intl.DateTimeFormatOptions) => {
	return new Date(date).toLocaleTimeString(config.timeLocale, {
		...TIME_FORMAT_OPTIONS,
		...options,
	});
};

export const getLocalizedCurrency = (value: number) => {
	return new Intl.NumberFormat(config.locale, {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const _L = (key: string, ...replacements: [string, string|number][]) => {
	const steps = key.split(".");
	let current: ITranslations | string = translations;
	for (const step of steps) {
		current = (current as ITranslations)[step] || step;
	}

	if (replacements) {
		for (const replacement of replacements) {
			const [key, value] = replacement;
			current = (current as string).replace(`{{${key}}}`, value.toString());
		}
	}

	return current as string;
};
