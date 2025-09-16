import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Mail, Lock, Apple, Chrome } from 'lucide-react'

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular login/cadastro
    onLogin({ email, name: email.split('@')[0] })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">MS</span>
          </div>
          <CardTitle className="text-2xl font-bold">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </CardTitle>
          <p className="text-gray-600">
            {isLogin 
              ? 'Acesse sua conta para continuar' 
              : 'Crie sua conta para começar'
            }
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
            >
              {isLogin ? 'Entrar' : 'Criar Conta'}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Ou continue com</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <Apple className="mr-2 h-4 w-4" />
              Apple
            </Button>
            <Button variant="outline" className="w-full">
              <Chrome className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 hover:text-green-700 text-sm font-medium"
            >
              {isLogin 
                ? 'Não tem uma conta? Criar conta' 
                : 'Já tem uma conta? Entrar'
              }
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginScreen

