import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, IsUrl, IsNumber, IsEmail } from 'class-validator'

@Entity()
export default class Ad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(5, 50)
  @Column('text')
  title: string

  @IsString()
  @Length(5, 300)
  @Column('text')
  description: string

  @IsUrl()
  @Column('text')
  imageUrl: string

  @IsNumber()
  @Column('text')
  price: number

  @IsEmail()
  @Column('text')
  email: string

  @IsNumber()
  @Length(8, 14)
  @Column('text')
  phoneNumber: number
}
