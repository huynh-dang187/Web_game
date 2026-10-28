export type Platform = 'PC' | 'Mobile';

export interface ControlMapping {
	action: string;
	key: string;
}

export interface SystemRequirements {
	os: string;
	processor: string;
	memory: string;
	storage: string;
}

export interface Game {
	id: string;
	title: string;
	slug: string;
	platform: Platform;
	genres: string[];
	shortDescription: string;
	description: string;
	controls: ControlMapping[];
	systemRequirements: SystemRequirements;
	version: string;
	fileSize: string;
	updatedAt: string;
	coverImage: string;
	screenshots: string[];
	youtubeId: string;
	downloadUrl: string;
	isFeatured: boolean;
	isVisible: boolean;
	views: number;
	downloads: number;
}
