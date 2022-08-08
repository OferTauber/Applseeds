import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import UserDto from 'src/DTO/user.dto';
import AuthCredentialsDto from 'src/DTO/auth_credential.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  logIn(authCredentialsDto: AuthCredentialsDto): { accessToken: string } {
    const { email, password } = authCredentialsDto;
    const user = users.find((user) => user.email === email);

    if (!(user && validatePassword(user.password, password))) {
      throw new UnauthorizedException();
    }

    const payload = { email };
    const accessToken: string = this.jwtService.sign(payload);

    return { accessToken };
  }
}

const users: UserDto[] = [
  {
    userName: 'ofer',
    email: 'ofer@gmail.com',
    password: '123',
    isAdmin: true,
    tokens: [],
  },
];

const validatePassword = (pass1: string, pass2: string): boolean =>
  pass1 === pass2;
