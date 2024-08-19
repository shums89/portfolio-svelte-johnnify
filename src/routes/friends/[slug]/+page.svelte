<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte'

	let { data } = $props()
</script>

<main class="container">
	<PageTitle class="col-span-2 mb-6">{data.pet.name}</PageTitle>
	<enhanced:img
		class="hero-image mb-6 rounded-lg shadow"
		src={data.pet.heroImage.src}
		alt={data.pet.heroImage.alt}
		style={`view-transition-name: hero-image-${data.pet.name}`}
	/>

	<section class="flex flex-col gap-4 text-xl">
		<p>{data.pet.favoriteActivity}</p>
	</section>
</main>
