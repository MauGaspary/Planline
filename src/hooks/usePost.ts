import axios from 'axios';
import { useState } from 'react';

type UsePost<T, B> = {
	data: T | null;
	error: unknown | null;
	isLoading: boolean;
	request: (url: string, body: B) => Promise<void>;
};

const { VITE_API_URL } = import.meta.env;

const axiosInstance = axios.create({
	baseURL: VITE_API_URL,
});

export function usePost<T, B>(): UsePost<T, B> {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<unknown | null>(null);
	const [isLoading, setLoading] = useState(false);

	async function request(url: string, body: B): Promise<void> {
		try {
			setLoading(true);
			const response = await axiosInstance.post(url, body);
			setData(response.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}

	return { data, error, isLoading, request };
}
