import { writable } from 'svelte/store';

export const spotlightImage = writable(null);

export function openSpotlight(src, alt, caption) {
	spotlightImage.set({ src, alt, caption });
}

export function closeSpotlight() {
	spotlightImage.set(null);
}
