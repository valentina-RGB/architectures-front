import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './authThunks'
import type { AuthState } from '@/modules/auth/interfaces/auth.Interface'

const savedUser = sessionStorage.getItem('user')
const savedToken = sessionStorage.getItem('token')

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken,
  loading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null
      state.token = null
      sessionStorage.clear()
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.accessToken

        sessionStorage.setItem('user', JSON.stringify(action.payload.user))
        sessionStorage.setItem('token', action.payload.accessToken)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Error desconocido.'
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
