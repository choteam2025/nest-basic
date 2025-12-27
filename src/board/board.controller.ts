import { Controller, Get, Param } from '@nestjs/common';

@Controller('board')
export class BoardController {
    @Get()
    findAll() {
        return `findAll 호출`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `게시물 조회 (ID: ${id})`;
    }
}
