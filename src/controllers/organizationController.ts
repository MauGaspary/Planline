export default {
	// 	async index(req: Request, res: Response, rec: Record<string, any>) {
	// 		try {
	// 			const organization: Array<Organization> = await organizationService.index();
	// 			res.json(organization);
	// 		} catch (e) {
	// 			if (e instanceof Prisma.PrismaClientKnownRequestError) {
	// 				res.status(500).json({
	// 					error: e.message,
	// 					...e.meta,
	// 				});
	// 			}
	// 			res.status(500).json({
	// 				error: e,
	// 			});
	// 		}
	// 	},
};
