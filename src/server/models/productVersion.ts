import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product';

@Entity('product_version') 
export class ProductVersion {
  
  @PrimaryGeneratedColumn() 
  id: number;

  @Column({ type: 'varchar', length: 100 })  
  color_name: string;

  @Column({ type: 'varchar', length: 7 }) 
  color_rgb: string;

  @Column({ type: 'int' })  
  stock: number;

  @Column({ type: 'text', nullable: true })  
  img: string | null;

  @ManyToOne(() => Product, (product) => product.versions)
  @JoinColumn({ name: 'id_product' }) 
  product: Product;
}
