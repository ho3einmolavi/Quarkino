import { Injectable } from '@nestjs/common';
import * as faker from 'faker';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: UserModel,
  ) {}

  async addFakeUsers() {
    const numberOfFakeUsers = 10;
    const fakeUsers = [];

    for (let i = 0; i < numberOfFakeUsers; i++) {
      const fakeUser = {
        username: faker.internet.userName(),
      };
      fakeUsers.push(fakeUser);
    }
    return this.userModel.create(fakeUsers);
  }
}
