import axios from 'axios';
import { useState } from 'react';

type BackEndError = {
	response: {
		data: {
			message: string;
		};
	};
};

type UsePut<T, B> = {
	dataEdit: T | null;
	errorEdit: BackEndError | null;
	isLoadingEdit: boolean;
	request: (url: string, body: B) => Promise<void>;
};

const { VITE_API_URL } = import.meta.env;

const axiosInstance = axios.create({
	baseURL: VITE_API_URL,
});

export function usePut<T, B>(): UsePut<T, B> {
	const [dataEdit, setData] = useState<T | null>(null);
	const [errorEdit, setError] = useState<BackEndError | null>(null);
	const [isLoadingEdit, setLoading] = useState(false);

	async function request(url: string, body: B): Promise<void> {
		try {
			setLoading(true);
			const response = await axiosInstance.put(url, body);
			setData(response.data);
		} catch (e) {
			setError(e as BackEndError);
		} finally {
			setLoading(false);
		}
	}

	return { dataEdit, errorEdit, isLoadingEdit, request };
}
