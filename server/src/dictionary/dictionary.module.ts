import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { DictionaryController } from './dictionary.controller';
import { Dictionary } from './dictionary.model';
import { DictionaryService } from './dictionary.service';

@Module({
    controllers: [DictionaryController],
    providers: [DictionaryService],
    imports: [
      SequelizeModule.forFeature([User, Dictionary])
    ],
})
export class DictionaryModule {}
