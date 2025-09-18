import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Анонс новой игры: Echoes of the Void",
    excerpt: "Представляем нашу новую метроидванию, которая перенесет вас в мистический мир забытых цивилизаций...",
    date: "15 ноября 2024",
    readTime: "3 мин",
    category: "Анонсы",
    featured: true
  },
  {
    id: 2,
    title: "Обновление игрового движка",
    excerpt: "Мы внедрили новые технологии освещения для создания более атмосферных теневых эффектов...",
    date: "28 октября 2024",
    readTime: "5 мин",
    category: "Разработка",
    featured: false
  },
  {
    id: 3,
    title: "Концепт-арт: Миры тени и света",
    excerpt: "Делимся новыми концепт-артами, показывающими визуальную философию наших будущих проектов...",
    date: "12 октября 2024",
    readTime: "2 мин",
    category: "Искусство",
    featured: false
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-gradient-to-b from-void to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 ethereal-text">
              Новости
            </h2>
            <div className="rune-divider mb-6">
              <div className="px-4">
                <div className="w-16 h-px bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              </div>
            </div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Следите за нашими последними разработками и творческими открытиями
            </p>
          </div>

          {/* Featured News */}
          {news.filter(item => item.featured).map((item, index) => (
            <Card 
              key={item.id}
              className="void-card mb-8 overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-ethereal-fade"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 relative">
                  {/* Stained Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-transparent to-primary/20"></div>
                  
                  {/* Mystical Orbs */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-primary/60 rounded-full animate-pulse-glow"></div>
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-accent/60 rounded-full animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-secondary/60 rounded-full animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
                  
                  <Badge 
                    className="absolute top-4 right-4 bg-accent/20 text-accent border-accent/30"
                  >
                    Главное
                  </Badge>
                </div>
                
                <CardContent className="md:w-2/3 p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="font-cinzel text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  
                  <CardDescription className="font-inter text-muted-foreground leading-relaxed text-base">
                    {item.excerpt}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Regular News Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {news.filter(item => !item.featured).map((item, index) => (
              <Card 
                key={item.id}
                className="void-card group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-ethereal-fade"
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <CardHeader className="p-0">
                  <div className="h-40 bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20 rounded-t-lg relative overflow-hidden">
                    {/* Stained Glass Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-primary/30 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-l from-secondary/30 to-transparent"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-accent/30 to-transparent rounded-full"></div>
                    </div>
                    
                    <Badge 
                      variant="secondary"
                      className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm"
                    >
                      {item.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-muted-foreground text-sm space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="font-cinzel text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  
                  <CardDescription className="font-inter text-muted-foreground leading-relaxed text-sm">
                    {item.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;