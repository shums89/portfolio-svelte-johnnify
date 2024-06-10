<script lang="ts">
	import Hero from '$lib/components/Hero.svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Pets from '$lib/components/Pets.svelte'

	let { data } = $props()
</script>

<main class="container">
	<PageTitle>Paulina Puppers</PageTitle>

	<Hero />

	<Pets pets={data.pets} />
</main>
