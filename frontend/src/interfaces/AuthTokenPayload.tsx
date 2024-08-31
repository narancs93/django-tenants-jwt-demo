export interface AuthTokenPayload {
  channel_uuid: string;
  email: string;
  exp: number;
  first_name: string;
  iat: number;
  jti: string;
  last_name: string;
  token_type: string;
  user_id: number;
  username: string;
}
