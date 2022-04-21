import type { RequestHandler } from './index';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export const post: RequestHandler = async ({ request, locals }) => {

    const { deps } = await request.json();


	const promises = Object.keys(deps).map(d => {
		return fetch(`https://registry.npmjs.org/${d}`)
			.then(response => response.json())
			.then(data => {
				const version = deps[d]
					.replace('^', '')
					.replace('~', '')
					.replace('>', '')
					.replace('<', '')

			    const latest = data['dist-tags'] ? data['dist-tags'].latest : '--'
			    const latestDate = latest === '--' ? '--' : new Date(latest).toDateString();

				return {
					name: d,
					version,
					latest,
					latestDate,
					time: data.time[version]
				}
			})
	})

	const response = await Promise.all(promises)
	const sortedData = response.sort((a, b) => new Date(b.time) - new Date(a.time));
	const body = sortedData.map(s => {
	    s.time =  dayjs(new Date(s.time)).fromNow()
	    return s;
	})


	return {
		status: 200,
		body
	}


};
