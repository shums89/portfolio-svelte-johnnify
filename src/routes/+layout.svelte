<script lang="ts">
	import '../app.css'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import type { Snippet } from 'svelte'
	import { page } from '$app/stores'

	const defaultMeta = {
		title: 'Paulina Puppers 🐶',
		description: 'Actions shots of tiny friends',
		ogImagesUrl: '/og.webp'
	}

	type Props = {
		children: Snippet
	}

	let { children } = $props<Props>()

	let title = $derived($page.data.meta?.title ? `${$page.data.meta.title} 🐶 Paulina Puppers` : defaultMeta.title)
	let description = $derived($page.data.meta?.description ? $page.data.meta.description : defaultMeta.description)
	let ogImageUrl = $derived($page.data.meta?.ogImageUrl ? $page.data.meta.ogImageUrl : defaultMeta.ogImageUrl)
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Paulina Puppers" />
	<meta property="og:url" content={$page.url.href} />

	<meta property="og:image" content={ogImageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />
{@render children()}
<Footer />
