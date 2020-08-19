import { Body, Controller, Get, Put } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('/hello')
export class AppController {

    constructor(
        private readonly appService: AppService,
    ) {}

    @Put()
    async putHello(@Body() { name }: { name: string }): Promise<string> {
        await this.appService.setHello(name);

        return name;
    }

    @Get()
    getHello(): Promise<string> {
        return this.appService.getHello();
    }
}
