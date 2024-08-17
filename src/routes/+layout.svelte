<script lang="ts">
	import '@fontsource-variable/shantell-sans'
	import '../app.css'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { onMount, type Snippet } from 'svelte'
	import { page } from '$app/stores'
	import { onNavigate } from '$app/navigation'
	import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite'
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit'
	import { i18n } from '$lib/i18n'

	const defaultMeta = {
		title: 'Paulina Puppers 🐶',
		description: 'Actions shots of tiny friends',
		ogImageUrl: '/og.webp'
	}

	type Props = {
		children: Snippet
	}

	let { children } = $props<Props>()

	let title = $derived($page.data.meta?.title ? `${$page.data.meta.title} 🐶 Paulina Puppers` : defaultMeta.title)
	let description = $derived($page.data.meta?.description ? $page.data.meta.description : defaultMeta.description)
	let ogImageUrl = $derived($page.data.meta?.ogImageUrl ? $page.data.meta.ogImageUrl : defaultMeta.ogImageUrl)

	onNavigate(navigation => {
		if (document.startViewTransition && navigation.from?.url.href !== navigation.to?.url.href) {
			if (navigation.delta && navigation.delta < 0) {
				document.documentElement.dataset.back = 'true'
			} else {
				document.documentElement.removeAttribute('data-back')
			}

			return new Promise(resolve => {
				document.startViewTransition &&
					document.startViewTransition(async () => {
						resolve()
						await navigation.complete
					})
			})
		}
	})

	onMount(() => {
		// Add data-testid now that our app is hydrated
		// We have Playright "wait" fot this before starting the tests
		document.documentElement.dataset.testid = 'hydrated'
	})
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

<ParaglideJS {i18n}>
	<Header />
	{@render children()}
	<Footer />
</ParaglideJS>
