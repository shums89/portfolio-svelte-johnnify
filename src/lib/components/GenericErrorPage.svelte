<script lang="ts">
	import { page } from '$app/stores'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import PrimaryButton from '$lib/components/PrimaryButton.svelte'
	import ErrorImage from './error.webp?enhanced'
</script>

<div class="mb-4 grid grid-cols-3 items-center lg:mb-8">
	<PageTitle class="col-span-2">Something went wrong!</PageTitle>
	<enhanced:img class="rounded-lg shadow" src={ErrorImage} alt="" />
</div>

<section class="flex flex-col gap-8 text-xl">
	<p>We've had a problem rendering this page. Apologies!</p>

	{#if $page.error?.message}
		<p class="italic">{$page.error?.message}</p>
	{/if}

	<PrimaryButton
		class="self-start"
		onclick={() => {
			location.reload()
		}}
	>
		Try refreshing?
	</PrimaryButton>
</section>
