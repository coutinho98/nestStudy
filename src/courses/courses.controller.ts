import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Patch, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    @Get()
    findAll(@Res() response) {
        return response.status(200).send('list of names')
    }

    @Get(':id')
    findById(
        @Param('id') id: string) {
        return `Id ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Atualizei o nome ${id}`;
    }

    @Delete(':id')
    Delete(@Param('id') id: string) {
        return `Item ${id} removido!`
    }
}