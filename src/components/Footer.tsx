const Footer = () => {
  return (
    <footer className="bg-void border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-sm opacity-90"></div>
                  <div className="absolute inset-1 bg-void rounded-sm"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-sm"></div>
                </div>
                <span className="font-cinzel text-xl font-semibold text-foreground tracking-wider">EmptyLight</span>
              </div>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                Независимая игровая студия, создающая мистические миры 
                в атмосфере мрачного фэнтези
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-cinzel text-lg font-semibold text-foreground">Навигация</h4>
              <nav className="space-y-2">
                <a href="#about" className="block font-inter text-muted-foreground hover:text-primary transition-colors text-sm">О студии</a>
                <a href="#projects" className="block font-inter text-muted-foreground hover:text-primary transition-colors text-sm">Проекты</a>
                <a href="#news" className="block font-inter text-muted-foreground hover:text-primary transition-colors text-sm">Новости</a>
                <a href="#contact" className="block font-inter text-muted-foreground hover:text-primary transition-colors text-sm">Контакты</a>
              </nav>
            </div>

            {/* Philosophy */}
            <div className="space-y-4">
              <h4 className="font-cinzel text-lg font-semibold text-foreground">Наша философия</h4>
              <blockquote className="font-inter text-muted-foreground text-sm italic">
                «Из пустоты рождается свет, из тьмы — надежда, 
                из молчания — истории, которые изменят мир»
              </blockquote>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-inter text-muted-foreground text-sm">
              © 2024 EmptyLight Studio. Все права защищены.
            </div>
            
            <div className="flex items-center space-x-6 font-inter text-muted-foreground text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>

          {/* Mystical Signature */}
          <div className="text-center mt-8 pt-8 border-t border-border/20">
            <div className="inline-flex items-center space-x-2 text-muted-foreground/50 text-xs">
              <div className="w-1 h-1 bg-primary/50 rounded-full animate-pulse-glow"></div>
              <span className="font-cinzel">Создано с магией и страстью</span>
              <div className="w-1 h-1 bg-secondary/50 rounded-full animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;