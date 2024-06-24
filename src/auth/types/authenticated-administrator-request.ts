import { AdministratorEntity } from 'src/administrators/entities/administrator.entity';

export type AuthenticatedAdministratorRequest = {
  user: AdministratorEntity;
} & Request;
