import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mpel-pm'),
    ProductModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
