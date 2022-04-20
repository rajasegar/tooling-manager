import { Octokit } from "octokit";
import type { RequestHandler } from './index';

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

export const get: RequestHandler = async ({ request, locals }) => {

	const params = new URL(request.url).searchParams;

	const response = await octokit.rest.repos.getContent({
		owner: params.get('owner'),
		repo: params.get('repo'),
		path: params.get('path') || 'package.json',
	});


	const manifest = JSON.parse(Buffer.from(response.data.content, 'base64').toString());

	return {
		status: 200,
		body: manifest
	}


};

export const post: RequestHandler = async ({ request, locals }) => {
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect = {
	status: 303,
	headers: {
		location: '/todos'
	}
};

export const patch: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();

	// await api('patch', `todos/${locals.userid}/${form.get('uid')}`, {
	// 	text: form.has('text') ? form.get('text') : undefined,
	// 	done: form.has('done') ? !!form.get('done') : undefined
	// });

	return redirect;
};

export const del: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();

	// await api('delete', `todos/${locals.userid}/${form.get('uid')}`);

	return redirect;
};
