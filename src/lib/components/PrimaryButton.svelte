<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLButtonAttributes } from 'svelte/elements'

	type Props = {
		children: Snippet
	} & HTMLButtonAttributes
	let { children, class: className, ...restProps } = $props<Props>()
</script>

<button {...restProps} class={`${className} btn btn-primary shadow hover:shadow-md`}>{@render children()}</button>
