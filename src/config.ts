const endpoint = () => {
	const dev = import.meta.env.DEV;
	const prod = 'http://planline.default.dev.br';
	const local = 'http://localhost:8080';

	if (dev) return local;

	return prod;
};

export default endpoint;
