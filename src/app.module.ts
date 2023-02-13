import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: '',
      database: 'kpi_planning',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TeamModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
