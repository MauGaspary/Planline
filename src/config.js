var endpoint = function () {
	var dev = import.meta.env.DEV;
	var prod = '';
	var local = 'https://localhost:8080';
	if (dev) return local;
	return prod;
};
export default endpoint;
