export interface IUser {
  id: string
  name: string
  email: string
}

export interface AuthState {
  user: IUser | null
  token: string | null
  loading: boolean
  error: string | null
}

export interface LoginData {
  email: string
  password: string
}

export interface LoginResponse {
  user: { id: string; name: string; email: string }
  accessToken: string
}
