import type { RequestHandler } from './index';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export const get: RequestHandler = async ({ request, locals }) => {

	const params = new URL(request.url).searchParams;
	const response = await fetch(`https://registry.npmjs.org/${params.get('name')}/`);
	const data = await response.json();
	const version = params.get('version')
		.replace('^', '')
		.replace('~', '')
		.replace('>', '')
		.replace('<', '')

	const _time = new Date(data.time[version])
	const time = dayjs(_time).fromNow()

	return {
		status: 200,
		body: {
			time,
		}
	}


};
