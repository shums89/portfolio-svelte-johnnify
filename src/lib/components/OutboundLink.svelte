<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	type Props = {
		children: Snippet
	} & Omit<HTMLAnchorAttributes, 'target' | 'rel'>

	const { children, class: className, ...restProps } = $props<Props>()
</script>

<a
	class={`${className} transition hover:brightness-150 dark:hover:brightness-125`}
	{...restProps}
	target="_blank"
	rel="noopener noreferrer"
>
	{@render children()}
</a>
