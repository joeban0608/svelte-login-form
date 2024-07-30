<script>
	// Your component's script code goes here
</script>

<h1 class="text-3xl font-bold underline">Login Form</h1>
<form method="POST" action="?/login" class="flex flex-col gap-4 p-4 border">
	<!-- Form fields go here -->

	<label class="flex gap-4 w-full" for="email">
		<span class="font-bold cursor-pointer">Email</span>
		<input class="w-full" id="email" name="email" type="email" />
	</label>
	<label class="flex gap-4" for="password">
		<span class="font-bold cursor-pointer">Password</span>
		<input id="password" name="password" type="password" />
	</label>

	<div>
		<button class="btn bg-primary inline-block w-auto" type="submit">Login</button>
	</div>
</form>
