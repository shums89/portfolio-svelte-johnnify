<script lang="ts">
	import { i18n } from '$lib/i18n'
	import { page } from '$app/stores'
	import { availableLanguageTags, languageTag } from '$paraglide/runtime'
	import Globe from './icons/Globe.svelte'

	const langsToLabels: Record<(typeof availableLanguageTags)[number], string> = {
		en: 'English',
		ru: 'Русский',
		es: 'Espanol'
	}

	let currentLanguageLabel = $derived(langsToLabels[languageTag()])
</script>

<div class="dropdown">
	<button tabindex="0" class="flex items-center gap-1"><Globe class="w-4" />{currentLanguageLabel}</button>
	<ul tabindex="0" class="shadows menu dropdown-content z-40 mt-24 rounded-box bg-base-100 p-2">
		{#each availableLanguageTags as lang}
			<li>
				<a href={i18n.route($page.url.pathname)} hreflang={lang} aria-current={lang === languageTag() ? 'page' : undefined}>
					{langsToLabels[lang]}
				</a>
			</li>
		{/each}
	</ul>
</div>
