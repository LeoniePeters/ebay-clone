import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Ad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:false})
  imageUrl: string

  @Column('text', {nullable:false})
  price: number

  @Column('text', {nullable:false})
  email: string

  @Column('text', {nullable:false})
  phoneNumber: number
}