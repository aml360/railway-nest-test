import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { PageController } from './page.controller';

@Module({
  controllers: [CatsController, PageController],
  providers: [CatsService],
})
export class CatsModule {}
