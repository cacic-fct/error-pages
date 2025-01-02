<script lang="ts">
	import { page } from '$app/state';
	import ErrorComponent from '../../components/ErrorComponent.svelte';

	const errorCode = parseInt(page.url.pathname.split('/').pop()!);
</script>

<ErrorComponent {errorCode} />
