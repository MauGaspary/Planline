import { useState } from 'react';

export function useGet<T>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<unknown | null>(null);
	const [isLoading, setLoading] = useState(false);

	async function request() {
		try {
			const response = await fetch(url);
			const json = await response.json();
			setLoading(true);
			setData(json);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}

	return { data, error, isLoading, request };
}
