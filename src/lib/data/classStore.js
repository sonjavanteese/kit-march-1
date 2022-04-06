import { writable } from 'svelte/store';

import fetchJsonEditor from './api/fetchJsonEditor';
import { fetchClassic } from './api/fetchSessionData';

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

function createSessionList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchClassic();
			set(fetchData);
		}
	}
}
export const dataSession = createSessionList();