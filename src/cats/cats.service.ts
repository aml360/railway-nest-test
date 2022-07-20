import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  private readonly breeds: string[] = ['Tabby', 'Tiger', 'Persian', 'Siamese'];

  create(catName: string) {
    const createdCat: Cat = {
      name: catName,
      age: Math.floor(Math.random() * 10) + 1,
      breed: this.breeds[Math.floor(Math.random() * this.breeds.length)],
    };
    this.cats.push(createdCat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
