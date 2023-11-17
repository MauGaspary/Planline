import axios from 'axios';
import { useState } from 'react';

type BackEndError = {
	response: {
		data: {
			message: string;
		};
	};
};

type UsePost<T, B> = {
	data: T | null;
	error: BackEndError | null;
	isLoading: boolean;
	request: (url: string, body: B) => Promise<void>;
};

const { VITE_API_URL } = import.meta.env;

const axiosInstance = axios.create({
	baseURL: VITE_API_URL,
});

export function usePost<T, B>(): UsePost<T, B> {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<BackEndError | null>(null);
	const [isLoading, setLoading] = useState(false);

	async function request(url: string, body: B): Promise<void> {
		try {
			setLoading(true);
			const response = await axiosInstance.post(url, body);
			setData(response.data);
		} catch (e) {
			setError(e as BackEndError);
		} finally {
			setLoading(false);
		}
	}

	return { data, error, isLoading, request };
}
