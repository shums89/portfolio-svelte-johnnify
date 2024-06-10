<script>
	import ThemeToggleIcon from './ThemeToggleIcon.svelte'
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">Paulina Puppers</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal items-center px-1">
			<li><a href="/contact">contact</a></li>
			<li><button onclick={window.toggleTheme}><ThemeToggleIcon class="w-4" /></button></li>
		</ul>
	</div>
</div>
