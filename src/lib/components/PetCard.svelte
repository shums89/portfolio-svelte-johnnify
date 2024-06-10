<script lang="ts">
	import type { Pet } from '$lib/repos/pets/PetsRepoInterface'

	let { name, heroImage, favoriteActivity } = $props<Pet>()
</script>

<div class="card glass w-96">
	<figure>
		<img src={heroImage.src} alt={heroImage.alt} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<p>{favoriteActivity}</p>
		<div class="card-actions justify-end">
			<a class="btn btn-secondary" href="/">see more!</a>
		</div>
	</div>
</div>
