import { PetsInMemoryRepo } from '$lib/repos/pets/PetsInMemoryRepo'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const petsRepo = new PetsInMemoryRepo()
	const pet = await petsRepo.get(slug)

	if (!pet) {
		error(404, `Pet ${slug} not found`)
	}

	return { pet }
}
