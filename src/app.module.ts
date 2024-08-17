import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://deva:Password%40123@cluster1.i5b8b.mongodb.net/mydb122"),
    UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
