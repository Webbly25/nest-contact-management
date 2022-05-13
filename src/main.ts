import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

	const port = 3000;
	await app.listen(port);

	const url = await app.getUrl();
	console.log(`Running at ${url}`);
}
bootstrap();
