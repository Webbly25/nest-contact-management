import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

class ContactNotFoundException extends NotFoundException {
	constructor(id: number) {
		super(`Contact with ID "${id}" not found`);
	}
}

@Injectable()
export class ContactsService {
	constructor(@InjectRepository(Contact) private readonly contactsRepository: Repository<Contact>) {}

	async create(createContactDto: CreateContactDto) {
		const contact = this.contactsRepository.create(createContactDto);
		await this.contactsRepository.save(contact);
		return contact;
	}

	async findAll() {
		return this.contactsRepository.find();
	}

	async findOneById(id: number) {
		const contact = await this.contactsRepository.findOne(id);
		if (contact) return contact;

		throw new ContactNotFoundException(id);
	}

	async update(id: number, updateContactDto: UpdateContactDto) {
		await this.contactsRepository.update(id, updateContactDto);
		return this.findOneById(id);
	}

	async remove(id: number) {
		const res = await this.contactsRepository.delete(id);
		if (!res.affected) throw new ContactNotFoundException(id);
	}
}
