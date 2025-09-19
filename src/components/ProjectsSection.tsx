import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import voidGameImage from "@/assets/void-game.jpg";
import shadowbornGameImage from "@/assets/shadowborn-game.jpg";
import emberGameImage from "@/assets/ember-game.jpg";
import crystalDepthsGameImage from "@/assets/crystal-depths-game.jpg";

const projects = [
  {
    id: 1,
    title: "Echoes of the Void",
    description: "Мистическая метроидвания о путешествии через забытые миры, где свет и тьма сплетаются в древней симфонии.",
    status: "В разработке",
    tags: ["Метроидвания", "Мистика", "2D"],
    image: voidGameImage
  },
  {
    id: 2,
    title: "Shadowborn Chronicles",
    description: "Эпическое приключение о герое, рожденном из теней, который должен принести свет в умирающий мир.",
    status: "Концепт",
    tags: ["Приключения", "RPG", "Фэнтези"],
    image: shadowbornGameImage
  },
  {
    id: 3,
    title: "The Last Ember",
    description: "Атмосферная головоломка о последнем огоньке надежды в мире, поглощенном вечной тьмой.",
    status: "Прототип",
    tags: ["Головоломка", "Атмосфера", "Инди"],
    image: emberGameImage
  },
  {
    id: 4,
    title: "Crystal Depths",
    description: "Загадочное исследование подземных кристальных пещер, где древняя магия скрыта в глубинах земли.",
    status: "Альфа",
    tags: ["Исследование", "Магия", "Пещеры"],
    image: crystalDepthsGameImage
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-shadow to-void">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 ethereal-text">
              Наши проекты
            </h2>
            <div className="rune-divider mb-6">
              <div className="px-4">
                <div className="w-16 h-px bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              </div>
            </div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая игра — это врата в новый мир, полный тайн и открытий
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="void-card group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-ethereal-fade"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="p-0">
                  <div className="h-48 relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30 mb-2 backdrop-blur-sm"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    {/* Mystical Particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full animate-float"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '-1s' }}></div>
                    <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="font-cinzel text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-inter text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mystical-glow border-primary/30 text-primary hover:bg-primary/10"
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="font-inter text-muted-foreground mb-6">
              Хотите узнать больше о наших проектах или предложить сотрудничество?
            </p>
            <Button 
              className="bg-gradient-to-r from-secondary to-primary hover:from-secondary-glow hover:to-primary-glow text-black font-medium px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;