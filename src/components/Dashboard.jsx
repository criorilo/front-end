import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Trophy, 
  Users, 
  User, 
  TrendingUp, 
  Star,
  Medal,
  Crown,
  Target
} from 'lucide-react'

const Dashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('teams')

  // Dados mockados para demonstração
  const teamsRanking = [
    { id: 1, name: 'Flamengo', points: 2850, position: 1, change: '+2' },
    { id: 2, name: 'Palmeiras', points: 2780, position: 2, change: '-1' },
    { id: 3, name: 'São Paulo', points: 2720, position: 3, change: '+1' },
    { id: 4, name: 'Corinthians', points: 2680, position: 4, change: '-2' },
    { id: 5, name: 'Grêmio', points: 2650, position: 5, change: '0' },
  ]

  const playersRanking = [
    { id: 1, name: 'Gabriel Barbosa', team: 'Flamengo', points: 95, position: 1, change: '+1' },
    { id: 2, name: 'Dudu', team: 'Palmeiras', points: 92, position: 2, change: '-1' },
    { id: 3, name: 'Calleri', team: 'São Paulo', points: 89, position: 3, change: '+2' },
    { id: 4, name: 'Yuri Alberto', team: 'Corinthians', points: 87, position: 4, change: '0' },
    { id: 5, name: 'Suárez', team: 'Grêmio', points: 85, position: 5, change: '-2' },
  ]

  const getPositionIcon = (position) => {
    switch (position) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-gray-600">{position}</span>
    }
  }

  const getChangeColor = (change) => {
    if (change.startsWith('+')) return 'text-green-600'
    if (change.startsWith('-')) return 'text-red-600'
    return 'text-gray-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">MS</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">MainStreet</h1>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-700">Olá, {user.name}!</span>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total de Times</p>
                  <p className="text-3xl font-bold text-gray-900">156</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total de Jogadores</p>
                  <p className="text-3xl font-bold text-gray-900">2,847</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Partidas Hoje</p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Crescimento</p>
                  <p className="text-3xl font-bold text-gray-900">+12%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6 w-fit">
          <Button
            variant={activeTab === 'teams' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('teams')}
            className={`px-6 py-2 rounded-md ${
              activeTab === 'teams' 
                ? 'bg-white shadow-sm text-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Users className="mr-2 h-4 w-4" />
            Ranking de Times
          </Button>
          <Button
            variant={activeTab === 'players' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('players')}
            className={`px-6 py-2 rounded-md ${
              activeTab === 'players' 
                ? 'bg-white shadow-sm text-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <User className="mr-2 h-4 w-4" />
            Ranking de Jogadores
          </Button>
        </div>

        {/* Rankings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>
                {activeTab === 'teams' ? 'Top 5 Times' : 'Top 5 Jogadores'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(activeTab === 'teams' ? teamsRanking : playersRanking).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10">
                      {getPositionIcon(item.position)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      {activeTab === 'players' && (
                        <p className="text-sm text-gray-600">{item.team}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{item.points}</p>
                      <p className="text-sm text-gray-600">pontos</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${getChangeColor(item.change)} border-current`}
                    >
                      {item.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

