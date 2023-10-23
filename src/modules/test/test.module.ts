import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Test])], // untuk import typeorm 
  controllers: [TestController],
  providers: [TestService],

})
export class TestModule {}
