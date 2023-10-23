import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('test')
export class Test {
  // menambahkan seperti migration dan model digabung
  @PrimaryGeneratedColumn('uuid')
  id: string;

  
  @Column({
    name:'name',
    type : 'varchar'

  })
  name:string //disini mendefinisikan field column

  @Column({
    name: 'test',
    type:'varchar'
  })
  test:string

}
