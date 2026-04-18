import { DATE_FORMAT_OPTIONS, TIME_FORMAT_OPTIONS } from "@/constants/date";
import type { ITranslations, IConfig } from "@/interfaces/ITranslations";

const DEFAULT_LOCALE = "en";

export const LocalizationConfig = $state({
	config: {} as IConfig,
	translations: {} as ITranslations,
});

async function getTranslations(locale: string) {
	return fetch(`./translations/${locale}.json`).then((res) => {
		return res.json() as Promise<{config: IConfig, translations: ITranslations}>;
	});
}

export const getLocalizedDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
	return new Date(date).toLocaleDateString(LocalizationConfig.config.dateLocale, {
		...DATE_FORMAT_OPTIONS,
		...options,
	});
};

export const getLocalizedTime = (date: Date, options?: Intl.DateTimeFormatOptions) => {
	return new Date(date).toLocaleTimeString(LocalizationConfig.config.timeLocale, {
		...TIME_FORMAT_OPTIONS,
		...options,
	});
};

export const getLocalizedCurrency = (value: number) => {
	return new Intl.NumberFormat(LocalizationConfig.config.locale, {
		style: "currency",
		currency: (LocalizationConfig.config as IConfig & { currency?: string }).currency ?? "USD",
	}).format(value);
};

export const _L = (key: string, ...replacements: [string, string | number][]) => {
	const steps = key.split(".");
	let current: ITranslations | string = LocalizationConfig.translations;

	for (const step of steps) {
		if (typeof current !== "object" || current === null) {
			if (import.meta.env.DEV) {
				console.warn(`[i18n] Missing translation key: "${key}"`);
			}
			return key;
		}
		const next: ITranslations | string | undefined | null = (current as ITranslations)[step];
		if (next === undefined || next === null) {
			if (import.meta.env.DEV) {
				console.warn(`[i18n] Missing translation key: "${key}"`);
			}
			return key;
		}
		current = next;
	}

	if (typeof current !== "string") {
		if (import.meta.env.DEV) {
			console.warn(`[i18n] Translation key "${key}" resolved to a non-string value`);
		}
		return key;
	}

	for (const [placeholder, value] of replacements) {
		current = (current as string).replace(`{{${placeholder}}}`, String(value));
	}

	return current as string;
};

export const setLocale = async (locale: string = DEFAULT_LOCALE) => {
	const newConfig = await getTranslations(locale);
	LocalizationConfig.config = newConfig.config;
	LocalizationConfig.translations = newConfig.translations;
};
