import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
	imports: [DatabaseModule, ContactsModule]
})
export class AppModule {}
