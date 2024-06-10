<script lang="ts">
	import Hero from '$lib/components/Hero.svelte'
	import Pets from '$lib/components/Pets.svelte'

	let { data } = $props()
</script>

<main class="container">
	<h1 class="text-6xl text-primary">Paulina Puppers</h1>

	<Hero />

	<Pets pets={data.pets} />
</main>
