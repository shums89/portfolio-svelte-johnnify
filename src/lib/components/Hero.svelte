<script lang="ts">
	import * as m from '$m'
	import PrimaryButton from './PrimaryButton.svelte'
</script>

<section class="my-8 rounded-lg bg-secondary px-inline py-8">
	<p class="mb-4 text-secondary-content">{@html m.heroCopy()}</p>

	<PrimaryButton>{m.heroAction()}</PrimaryButton>
</section>
