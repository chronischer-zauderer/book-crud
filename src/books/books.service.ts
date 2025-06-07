import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(dto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel(dto);
    return await newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    if (!book) throw new NotFoundException(`Book #${id} not found`);
    return book;
  }

  async update(id: string, dto: UpdateBookDto): Promise<Book> {
    const book = await this.bookModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!book) throw new NotFoundException(`Book #${id} not found`);
    return book;
  }

  async remove(id: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await this.bookModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Book #${id} not found`);
  }
}
