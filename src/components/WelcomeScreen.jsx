import { Button } from '@/components/ui/button.jsx'
import { ChevronRight } from 'lucide-react'

const WelcomeScreen = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo/Icon */}
        <div className="w-24 h-24 mx-auto bg-green-600 rounded-full flex items-center justify-center">
          <span className="text-white text-3xl font-bold">MS</span>
        </div>
        
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">MainStreet</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bem-vindo ao ranking de times e jogadores mais completo. 
            Acompanhe estatísticas, compare performances e descubra os melhores.
          </p>
        </div>
        
        {/* Features */}
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Rankings em tempo real</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Estatísticas detalhadas</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Interface moderna e responsiva</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={onNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
        >
          Começar
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default WelcomeScreen

