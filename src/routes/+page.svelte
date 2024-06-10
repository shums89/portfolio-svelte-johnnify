<script lang="ts">
	import Pets from '$lib/components/Pets.svelte'

	let { data } = $props()
</script>

<main class="container">
	<h1 class="text-6xl text-primary">Paulina Puppers</h1>
	<p>Here's my most proud work!</p>
	<button class="btn btn-primary shadow">Here's my most proud work!</button>
	<Pets pets={data.pets} />
</main>
