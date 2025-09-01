<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<svelte:head>
	<title>Register - MoraXtreme</title>
</svelte:head>

<div class="min-h-screen bg-base-200 py-8">
	<div class="max-w-2xl mx-auto px-4">
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h1 class="card-title text-3xl mb-6 text-center">Register for MoraXtreme</h1>
				
				{#if form?.error}
					<div class="alert alert-error mb-4">
						<span>{form.error}</span>
					</div>
				{/if}

				{#if form?.success}
					<div class="alert alert-success mb-4">
						<span>Registration successful! We'll contact you soon.</span>
					</div>
				{:else}
					<form method="POST" use:enhance class="space-y-4">
						<div class="form-control">
							<label class="label" for="fullName">
								<span class="label-text">Full Name *</span>
							</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								class="input input-bordered"
								required
								value={form?.data?.fullName ?? ''}
							/>
						</div>

						<div class="form-control">
							<label class="label" for="email">
								<span class="label-text">Email *</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								class="input input-bordered"
								required
								value={form?.data?.email ?? ''}
							/>
						</div>

						<div class="form-control">
							<label class="label" for="phone">
								<span class="label-text">Phone Number</span>
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								class="input input-bordered"
								value={form?.data?.phone ?? ''}
							/>
						</div>

						<div class="form-control">
							<label class="label" for="university">
								<span class="label-text">University *</span>
							</label>
							<input
								type="text"
								id="university"
								name="university"
								class="input input-bordered"
								required
								value={form?.data?.university ?? ''}
							/>
						</div>

						<div class="form-control">
							<label class="label" for="studentId">
								<span class="label-text">Student ID *</span>
							</label>
							<input
								type="text"
								id="studentId"
								name="studentId"
								class="input input-bordered"
								required
								value={form?.data?.studentId ?? ''}
							/>
						</div>

						<div class="form-control">
							<label class="label" for="category">
								<span class="label-text">Competition Category *</span>
							</label>
							<select name="category" id="category" class="select select-bordered" required>
								<option value="">Select Category</option>
								<option value="programming" selected={form?.data?.category === 'programming'}>Programming</option>
								<option value="ui-ux" selected={form?.data?.category === 'ui-ux'}>UI/UX Design</option>
								<option value="cybersecurity" selected={form?.data?.category === 'cybersecurity'}>Cybersecurity</option>
								<option value="data-science" selected={form?.data?.category === 'data-science'}>Data Science</option>
							</select>
						</div>

						<div class="form-control">
							<label class="label" for="teamName">
								<span class="label-text">Team Name (if applicable)</span>
							</label>
							<input
								type="text"
								id="teamName"
								name="teamName"
								class="input input-bordered"
								value={form?.data?.teamName ?? ''}
							/>
						</div>

						<div class="form-control">
							<label class="label" for="teamMembers">
								<span class="label-text">Team Members (comma separated)</span>
							</label>
							<textarea
								id="teamMembers"
								name="teamMembers"
								class="textarea textarea-bordered"
								placeholder="John Doe, Jane Smith, ..."
								value={form?.data?.teamMembers ?? ''}
							></textarea>
						</div>

						<div class="form-control">
							<label class="label" for="experience">
								<span class="label-text">Previous Experience</span>
							</label>
							<textarea
								id="experience"
								name="experience"
								class="textarea textarea-bordered"
								placeholder="Tell us about your relevant experience..."
								value={form?.data?.experience ?? ''}
							></textarea>
						</div>

						<div class="form-control mt-6">
							<button type="submit" class="btn btn-primary">
								Register Now
							</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
</div>