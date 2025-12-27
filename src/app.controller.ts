import { Body, Controller, Post } from "@nestjs/common";

@Controller('users')
export class AppController {

    @Post()
    create(@Body() body: { email: string; password: string }) {
        return `새로운 사용자 생성: ${body.email}`;
    }

}
