import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

const KEY = 'hello';

@Injectable()
export class AppService {

    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: Cache,
    ) {}

    async setHello(name: string): Promise<void> {
        await this.cache.set(KEY, name, { ttl: 3600 });
    }

    async getHello(): Promise<string> {
        const name = await this.cache.get(KEY) || 'matthieu';
        return `Hello ${name}!`;
    }
}
