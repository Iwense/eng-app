import { Body, Controller, Get, Post } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { createDictionaryDto } from './dto/create-dictionary.dto';

@Controller('dictionary')
export class DictionaryController {

    constructor(
        private dictionaryService: DictionaryService
    ){}

    @Get()
    getList(){

    }

    @Post('/create')
    create(@Body() dto: createDictionaryDto){
        console.log("dto =", dto)
        return this.dictionaryService.createDictionary(dto)
    }


}
