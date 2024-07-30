import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import {
	//  fail,
	redirect
} from '@sveltejs/kit';
export const load = (async ({ cookies }) => {
	const sessionid = cookies.get('sessionid');
	const cookieUserInfo = cookies.get('userInfo') as string | undefined;
	const userInfo = cookieUserInfo ? JSON.parse(cookieUserInfo) : null;
	return { sessionid, userInfo };
}) satisfies PageServerLoad;

export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete('sessionid', { path: '/' });
		cookies.delete('email', { path: '/' });
		throw redirect(302, '/login');
		// return {
		// 	success: true
		// };
	}
};
