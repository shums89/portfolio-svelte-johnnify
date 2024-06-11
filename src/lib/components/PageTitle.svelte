<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
		class?: string
	}
	let { children, class: className } = $props<Props>()
</script>

<h1 class={`${className} font-fancy text-5xl font-semibold text-primary`}>
	{@render children()}
</h1>
