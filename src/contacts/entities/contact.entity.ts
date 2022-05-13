import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	title: string;

	@Column()
	phone: string;

	@Column()
	address: string;

	@Column()
	city: string;
}
