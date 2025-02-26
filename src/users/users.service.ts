import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leandro',
      phone: '123456789',
    },
    {
      id: 2,
      name: 'Maria',
      phone: '123456789',
    },
  ];

  getUsers() {
    return this.users;
  }
}
