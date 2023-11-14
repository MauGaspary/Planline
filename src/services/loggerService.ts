import { NextFunction, Request, Response } from 'express';

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
	console.log(
		'\n' + req.method,
		req.url,
		new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
	);
	if (Object.keys(req.body).length > 0) {
		console.log(JSON.stringify(req.body));
	}
	next();
}

export default {
	error: (...data: unknown[]) => {
		console.error('ERROR:', ...data);
	},
	info: (...data: unknown[]) => {
		console.log('INFO:', ...data);
	},
};
