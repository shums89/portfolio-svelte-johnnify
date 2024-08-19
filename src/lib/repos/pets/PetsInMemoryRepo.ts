import type { PetsRepo, Pet } from './PetsRepoInterface'
import SummerImage from './images/summer.webp?w=768&enhanced'
import WinstonImage from './images/winston.webp?w=768&enhanced'
import NumiImage from './images/numi.webp?w=768&enhanced'
import Error from '../../../routes/+error.svelte'

import * as m from '$m'

export class PetsInMemoryRepo implements PetsRepo {
	#pets: Pet[] = [
		{
			name: 'Summer',
			favoriteActivity: m.petsSummerActivity(),
			heroImage: {
				src: SummerImage,
				alt: 'Summer playfully running on a hardwood floor'
			}
		},
		{
			name: 'Winston',
			favoriteActivity: 'Standing around looking regal and handsome',
			heroImage: {
				src: WinstonImage,
				alt: 'Winston playfully running on a hardwood floor'
			}
		},
		{
			name: 'Numi',
			favoriteActivity: 'Playing with Summer!',
			heroImage: {
				src: NumiImage,
				alt: 'Numi playfully running on a hardwood floor'
			}
		}
	]

	async getAll(): Promise<Pet[]> {
		// if (Math.random() > 0.7) throw new Error('server went boom')
		return this.#pets
	}

	async get(slug: string): Promise<Pet | null> {
		return this.#pets.find(pet => pet.name.toLowerCase() === slug) || null
	}
}

export const petsRepo = new PetsInMemoryRepo()
