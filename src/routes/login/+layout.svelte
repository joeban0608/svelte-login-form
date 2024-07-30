<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-col items-center justify-center gap-4 border">
	<slot />
</div>
