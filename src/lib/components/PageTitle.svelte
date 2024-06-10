<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
	}
	const { children } = $props<Props>()
</script>

<h1 class="font-fancy text-5xl font-semibold text-primary">
	{@render children()}
</h1>
