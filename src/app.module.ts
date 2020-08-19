import { Module } from '@nestjs/common';

import { CacheModule } from './cache/cache.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        CacheModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
