import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-sm opacity-90"></div>
              <div className="absolute inset-1 bg-background rounded-sm"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-sm animate-pulse-glow"></div>
            </div>
            <span className="font-cinzel text-xl font-semibold text-foreground tracking-wider">EmptyLight</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter">О студии</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter">Проекты</a>
            <a href="#news" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter">Новости</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter">Контакты</a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-ethereal-fade">
            <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>О студии</a>
            <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Проекты</a>
            <a href="#news" className="block text-muted-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Новости</a>
            <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Контакты</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;