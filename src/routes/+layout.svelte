<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';

	// export let data: LayoutData;
	import { page } from '$app/stores';
	$: sessionid = $page.data.sessionid;
	$: userEmail = $page.data?.userInfo?.email ?? '';
</script>

<header class="w-full">
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost text-xl">Home</a>
		</div>
		<div class="flex-none">
			{#if $page.url.pathname !== '/login' && !sessionid}
				<a href="/login">
					<div class="mr-4 btn text-info">Login</div>
				</a>
			{/if}
			{#if sessionid}
				<h3 class="font-bold">{userEmail}</h3>
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
					<ul
						class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li><a href="/#setting">Settings</a></li>
						<li class="w-full bg-blue inline-block">
							<form method="POST" action="?/logout" class="w-full bg-red inline-block">
								<button class="w-full text-start" type="submit"> Logout </button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</header>
<slot />
