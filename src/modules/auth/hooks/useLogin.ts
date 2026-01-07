import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/modules/common/hooks/useRedux'
import { loginUser } from '@/features/auth/authThunks'
import type { LoginData } from '@/modules/auth/interfaces/auth.Interface'

export const useLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { token, loading, error } = useAppSelector(state => state.auth)

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (token) navigate('/dashboard')
  }, [token, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error
  }
}
