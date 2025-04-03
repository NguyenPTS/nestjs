import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule và ConfigService

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Để biến môi trường có thể truy cập toàn cục
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Đảm bảo rằng ConfigModule đã được import
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Task],
        autoLoadEntities: true,
        synchronize: true, // Chỉ sử dụng trong môi trường phát triển
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
