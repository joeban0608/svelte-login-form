import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		console.log('event', event);
		// TODO log the user in
	}
};
