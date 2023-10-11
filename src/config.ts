const endpoint = () => {
	const dev = import.meta.env.DEV;
	const prod = '';
	const local = 'https://localhost:8080';

	if (dev) return local;

	return prod;
};

export default endpoint;
