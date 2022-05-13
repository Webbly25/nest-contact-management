import { BadRequestException, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export class EmptyRequestGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const req = context.switchToHttp().getRequest() as Request;
		const body = req.body;
		if (Object.keys(body).length === 0) throw new BadRequestException('Empty body');
		return true;
	}
}
