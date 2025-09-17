import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Plus, 
  Image, 
  ArrowLeft,
  User,
  Trophy,
  Sparkles,
  Camera,
  Users,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Crown,
  Shield
} from 'lucide-react';

const SocialFeed = () => {
  const navigate = useNavigate();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Marta Silva',
      avatar: '⚽',
      time: '2h',
      type: 'player',
      verified: true,
      content: 'Acabou de sair do treino! Time feminino cada vez mais forte 💪💜',
      image: null,
      likes: 145,
      comments: 32,
      shares: 12,
      isLiked: false
    },
    {
      id: 2,
      user: 'Corinthians Feminino',
      avatar: '🏆',
      time: '3h',
      type: 'organization',
      verified: true,
      content: 'VITÓRIA! 3x1 contra o Palmeiras! Que atuação incrível das nossas guerreiras! 🖤🤍 #VaiCorinthians',
      image: null,
      likes: 287,
      comments: 89,
      shares: 45,
      isLiked: true
    },
    {
      id: 3,
      user: 'Grupo Futebol Feminino SP',
      avatar: '👥',
      time: '5h',
      type: 'group',
      verified: false,
      content: 'Alguém quer formar um time para o campeonato amador? Precisamos de mais 3 jogadoras! Local: Vila Madalena',
      image: null,
      likes: 23,
      comments: 15,
      shares: 8,
      isLiked: false
    },
    {
      id: 4,
      user: 'Ana Costa',
      avatar: '⭐',
      time: '6h',
      type: 'player',
      verified: false,
      content: 'Treino técnico hoje focado em finalização. Cada dia mais apaixonada por esse esporte! ⚽✨',
      image: null,
      likes: 67,
      comments: 18,
      shares: 5,
      isLiked: false
    },
    {
      id: 5,
      user: 'CBF Futebol Feminino',
      avatar: '🇧🇷',
      time: '8h',
      type: 'organization',
      verified: true,
      content: 'CONVOCAÇÃO: Seleção Brasileira Feminina para os amistosos contra Argentina. Parabéns às convocadas! 🇧🇷⚽',
      image: null,
      likes: 512,
      comments: 156,
      shares: 89,
      isLiked: true
    }
  ]);

  const stories = [
    { id: 1, name: 'Sua História', avatar: '💜', isOwn: true },
    { id: 2, name: 'Marta', avatar: '⚽', hasStory: true },
    { id: 3, name: 'Corinthians', avatar: '🏆', hasStory: true },
    { id: 4, name: 'CBF', avatar: '🇧🇷', hasStory: true },
    { id: 5, name: 'Ana Costa', avatar: '⭐', hasStory: true }
  ];

  const suggestions = [
    { id: 1, name: 'Palmeiras Feminino', type: 'Organização', followers: '45.2k' },
    { id: 2, name: 'Debinha', type: 'Jogadora', followers: '123k' },
    { id: 3, name: 'Futebol Feminino RJ', type: 'Grupo', followers: '8.7k' }
  ];

  const groups = [
    { id: 1, name: 'Futebol Feminino SP', members: '2.3k', isJoined: true },
    { id: 2, name: 'Técnicas e Táticas', members: '1.8k', isJoined: false },
    { id: 3, name: 'Nutrição no Esporte', members: '956', isJoined: true }
  ];

  const handleCreatePost = () => {
    if (postText.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: 'Maria Silva',
        avatar: '💜',
        time: 'agora',
        type: 'player',
        verified: false,
        content: postText,
        image: null,
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false
      };
      setPosts([newPost, ...posts]);
      setPostText('');
      setIsPostModalOpen(false);
    }
  };

  const getTypeIcon = (type: string, verified: boolean) => {
    if (verified) {
      return <Shield className="h-4 w-4 text-accent ml-1" />;
    }
    switch (type) {
      case 'organization':
        return <Trophy className="h-4 w-4 text-warning ml-1" />;
      case 'group':
        return <Users className="h-4 w-4 text-primary ml-1" />;
      default:
        return null;
    }
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border shadow-card sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="hover:bg-muted/50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Social</h1>
                <p className="text-sm text-muted-foreground">Futebol Feminino</p>
              </div>
            </div>
            
            <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-primary text-white shadow-soft hover:shadow-card transition-smooth">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Postagem
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gradient-card border-0 shadow-card">
                <DialogHeader>
                  <DialogTitle className="text-foreground flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    Criar Nova Postagem
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-text" className="text-foreground">
                      O que você está pensando?
                    </Label>
                    <Textarea
                      id="post-text"
                      placeholder="Compartilhe suas experiências no futebol feminino..."
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      className="min-h-[100px] bg-card/50 border-border focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground">Adicionar mídia</Label>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="hover:bg-primary/10">
                        <Camera className="h-4 w-4 mr-2" />
                        Foto
                      </Button>
                      <Button variant="outline" size="sm" className="hover:bg-primary/10">
                        <Image className="h-4 w-4 mr-2" />
                        Imagem
                      </Button>
                    </div>
                  </div>
                  <Button 
                    onClick={handleCreatePost}
                    className="w-full bg-gradient-primary text-white shadow-soft hover:shadow-card transition-smooth"
                    disabled={!postText.trim()}
                  >
                    Publicar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Esquerda */}
          <div className="hidden lg:block space-y-6">
            {/* Grupos */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-foreground flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Seus Grupos
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {groups.map((group) => (
                    <div key={group.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">{group.name}</p>
                        <p className="text-xs text-muted-foreground">{group.members} membros</p>
                      </div>
                      <Badge variant={group.isJoined ? "default" : "outline"} className="text-xs">
                        {group.isJoined ? 'Membro' : 'Entrar'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eventos */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-foreground flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-accent" />
                  Próximos Eventos
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">SEP</div>
                      <div className="text-lg font-bold text-foreground">20</div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Campeonato Feminino SP</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        Pacaembu, SP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">SEP</div>
                      <div className="text-lg font-bold text-foreground">25</div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Pelada Feminina</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        Vila Madalena, SP
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feed Central */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stories */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {stories.map((story) => (
                    <div key={story.id} className="flex flex-col items-center space-y-2 min-w-[60px]">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg shadow-soft transition-smooth cursor-pointer ${
                        story.isOwn 
                          ? 'bg-gradient-primary text-white hover:shadow-card' 
                          : story.hasStory 
                            ? 'bg-gradient-primary text-white hover:shadow-card ring-2 ring-primary/30' 
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}>
                        {story.isOwn ? <Plus className="h-6 w-6" /> : story.avatar}
                      </div>
                      <span className="text-xs text-foreground text-center truncate w-16">
                        {story.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-smooth">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft text-white text-lg">
                          {post.avatar}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold text-foreground">{post.user}</h3>
                            {getTypeIcon(post.type, post.verified)}
                          </div>
                          <p className="text-sm text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`border-current ${
                          post.type === 'organization' ? 'text-warning bg-warning/5 border-warning/20' :
                          post.type === 'group' ? 'text-primary bg-primary/5 border-primary/20' :
                          'text-accent bg-accent/5 border-accent/20'
                        }`}
                      >
                        {post.type === 'organization' ? 'Organização' : 
                         post.type === 'group' ? 'Grupo' : 'Atleta'}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>
                    
                    {post.image && (
                      <div className="mb-4 rounded-lg overflow-hidden shadow-card">
                        <img 
                          src={post.image} 
                          alt="Post content" 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-6">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className={`hover:bg-primary/10 ${post.isLiked ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-primary/10 hover:text-primary">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-primary/10 hover:text-primary">
                          <Share2 className="h-4 w-4 mr-1" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="hover:bg-primary/10 hover:text-primary hover:border-primary/20">
                Carregar mais postagens
              </Button>
            </div>
          </div>

          {/* Sidebar Direita */}
          <div className="hidden lg:block space-y-6">
            {/* Sugestões */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-foreground flex items-center">
                  <Star className="h-5 w-5 mr-2 text-accent" />
                  Sugestões
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm shadow-soft">
                          {suggestion.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{suggestion.name}</p>
                          <p className="text-xs text-muted-foreground">{suggestion.type} • {suggestion.followers}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="hover:bg-primary/10 hover:text-primary hover:border-primary/20">
                        Seguir
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-foreground flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-success" />
                  Em Alta
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">#FutebolFeminino</p>
                      <p className="text-xs text-muted-foreground">2.1k posts</p>
                    </div>
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">#VaiCorinthians</p>
                      <p className="text-xs text-muted-foreground">1.8k posts</p>
                    </div>
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">#SeleçãoBrasileira</p>
                      <p className="text-xs text-muted-foreground">3.4k posts</p>
                    </div>
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;