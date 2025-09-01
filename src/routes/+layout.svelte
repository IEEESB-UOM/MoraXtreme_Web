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
		<div class="navbar bg-base-100 shadow-lg">
			<div class="navbar-start">
				<div class="dropdown">
					<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li><a href="/" class:active={$page.route.id === '/'}>Home</a></li>
						<li><a href="/about" class:active={$page.route.id === '/about'}>About</a></li>
						<li><a href="/register" class:active={$page.route.id === '/register'}>Register</a></li>
						<li><a href="/competition" class:active={$page.route.id === '/competition'}>Competition</a></li>
						<li><a href="/faq" class:active={$page.route.id === '/faq'}>FAQ</a></li>
						<li><a href="/contact" class:active={$page.route.id === '/contact'}>Contact</a></li>
					</ul>
				</div>
				<a href="/" class="btn btn-ghost text-xl font-bold">MoraXtreme</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/" class:active={$page.route.id === '/'}>Home</a></li>
					<li><a href="/about" class:active={$page.route.id === '/about'}>About</a></li>
					<li><a href="/register" class:active={$page.route.id === '/register'}>Register</a></li>
					<li><a href="/competition" class:active={$page.route.id === '/competition'}>Competition</a></li>
					<li><a href="/faq" class:active={$page.route.id === '/faq'}>FAQ</a></li>
					<li><a href="/contact" class:active={$page.route.id === '/contact'}>Contact</a></li>
				</ul>
			</div>
			<div class="navbar-end">
				<a href="/admin" class="btn btn-outline btn-sm">Admin</a>
			</div>
		</div>

		<main class="flex-1">
			{@render children?.()}
		</main>

		<footer class="footer footer-center p-10 bg-primary text-primary-content">
			<aside>
				<svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current">
					<path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
				</svg>
				<p class="font-bold">
					MoraXtreme 2024<br/>The Ultimate Tech Competition
				</p>
				<p>Copyright © 2024 - All rights reserved</p>
			</aside>
			<nav>
				<div class="grid grid-flow-col gap-4">
					<a href="/about" class="link link-hover">About</a>
					<a href="/faq" class="link link-hover">FAQ</a>
					<a href="/contact" class="link link-hover">Contact</a>
				</div>
			</nav>
		</footer>
	</div>
</div>
