<script>
	import OutboundLink from '$lib/components/OutboundLink.svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'
	import Discord from '$lib/components/icons/Discord.svelte'
	import Instagram from '$lib/components/icons/Instagram.svelte'
	import YouTube from '$lib/components/icons/YouTube.svelte'
</script>

<main class="container">
	<PageTitle class="mb-6">Find me on socials!</PageTitle>

	<ul class="flex gap-8">
		<li>
			<OutboundLink href="https://www.youtube.com/">
				<YouTube class="w-24" aria-label="YouTube" />
			</OutboundLink>
		</li>
		<li>
			<OutboundLink href="https://discord.gg/">
				<Discord class="w-24" aria-label="Discord" />
			</OutboundLink>
		</li>
		<li>
			<OutboundLink href="https://www.instagram.com/">
				<Instagram class="w-24" aria-label="Instagram" />
			</OutboundLink>
		</li>
	</ul>
</main>
