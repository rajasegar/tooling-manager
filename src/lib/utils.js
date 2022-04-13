import { difference, intersection, uniq } from 'ramda';
export function getCategories(arr, data) {
	return arr.map(m => {
		return (data.find(d => d.name === m)).category;
	});
};

export function getCategoryFor(p, data) {
	const [item] = data.filter(d => d.name === p);
	return item ? item.category : 'unknown';
};

export function getFoundAndMissing(packages, data) {
	const packageNames = Object.keys(packages);
	const stdPackages = data.map(d => d.name);

	// Find the difference for missing libs
	const _missing = difference(stdPackages, packageNames);

	// find the intersection for installed / found libs
	const _found = intersection(stdPackages, packageNames);


	const foundCategories = uniq(getCategories(_found, data));
	const missingCategories = uniq(getCategories(_missing, data));

	// remove the found category items from missing
	// only one category lib is sufficient
	const finalMissing = missingCategories.filter(c => !foundCategories.includes(c));

	const found = foundCategories.sort();
	const missing = finalMissing.sort();

	return [found, missing];


}
