import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductVersion } from './productVersion';

@Entity('product')  
export class Product {

  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ type: 'varchar', length: 255 })  
  name: string;

  @Column({ type: 'text' })  
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 }) 
  price: number;

  @Column({ type: 'text'})
  img_texture: string;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 }) 

  @Column({ type: 'text'}) 
  info: string;

  @OneToMany(() => ProductVersion,(productVersion) => productVersion.product)
  versions: ProductVersion[];
}
