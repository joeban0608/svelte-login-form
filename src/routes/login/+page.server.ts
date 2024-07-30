import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import { fail, redirect } from '@sveltejs/kit';

const mockUserList = [
	{ email: 'joeban@twbeex.com', password: '123' },
	{ email: 'joe@gmail.com', password: 'qwe' }
];
export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		// TODO log the user in
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password');

		if (!email) {
			return fail(400, { email, missing: true });
		}
		// 檢查輸入的 email 是否在 mockUserList 中存在
		const user = mockUserList.find((user) => user.email === email);

		if (!user || user.password !== password) {
			// 如果找不到匹配的用戶 或 密碼不正確，返回錯誤
			return fail(401, { email, incorrect: true });
		}

		const useInfo = {
			email: email
		};

		// console.log('password', password);
		cookies.set('sessionid', uuidv4(), { path: '/' });
		cookies.set('userInfo', JSON.stringify(useInfo), { path: '/' });
		// Process the form data and perform actions
		redirect(301, '/');
		// return { success: true };
	}
};
