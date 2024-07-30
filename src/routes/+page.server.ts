import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import {
	//  fail,
	redirect
} from '@sveltejs/kit';
export const load = (async ({ cookies }) => {
	console.log('cookies', cookies);
	const sessionid = cookies.get('sessionid');
	console.log('sessionid', sessionid);
	return { sessionid };
}) satisfies PageServerLoad;

export const actions: Actions = {
	logout: async ({ cookies, locals }) => {
		console.log('locals', locals);
		cookies.delete('sessionid', { path: '/' });
		throw redirect(302, '/login');
		// return {
		// 	success: true
		// };
	}
};
