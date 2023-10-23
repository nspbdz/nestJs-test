import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';


@Injectable()
export class TestService {
  // constructor untuk injection repostory :untuk inject ke entity 
  // atau sama seperti mengambil function dari model atau disebut entity
  constructor(
    @InjectRepository(Test)
    private testRepo: Repository<Test>,
    ) {}
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }


  async findAll() {
    const tests = await this.testRepo.find(); //query eloquent dari typeorm find
    return tests;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
