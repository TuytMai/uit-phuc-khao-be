export type AuthenticatedRequest = {
  user: {
    id: string;
  };
} & Request;
