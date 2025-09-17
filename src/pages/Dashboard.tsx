import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Users, 
  User, 
  TrendingUp, 
  Star,
  Medal,
  Crown,
  Target,
  Heart,
  LogOut,
  Sparkles
} from 'lucide-react';

interface Team {
  id: number;
  name: string;
  points: number;
  position: number;
  change: string;
}

interface Player {
  id: number;
  name: string;
  team: string;
  points: number;
  position: number;
  change: string;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'teams' | 'players'>('teams');
  const [teamsRanking, setTeamsRanking] = useState<Team[]>([]);
  const [playersRanking, setPlayersRanking] = useState<Player[]>([]);
  const navigate = useNavigate();

  // Mock user data
  const user = { name: 'Maria Silva' };

  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    // Buscar times
    fetch('http://localhost:8080/stats/games/top5')
      .then(res => res.json())
      .then(data => setTeamsRanking(data))
      .catch(err => console.error(err));

    // Buscar jogadoras
    fetch('http://localhost:8080/stats/players/top5')
      .then(res => res.json())
      .then(data => setPlayersRanking(data))
      .catch(err => console.error(err));
  }, []);

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="h-5 w-5 text-warning" />;
      case 2:
        return <Medal className="h-5 w-5 text-muted-foreground" />;
      case 3:
        return <Medal className="h-5 w-5 text-accent" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">{position}</span>;
    }
  };

  const getChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-success border-success/20 bg-success/10';
    if (change.startsWith('-')) return 'text-destructive border-destructive/20 bg-destructive/10';
    return 'text-muted-foreground border-border bg-muted/50';
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border shadow-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">MainStreet</h1>
                <p className="text-sm text-muted-foreground">Futebol Feminino</p>
              </div>
            </div>
            
            {/* Botão Social centralizado */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Button
                onClick={() => navigate('/social')}
                className="bg-gradient-primary text-white shadow-card hover:shadow-soft transition-smooth px-6 py-2 rounded-full font-medium"
              >
                <Heart className="h-4 w-4 mr-2 fill-current" />
                Social
                <Sparkles className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-foreground">Olá, {user.name}!</p>
                <p className="text-xs text-muted-foreground">Bem-vinda de volta</p>
              </div>
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                <User className="h-5 w-5 text-white" />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total de Times</p>
                  <p className="text-3xl font-bold text-foreground">156</p>
                  <p className="text-xs text-success flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% este mês
                  </p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Jogadoras Ativas</p>
                  <p className="text-3xl font-bold text-foreground">2,847</p>
                  <p className="text-xs text-success flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% este mês
                  </p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Partidas Hoje</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <p className="text-xs text-primary flex items-center mt-1">
                    <Sparkles className="h-3 w-3 mr-1" />
                    6 em andamento
                  </p>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Engajamento</p>
                  <p className="text-3xl font-bold text-foreground">+24%</p>
                  <p className="text-xs text-success flex items-center mt-1">
                    <Heart className="h-3 w-3 mr-1" />
                    Crescimento
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Message */}
        <div className="mb-8">
          <Card className="bg-gradient-primary border-0 shadow-soft text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2">Seja bem-vinda, {user.name}! 💜</h2>
                  <p className="text-white/90">
                    Acompanhe os melhores momentos do futebol feminino brasileiro e mundial
                  </p>
                </div>
                <Heart className="h-12 w-12 text-white/20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-card/50 backdrop-blur-sm p-1 rounded-lg mb-6 w-fit shadow-card border border-border">
          <Button
            variant={activeTab === 'teams' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('teams')}
            className={`px-6 py-2 rounded-md transition-smooth ${
              activeTab === 'teams' 
                ? 'bg-gradient-primary text-white shadow-soft' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Users className="mr-2 h-4 w-4" />
            Ranking de Times
          </Button>
          <Button
            variant={activeTab === 'players' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('players')}
            className={`px-6 py-2 rounded-md transition-smooth ${
              activeTab === 'players' 
                ? 'bg-gradient-primary text-white shadow-soft' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <User className="mr-2 h-4 w-4" />
            Ranking de Jogadoras
          </Button>
        </div>

        {/* Rankings */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-foreground">
              <Star className="h-5 w-5 text-warning" />
              <span>
                {activeTab === 'teams' ? 'Top 5 Times Femininos' : 'Top 5 Jogadoras'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(activeTab === 'teams' ? teamsRanking : playersRanking).map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition-smooth hover:shadow-card ${
                    index === 0 
                      ? 'bg-gradient-primary/10 border border-primary/20' 
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-card rounded-full shadow-card">
                      {getPositionIcon(item.position)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      {activeTab === 'players' && (
                        <p className="text-sm text-muted-foreground">{(item as any).team}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-bold text-foreground">{item.points}</p>
                      <p className="text-sm text-muted-foreground">pontos</p>
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
  );
};

export default Dashboard;