export type Pet = {
	name: string
	favoriteActivity: string
	heroImage: {
		src: string
		alt: string
	}
}

export interface PetsRepo {
	getAll(): Promise<Pet[]>
	get(slug: string): Promise<Pet | null>
}
