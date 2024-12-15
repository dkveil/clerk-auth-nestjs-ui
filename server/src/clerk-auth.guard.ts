import { clerkClient } from '@clerk/clerk-sdk-node';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly logger = new Logger();

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies.__session;

    try {
      await clerkClient.verifyToken(token);
    } catch (e) {
      this.logger.error(e);
      return false;
    }

    return true;
  }
}
