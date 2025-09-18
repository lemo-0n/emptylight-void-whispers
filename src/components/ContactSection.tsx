import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-void">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 ethereal-text">
              Контакты
            </h2>
            <div className="rune-divider mb-6">
              <div className="px-4">
                <div className="w-16 h-px bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              </div>
            </div>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы к сотрудничеству или есть вопросы? Мы всегда открыты к общению
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <Card className="void-card group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Mail className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors" />
                  </div>
                </div>
                <h3 className="font-cinzel text-xl font-semibold mb-3 text-foreground">Электронная почта</h3>
                <p className="font-inter text-muted-foreground mb-4">
                  Для деловых предложений и сотрудничества
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 text-primary hover:bg-primary/10"
                  onClick={() => window.location.href = 'mailto:contact@emptylight.studio'}
                >
                  contact@emptylight.studio
                </Button>
              </CardContent>
            </Card>

            {/* Community Card */}
            <Card className="void-card group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-secondary/30 group-hover:to-accent/30 transition-all duration-300">
                    <MessageCircle className="w-8 h-8 text-secondary group-hover:text-secondary-glow transition-colors" />
                  </div>
                </div>
                <h3 className="font-cinzel text-xl font-semibold mb-3 text-foreground">Сообщество</h3>
                <p className="font-inter text-muted-foreground mb-4">
                  Присоединяйтесь к нашему сообществу разработчиков
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-secondary/30 text-secondary hover:bg-secondary/10"
                >
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="font-cinzel text-2xl font-semibold mb-8 text-foreground">Мы в социальных сетях</h3>
            <div className="flex justify-center space-x-6">
              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-muted/10 to-muted/20 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>

              {/* Twitter */}
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-muted/10 to-muted/20 hover:from-secondary/20 hover:to-accent/20 transition-all duration-300 group"
              >
                <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
              </Button>

              {/* Discord (using MessageCircle as substitute) */}
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-muted/10 to-muted/20 hover:from-accent/20 hover:to-primary/20 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </Button>
            </div>
          </div>

          {/* Mystical Quote */}
          <div className="text-center mt-16">
            <div className="void-card p-8 rounded-lg relative overflow-hidden">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
              
              <blockquote className="relative z-10">
                <p className="font-cinzel text-xl text-muted-foreground italic mb-4">
                  «В каждом сообщении, в каждом письме кроется искра, 
                  способная зажечь новую историю»
                </p>
                <footer className="font-inter text-sm text-muted-foreground/80">
                  — Философия EmptyLight
                </footer>
              </blockquote>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse-glow"></div>
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;