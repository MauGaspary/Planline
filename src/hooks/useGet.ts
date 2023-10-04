import axios from 'axios';
import { useState } from 'react';

type UseGet<T> = {
	data: T | null;
	error: unknown | null;
	isLoading: boolean;
	request: () => Promise<void>;
};

export function useGet<T>(url: string): UseGet<T> {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<unknown | null>(null);
	const [isLoading, setLoading] = useState(false);

	async function request(): Promise<void> {
		try {
			setLoading(true);
			const response = await axios.get(url);
			setData(response.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}

	return { data, error, isLoading, request };
}
