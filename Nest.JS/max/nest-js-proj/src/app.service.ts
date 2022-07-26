import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
    // return { name: 'Ofer', age: 35 };
  }
}
