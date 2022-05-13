import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			database: 'contact_management',
			username: 'admin',
			password: 'admin',
			entities: [__dirname + '/../**/*.entity.[tj]s'],
			synchronize: true
		})
	]
})
export class DatabaseModule {}
