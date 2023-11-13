import axios from 'axios';
import { useState } from 'react';

type UsePut<T, B> = {
	dataEdit: T | null;
	errorEdit: unknown | null;
	isLoadingEdit: boolean;
	request: (url: string, body: B) => Promise<void>;
};

const { VITE_API_URL } = import.meta.env;

const axiosInstance = axios.create({
	baseURL: VITE_API_URL,
});

export function usePut<T, B>(): UsePut<T, B> {
	const [dataEdit, setData] = useState<T | null>(null);
	const [errorEdit, setError] = useState<unknown | null>(null);
	const [isLoadingEdit, setLoading] = useState(false);

	async function request(url: string, body: B): Promise<void> {
		try {
			setLoading(true);
			const response = await axiosInstance.put(url, body);
			setData(response.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}

	return { dataEdit, errorEdit, isLoadingEdit, request };
}
