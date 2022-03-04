import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'reles';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);