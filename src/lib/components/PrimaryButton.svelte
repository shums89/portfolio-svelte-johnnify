<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
	}
	const { children } = $props<Props>()
</script>

<button class="btn btn-primary shadow hover:shadow-md">{@render children()}</button>
