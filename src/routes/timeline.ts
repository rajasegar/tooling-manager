import type { RequestHandler } from './index';

import semver from 'semver';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export const post: RequestHandler = async ({ request, locals }) => {

    const { deps } = await request.json();

	const promises = Object.keys(deps).map(d => {
		return fetch(`https://registry.npmjs.org/${d}`)
			.then(response => response.json())
			.then(data => {
			    const version = semver.valid(semver.coerce(deps[d]));

			    if(version) {
				

			    const latest = data['dist-tags'] ? data['dist-tags'].latest : '--'
			    const latestDate = latest === '--' ? '--' : new Date(data.time[latest]).toDateString();

				return {
					name: d,
					version,
					latest,
					latestDate,
					time: data.time[version]
				}
			    } else {
				
				return {
					name: d,
					version,
				    latest: '-',
				    latestDate: '-',
				    time: '-',
				}
			    }
			})
	})

	const response = await Promise.all(promises)
    const sortedData = response
	.filter(r => r.time !== '-')
	.sort((a, b) => new Date(b.time) - new Date(a.time));
	const body = sortedData.map(s => {
	    s.time =  dayjs(new Date(s.time)).fromNow()
	    return s;
	})


	return {
		status: 200,
		body
	}


};
