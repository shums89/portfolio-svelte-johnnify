<script>
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
</script>

<header class="navbar sticky top-0 z-50 bg-base-100 bg-base-100/50 backdrop-blur">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">Paulina Puppers</a>
	</div>
	<nav class="flex-none">
		<ul class="menu menu-horizontal items-center px-1">
			<li><a href="/contact">contact</a></li>
			<li><button onclick={window.toggleTheme}><ThemeToggleIcon class="w-4" /></button></li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	header {
		view-transition-name: header;
	}
</style>
