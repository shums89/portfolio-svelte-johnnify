import type { PetsRepo, Pet } from "./PetsRepoInterface"

class PetsInMemoryRepo implements PetsRepo {
  #pets: Pet[] = [
    {
      name: 'Summer',
      favoriteActivity: 'Running full-tilt at the park!',
      heroImage: {
        src: '/images/summer.webp',
        alt: 'Summer playfully running on a hardwood floor',
      },
    },
    {
      name: 'Winston',
      favoriteActivity: 'Standing around looking regal and handsome',
      heroImage: {
        src: '/images/winston.webp',
        alt: 'Winston playfully running on a hardwood floor',
      },
    },
    {
      name: 'Numi',
      favoriteActivity: 'Playing with Summer!',
      heroImage: {
        src: '/images/numi.webp',
        alt: 'Numi playfully running on a hardwood floor',
      },
    },
  ]

  async getAll(): Promise<Pet[]> {
    return this.#pets
  }
}

export const petsRepo = new PetsInMemoryRepo()