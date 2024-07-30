import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import {
	//  fail,
	redirect
} from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		// TODO log the user in
		const formData = await request.formData();
		const email = formData.get('email');
		cookies.set('sessionid', uuidv4(), { path: '/' });
		console.log('email', email);
		// Process the form data and perform actions
		redirect(301, '/');
		// return { success: true };
	}
};
