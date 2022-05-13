import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmptyRequestGuard } from 'src/utils/guards/emptyRequest.guard';
import { FindOneParams } from 'src/utils/types/findOneParams';

import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
	constructor(private readonly contactsService: ContactsService) {}

	@Post()
	create(@Body() createContactDto: CreateContactDto) {
		return this.contactsService.create(createContactDto);
	}

	@Get()
	findAll() {
		return this.contactsService.findAll();
	}

	@Get(':id')
	findOne(@Param() { id }: FindOneParams) {
		return this.contactsService.findOneById(+id);
	}

	@Patch(':id')
	@UseGuards(EmptyRequestGuard)
	update(@Param() { id }: FindOneParams, @Body() updateContactDto: UpdateContactDto) {
		return this.contactsService.update(+id, updateContactDto);
	}

	@Delete(':id')
	remove(@Param() { id }: FindOneParams) {
		return this.contactsService.remove(+id);
	}
}
