/**
 * Global site configuration and launch flags.
 */

// Single constant controlling search engine indexing across the site
export const SITE_INDEXABLE = false;

export interface SiteSocial {
	youtube: string;
	tiktok: string;
}

export interface SiteConfig {
	name: string;
	title: string;
	description: string;
	url: string;
	social: SiteSocial;
}

export const siteConfig: SiteConfig = {
	name: 'ArenaForge',
	title: 'ArenaForge — Game đối kháng 2D nguyên bản',
	description: 'Khám phá và tải những tựa game đối kháng 2D indie nguyên bản.',
	url: 'https://web-game-3s8.pages.dev',
	social: {
		// Empty by default; can be populated directly or overridden by env variables
		youtube: import.meta.env.PUBLIC_YOUTUBE_URL || '',
		tiktok: import.meta.env.PUBLIC_TIKTOK_URL || '',
	},
};
