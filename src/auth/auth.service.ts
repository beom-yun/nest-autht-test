import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (user && user.password === pass) {
      const { password, ...result } = user; // ... 연산자(spread operator)를 사용하여 user 객체에서 암호를 제거
      return result;
    }
    return null;
  }
}
