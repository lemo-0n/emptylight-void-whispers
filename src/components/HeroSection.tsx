import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden floating-particles">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-void"></div>
      <div className="absolute inset-0 bg-gradient-mystical"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-4s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-8 animate-ethereal-fade">
          <span className="ethereal-text bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            EmptyLight
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12 animate-ethereal-fade" style={{ animationDelay: '0.3s' }}>
          <div className="rune-divider mb-6">
            <div className="px-4 py-2">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary"></div>
            </div>
          </div>
          <p className="font-cinzel text-2xl md:text-3xl text-muted-foreground mb-4">
            Из пустоты рождается свет
          </p>
          <p className="font-inter text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Независимая игровая студия, создающая мистические миры в атмосфере мрачного фэнтези, 
            где каждая тень скрывает историю, а каждый луч света — надежду
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-ethereal-fade" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToNext}
            className="mystical-glow bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-black font-inter font-medium px-8 py-4 text-lg rounded-lg transition-all duration-500 transform hover:scale-105"
          >
            Узнать больше
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;