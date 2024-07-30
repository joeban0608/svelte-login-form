<script>
	// Your component's script code goes here
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1 class="text-3xl font-bold underline">Login Form</h1>
<form method="POST" action="?/login" class="flex flex-col gap-4 p-4 border">
	<!-- Form fields go here -->
	{#if form?.missing}<p class="text-error">The email field is required</p>{/if}
	{#if form?.incorrect}<p class="text-error">Invalid credentials!</p>{/if}
	<label class="flex gap-4 w-full" for="email">
		<span class="font-bold cursor-pointer">Email</span>
		<input class="w-full" id="email" name="email" type="email" required />
	</label>
	<label class="flex gap-4" for="password">
		<span class="font-bold cursor-pointer">Password</span>
		<input id="password" name="password" type="password" required />
	</label>

	<div>
		<button class="btn bg-primary inline-block w-auto" type="submit">Login</button>
	</div>
</form>
