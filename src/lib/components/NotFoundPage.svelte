<script lang="ts">
	import { page } from '$app/stores'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import PrimaryLink from '$lib/components/PrimaryLink.svelte'
	import NotFoundImage from './not-found.webp?enhanced'
</script>

<div class="mb-4 grid grid-cols-3 items-center lg:mb-8">
	<PageTitle class="col-span-2">Page not found!</PageTitle>
	<enhanced:img class="rounded-lg shadow" src={NotFoundImage} alt="" />
</div>

<section class="flex flex-col gap-8 text-xl">
	<p>We're looking but we could not find <strong>{$page.url.pathname}</strong> ...</p>

	<PrimaryLink class="self-start" href="/">Back to homepage?</PrimaryLink>
</section>
