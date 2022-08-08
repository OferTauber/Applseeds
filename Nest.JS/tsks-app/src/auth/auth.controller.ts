import { Body, Controller, Get, Post } from '@nestjs/common';
import AuthCredentialsDto from 'src/DTO/auth_credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  a() {
    return 'hellow';
  }

  @Post('/login')
  login(@Body() authCredentialsDto: AuthCredentialsDto): {
    accessToken: string;
  } {
    return this.authService.logIn(authCredentialsDto);
  }
}
