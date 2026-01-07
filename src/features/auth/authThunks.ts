import AuthClient from '@/api/client/axios';
import type { LoginData, LoginResponse } from '@/modules/auth/interfaces/auth.Interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const authClient = new AuthClient();

export const loginUser = createAsyncThunk<LoginResponse, LoginData, { rejectValue: string }>(
  'auth/loginUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await authClient.post<LoginResponse>(`${API_URL}/auth/login`, data)
      const { user, accessToken } = response

      if (!user || !accessToken) {
        return rejectWithValue('Respuesta inválida del servidor.')
      }

      return { user, accessToken }

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status

        if (status === 400) {
          return rejectWithValue('Datos inválidos. Revisa el formulario.')
        }
        if (status === 401 || err.response?.status === 404) {
          return rejectWithValue('Usuario o contraseña incorrectos.')
        }
        if ((status ?? 0) >= 500) {
          return rejectWithValue('Ha ocurrido un error. Intenta nuevamente.')
        }

        return rejectWithValue('Ha ocurrido un error. Intenta nuevamente.')
      }

      return rejectWithValue('Error de red o desconocido.')
    }
  }
)
