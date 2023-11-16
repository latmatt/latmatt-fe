export interface IAuth {
  state: State;
}

export interface State {
  user: User;
}

export interface User {
  accesstoken: string;
  ExpiresIn: string;
  RefreshToken: string;
  RefreshTokenExpiresIn: string;
  RefreshCount: string;
  IssuedAt: string;
  RefreshTokenIssuedAt: string;
  user_master_id: string;
  user_name: string;
  login_id: string;
  branch_code: string;
  position: string;
  role_info: RoleInfo[];
}

export interface RoleInfo {
  service_code: string;
  service_id: string;
  role_code: string;
  role_id: string;
  service_udf1: string;
  service_udf2: string;
  service_udf3: any;
  role_udf1: string;
  role_udf2: string;
  role_udf3: string;
  page_info: any;
}
