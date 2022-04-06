import { writable } from 'svelte/store';

import fetchJsonEditor from './api/fetchJsonEditor';

function createSchemList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchJsonEditor();
			set(fetchData);
		}
	}
}
export const dataJsonEditor = createSchemList();

