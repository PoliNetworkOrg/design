export enum Languages {
	IT = 'it',
	EN = 'en',
}

export interface LanguageString {
	it: string;
	en: string;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Languages {
	export function toNum(language: Languages): number {
		return Languages.values().indexOf(language);
	}

	export function values(): string[] {
		return (Object.values(Languages).filter((value) => typeof value === 'string') as string[]).map((element) => {
			return element.toLowerCase();
		});
	}

	export function languageSwitchPages(url: URL): string[] {
		const path = url.pathname.split('/');
		const langPages: string[] = [];
		for (let index = 0; index < Languages.values().length; index++) {
			path[1] = Languages.values()[index];
			langPages.push(path.join('/'));
		}
		return langPages;
	}
}
