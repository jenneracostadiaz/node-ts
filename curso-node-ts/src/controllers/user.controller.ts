import { Request, Response } from 'express';

export class UserController {
	getUser(reg: Request, res: Response) {
		res.status(200).json({
			user: 'Jenner Acosta',
		});
	}
}
