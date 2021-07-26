import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Dictionary } from './dictionary.model';
import { createDictionaryDto } from './dto/create-dictionary.dto';

@Injectable()
export class DictionaryService {

    constructor(
        @InjectModel (Dictionary) private dictionaryRepositiry: typeof Dictionary
    ){}

    async createDictionary(dto: createDictionaryDto){
        const dictionary = await this.dictionaryRepositiry.create(dto)
        return dictionary
    }
}
