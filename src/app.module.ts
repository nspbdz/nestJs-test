import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOpt } from 'database/datasource';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [
    // untuk memanmggil type orm 
    TypeOrmModule.forRoot({
      // memanggil datasource 
      ...dataSourceOpt,
      autoLoadEntities: true,
    }),
    TestModule, //import module dari test module 
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule], //agar type orm bisa digunakan di manapun 
})
export class AppModule {}
