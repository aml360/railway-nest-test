import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

import { IsString } from 'class-validator';

class InputDTO {
  name: string;
}

export class CreateCatDto {
  @IsString()
  readonly name: string;
}

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() catName: CreateCatDto) {
    this.catsService.create(catName.name);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number
  ) {
    // get by ID logic
  }
}
