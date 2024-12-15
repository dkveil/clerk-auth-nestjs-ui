import { Injectable } from '@nestjs/common';
import { clerkClient, ClerkClient } from '@clerk/clerk-sdk-node';

@Injectable()
export class AppService {
  async getUsers() {
    return clerkClient.users.getUserList();
  }
}
