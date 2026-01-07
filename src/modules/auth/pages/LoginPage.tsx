import { Mail, Lock } from 'lucide-react'
import Logo from '@/assets/images/logos/logo_gem_white.svg'
import LexxiText from '@/assets/images/logos/lexxi.svg'
import Saf from '@/assets/images/logos/saf.svg'
import { useLogin } from '@/modules/auth/hooks/useLogin'

export default function LoginPage() {
  const { formData, handleChange, handleSubmit, loading, error } = useLogin()

  return (
    <div className="relative min-h-screen bg-[#0d0220] flex items-center justify-center p-4 overflow-hidden font-inter">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-1/2 w-70 h-65 rounded-full bg-[#ff7a59] opacity-30 filter blur-2xl mix-blend-screen -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-center items-center justify-center gap-8 lg:gap-30 relative z-10">
        <div className="lg:flex flex-col items-center space-y-0 flex-1 lg:max-w-md z-20 hidden">
          <div className="flex justify-center translate-y-10">
            <img src={Logo} alt="Logo" className="w-28 h-28 lg:w-36 lg:h-36 object-cover" />
          </div>

          <div className="flex justify-center">
            <img
              src={LexxiText}
              alt="Lexxi"
              className="w-[474px] h-[223px] object-contain opacity-100"
            />
          </div>

          <img src={Saf} className="-mt-9 object-contain w-[142px] h-[101px]" />
        </div>

        <div className="relative flex justify-center flex-1 lg:max-w-md z-50 font-inter">
          <div className="absolute -top-10 -right-20 w-40 h-40 z-10 opacity-100 rounded-full pointer-events-none bg-[radial-gradient(circle,_rgba(179,121,223,0.58)_0%,_rgba(54,0,96,0)_70%)] filter blur-xl mix-blend-screen"></div>
          <div className="absolute top-120 -right-20 w-70 h-60 z-10 opacity-60 rounded-full pointer-events-none bg-[radial-gradient(circle,_rgba(179,121,223,1)_0%,_rgba(54,0,96,0)_70%)] filter blur-3xl mix-blend-screen"></div>

          <div className="relative w-full max-w-md z-30">
            <div className="bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,_rgba(179,121,223,0.2)_0%,_rgba(204,88,84,0.016)_77.08%,_rgba(179,121,223,0.2)_150%)] rounded-[59px] shadow-2xl  py-15 px-8">
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col items-center space-y-3">
                  <h2 className="md:text-[47px] text-4xl  font-bold text-white tracking-wider">
                    INICIAR SESIÓN
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="flex flex-col space-y-2">
                    <label className="text-white/90 text-sm font-medium">Correo electrónico</label>
                    <div className="flex items-center relative">
                      <Mail className="absolute left-4 text-white/70 w-4 h-4 z-10" />
                      <input
                        type="email"
                        name="email"
                        placeholder="lexxi@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-12 autofill-fix bg-[#261046] outline-none  text-white placeholder:text-white/70 h-14 rounded-[10px] focus:border-blue-400 focus:ring-blue-400/20 text-sm w-full"
                        style={{ '--input-bg': '#261046' } as React.CSSProperties}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-white/90 text-sm font-medium">Contraseña</label>
                    <div className="flex items-center relative">
                      <Lock className="absolute left-4 text-white/70 w-4 h-4 z-10" />
                      <input
                        type="password"
                        name="password"
                        placeholder="***********"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="pl-12 autofill-fix bg-[#261046] outline-none  text-white placeholder:text-white/70 h-14 rounded-2xl focus:border-blue-400 focus:ring-blue-400/20 text-sm w-full"
                        style={{ '--input-bg': '#261046' } as React.CSSProperties}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                    className="w-full h-14 bg-gradient-to-r from-[#501794] to-[#3D64FE] text-white rounded-2xl shadow-xl transition-all duration-200 transform hover:scale-[1.02] text-[21px]"
                  >
                    {loading ? 'Ingresando' : 'Iniciar sesión'}
                  </button>
                  {error && <p className="text-white text-sm text-center">{error}</p>}
                </div>

                <div className="flex flex-col items-start space-y-4 pb-13">
                  <div className="w-full h-px bg-white/20" />
                  <p className="text-xs text-white/70 leading-relaxed ">
                    Al registrarte, aceptas nuestros{' '}
                    <span className="text-[#a78bfa] hover:text-[#c4b5fd] cursor-pointer transition-colors">
                      Términos y Condiciones
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
