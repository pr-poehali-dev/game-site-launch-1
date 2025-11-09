import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const games = [
    {
      id: 1,
      title: "Cyber Nexus",
      genre: "Экшен",
      image: "https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/bdfbaee9-a911-4046-a145-867bceaf8412.jpg"
    },
    {
      id: 2,
      title: "Mystic Realms",
      genre: "RPG",
      image: "https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/0aa1ede6-f8e8-46d6-801e-28c018fd95f4.jpg"
    },
    {
      id: 3,
      title: "Battle Arena",
      genre: "Экшен",
      image: "https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/bdfbaee9-a911-4046-a145-867bceaf8412.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/ca847e95-8a50-4233-9623-507ae86ad637/files/e704aad8-b50b-4355-8eb6-59a376969ad3.jpg" 
              alt="GameHub" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold">GameHub</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Мир игр
          </h1>
          <p className="text-xl text-muted-foreground">
            Найди свою следующую игру
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {games.map((game) => (
            <Card 
              key={game.id}
              className="overflow-hidden hover-scale cursor-pointer"
            >
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full aspect-video object-cover"
              />
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{game.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{game.genre}</p>
                <Button className="w-full">
                  Играть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
