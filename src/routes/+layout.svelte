<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="drawer">
	<input id="drawer-toggle" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar fixed z-100 top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
			<div class="navbar-start">
				<div class="dropdown">
					<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-100">
						<li><a href="/" class:active={$page.route.id === '/'}>Home</a></li>
						<li><a href="/register" class:active={$page.route.id === '/register'}>Register</a></li>
						<li><a href="/competition" class:active={$page.route.id === '/competition'}>Competition</a></li>
						<li><a href="/faq" class:active={$page.route.id === '/faq'}>FAQ</a></li>
						<li><a href="/contact" class:active={$page.route.id === '/contact'}>Contact</a></li>
					</ul>
				</div>
				<a href="/" class="btn btn-ghost">
					<img src="/logo.avif" alt="MoraXtreme Logo" class="w-auto h-16" />
				</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/" class:active={$page.route.id === '/'}>Home</a></li>
					<li><a href="/competition" class:active={$page.route.id === '/competition'}>Competition</a></li>
					<li><a href="/faq" class:active={$page.route.id === '/faq'}>FAQ</a></li>
					<li><a href="/contact" class:active={$page.route.id === '/contact'}>Contact</a></li>
				</ul>
			</div>
			<div class="navbar-end">
				<a href="/register" class="btn btn-primary">Register</a>
			</div>
		</div>

		<main class="flex-1">
			{@render children?.()}
		</main>
	</div>
</div>
