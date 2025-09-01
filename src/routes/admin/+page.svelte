<script lang="ts">
	let { data } = $props();
	
	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(date);
	}

	function getStatusBadgeClass(status: string) {
		switch (status) {
			case 'approved': return 'badge-success';
			case 'rejected': return 'badge-error';
			case 'pending': return 'badge-warning';
			default: return 'badge-neutral';
		}
	}
</script>

<svelte:head>
	<title>Admin Dashboard - MoraXtreme</title>
</svelte:head>

<div class="min-h-screen bg-base-200 py-8">
	<div class="max-w-7xl mx-auto px-4">
		<div class="mb-8">
			<h1 class="text-4xl font-bold mb-4">Admin Dashboard</h1>
			<div class="breadcrumbs text-sm">
				<ul>
					<li><a href="/">Home</a></li>
					<li>Admin Dashboard</li>
				</ul>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
			<div class="stat bg-base-100 shadow rounded-lg">
				<div class="stat-title">Total Registrations</div>
				<div class="stat-value text-primary">{data.stats.total}</div>
			</div>
			<div class="stat bg-base-100 shadow rounded-lg">
				<div class="stat-title">Pending</div>
				<div class="stat-value text-warning">{data.stats.pending}</div>
			</div>
			<div class="stat bg-base-100 shadow rounded-lg">
				<div class="stat-title">Approved</div>
				<div class="stat-value text-success">{data.stats.approved}</div>
			</div>
			<div class="stat bg-base-100 shadow rounded-lg">
				<div class="stat-title">Rejected</div>
				<div class="stat-value text-error">{data.stats.rejected}</div>
			</div>
		</div>

		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="flex justify-between items-center mb-6">
					<h2 class="card-title text-2xl">Registrations</h2>
					<div class="join">
						<select class="select select-bordered join-item">
							<option>All Categories</option>
							<option>Programming</option>
							<option>UI/UX Design</option>
							<option>Cybersecurity</option>
							<option>Data Science</option>
						</select>
						<select class="select select-bordered join-item">
							<option>All Status</option>
							<option>Pending</option>
							<option>Approved</option>
							<option>Rejected</option>
						</select>
					</div>
				</div>

				<div class="overflow-x-auto">
					<table class="table table-zebra">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>University</th>
								<th>Category</th>
								<th>Team</th>
								<th>Status</th>
								<th>Registered</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{#each data.registrations as reg}
								<tr>
									<td>
										<div class="font-medium">{reg.fullName}</div>
										<div class="text-sm text-base-content/70">{reg.studentId}</div>
									</td>
									<td>
										<a href="mailto:{reg.email}" class="link link-primary">{reg.email}</a>
										{#if reg.phone}
											<div class="text-sm text-base-content/70">{reg.phone}</div>
										{/if}
									</td>
									<td>{reg.university}</td>
									<td>
										<div class="badge badge-outline">{reg.category}</div>
									</td>
									<td>
										{#if reg.teamName}
											<div class="font-medium">{reg.teamName}</div>
											{#if reg.teamMembers}
												<div class="text-xs text-base-content/70">{reg.teamMembers}</div>
											{/if}
										{:else}
											<span class="text-base-content/50">Individual</span>
										{/if}
									</td>
									<td>
										<div class="badge {getStatusBadgeClass(reg.status || 'pending')}">
											{reg.status || 'pending'}
										</div>
									</td>
									<td>
										<div class="text-sm">{formatDate(reg.createdAt)}</div>
									</td>
									<td>
										<div class="join join-vertical lg:join-horizontal">
											<button class="btn btn-xs btn-success join-item">Approve</button>
											<button class="btn btn-xs btn-error join-item">Reject</button>
											<button class="btn btn-xs btn-info join-item">View</button>
										</div>
									</td>
								</tr>
							{:else}
								<tr>
									<td colspan="8" class="text-center py-8 text-base-content/50">
										No registrations found
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>