export interface ITranslations {
	[key: string]: string | ITranslations;
}

export interface IConfig {
	locale: string;
	dateLocale: string;
	timeLocale: string;
}