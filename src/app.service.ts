import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World on ${new Date().toLocaleString()}!`;
  }
}
