import gamesData from '../data/games.json';
import type { Game } from '../types/game';

const games: Game[] = gamesData as Game[];

export function getAllVisibleGames(): Game[] {
	return games.filter((game) => game.isVisible);
}

export function getFeaturedGames(): Game[] {
	return games.filter((game) => game.isVisible && game.isFeatured);
}

export function getGameBySlug(slug: string): Game | undefined {
	return games.find((game) => game.isVisible && game.slug === slug);
}
