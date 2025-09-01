<script lang='ts'>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let isLoginMode = $state(true);
	
	function toggleMode() {
		isLoginMode = !isLoginMode;
	}
</script>

<svelte:head>
	<title>{isLoginMode ? 'Login' : 'Register'} - MoraXtreme</title>
</svelte:head>

<div class="min-h-screen bg-base-200 flex items-center justify-center py-8">
	<div class="max-w-md w-full mx-4">
		<div class="text-center mb-8">
			<a href="/" class="btn btn-ghost text-2xl font-bold">MoraXtreme</a>
			<p class="text-base-content/70 mt-2">
				{#if $page.url.searchParams.get('redirectTo')}
					Admin access required
				{:else}
					Welcome back
				{/if}
			</p>
		</div>

		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="tabs tabs-boxed mb-6">
					<button 
						class="tab {isLoginMode ? 'tab-active' : ''}"
						onclick={toggleMode}
						disabled={isLoginMode}
					>
						Login
					</button>
					<button 
						class="tab {!isLoginMode ? 'tab-active' : ''}"
						onclick={toggleMode}
						disabled={!isLoginMode}
					>
						Register
					</button>
				</div>

				{#if form?.message}
					<div class="alert {form.message.includes('success') ? 'alert-success' : 'alert-error'} mb-4">
						<span>{form.message}</span>
					</div>
				{/if}

				<form 
					method="post" 
					action={isLoginMode ? "?/login" : "?/register"} 
					use:enhance 
					class="space-y-4"
				>
					<div class="form-control">
						<label class="label" for="username">
							<span class="label-text">Username</span>
						</label>
						<input
							type="text"
							id="username"
							name="username"
							class="input input-bordered"
							placeholder="Enter your username"
							required
						/>
					</div>

					<div class="form-control">
						<label class="label" for="password">
							<span class="label-text">Password</span>
						</label>
						<input
							type="password"
							id="password"
							name="password"
							class="input input-bordered"
							placeholder="Enter your password"
							required
						/>
					</div>

					<div class="form-control mt-6">
						<button type="submit" class="btn btn-primary">
							{isLoginMode ? 'Login' : 'Create Account'}
						</button>
					</div>
				</form>

				<div class="divider">OR</div>

				<div class="text-center">
					<button onclick={toggleMode} class="btn btn-ghost btn-sm">
						{isLoginMode ? "Need an account? Register" : "Already have an account? Login"}
					</button>
				</div>

				{#if $page.url.searchParams.get('redirectTo')}
					<div class="alert alert-info mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						<span>You need to be logged in as an admin to access that page.</span>
					</div>
				{/if}
			</div>
		</div>

		<div class="text-center mt-6">
			<a href="/" class="btn btn-outline btn-sm">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
				</svg>
				Back to Home
			</a>
		</div>
	</div>
</div>
