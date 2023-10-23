import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('test') 
@ApiTags('Test') // untuk swagger docs 
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get('/') //membuat route untuk function ini 
  // ApiOperation untuk isi dari docs(swagger) isi dari table test sebagai sample
  @ApiOperation({
    summary: 'test',
    description: 'test Description',
  })
  async findAll() {
    return await this.testService.findAll(); // memanggil dari service 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
