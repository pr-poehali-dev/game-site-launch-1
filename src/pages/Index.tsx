import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Экшен", icon: "Zap", count: 234 },
    { name: "RPG", icon: "Sparkles", count: 156 },
    { name: "Стратегия", icon: "Target", count: 89 },
    { name: "Симуляторы", icon: "Settings", count: 67 },
  ];

  const games = [
    {
      id: 1,
      title: "Cyber Nexus",
      genre: "Экшен",
      rating: 4.8,
      players: "1.2M",
      image: "https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/bdfbaee9-a911-4046-a145-867bceaf8412.jpg"
    },
    {
      id: 2,
      title: "Mystic Realms",
      genre: "RPG",
      rating: 4.9,
      players: "850K",
      image: "https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/0aa1ede6-f8e8-46d6-801e-28c018fd95f4.jpg"
    },
    {
      id: 3,
      title: "Battle Arena",
      genre: "Экшен",
      rating: 4.7,
      players: "2.1M",
      image: "https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/bdfbaee9-a911-4046-a145-867bceaf8412.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/e704aad8-b50b-4355-8eb6-59a376969ad3.jpg" 
                alt="GameHub Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GameHub
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                Игры
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                Категории
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                Новинки
              </a>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Добро пожаловать в мир игр
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Тысячи игр, миллионы игроков. Найди свою следующую любимую игру
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale">
                <Icon name="GamepadIcon" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Популярное
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.name}
                className="hover-scale hover-glow cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={category.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} игр</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Популярные игры</h2>
            <Button variant="ghost" className="hover-scale">
              Смотреть всё
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card 
                key={game.id}
                className="overflow-hidden hover-scale hover-glow cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 backdrop-blur-sm">
                      <Icon name="Star" size={14} className="mr-1" />
                      {game.rating}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{game.title}</h3>
                      <p className="text-sm text-muted-foreground">{game.genre}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{game.players} игроков</span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Играть
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center py-16 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border/50">
          <div className="max-w-2xl mx-auto px-6">
            <Icon name="Gamepad2" size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">
              Готов начать приключение?
            </h2>
            <p className="text-muted-foreground mb-8">
              Присоединяйся к миллионам игроков по всему миру
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale">
              <Icon name="Rocket" size={20} className="mr-2" />
              Создать аккаунт
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/e704aad8-b50b-4355-8eb6-59a376969ad3.jpg" 
                alt="GameHub" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-semibold">GameHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 GameHub. Все права защищены
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
