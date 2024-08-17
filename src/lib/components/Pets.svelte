<script lang="ts">
	import type { Pet } from '$lib/repos/pets/PetsRepoInterface'
	import PetCard from './PetCard.svelte'
	import * as m from '$m'

	type Props = {
		pets: Pet[]
	}
	let { pets } = $props<Props>()
</script>

<section>
	<h2 class="mb-8 font-fancy text-4xl font-semibold">{m.bestPetsSection()}</h2>
	<ul class="grid items-center justify-center gap-8 md:grid-cols-2 xl:grid-cols-3">
		{#each pets as { name, heroImage, favoriteActivity }}
			<li><PetCard {name} {heroImage} {favoriteActivity} /></li>
		{/each}
	</ul>
</section>
