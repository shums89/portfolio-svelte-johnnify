// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	// fresh API just dropped, let's extend Document
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void
	}

	interface Windows {
		toggleTheme?(): void
	}

	// for enhanced images with query params such as w=768
	declare module '*&enhanced'

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
