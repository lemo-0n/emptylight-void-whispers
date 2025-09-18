const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-shadow">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 ethereal-text">
              О студии
            </h2>
            <div className="rune-divider mb-6">
              <div className="px-4">
                <div className="w-16 h-px bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="void-card p-8 rounded-lg">
                <h3 className="font-cinzel text-2xl font-semibold mb-4 text-primary">Наша история</h3>
                <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                  EmptyLight родилась из стремления создавать игры, которые не просто развлекают, 
                  но и погружают игроков в глубокие эмоциональные переживания. Мы верим, что 
                  истинная красота кроется в контрасте между светом и тьмой.
                </p>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Каждый наш проект — это путешествие через мистические миры, где игроки 
                  исследуют забытые руины, раскрывают древние тайны и находят свет даже 
                  в самых темных уголках вселенной.
                </p>
              </div>

              <div className="void-card p-8 rounded-lg">
                <h3 className="font-cinzel text-2xl font-semibold mb-4 text-secondary">Наша философия</h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Мы создаем не просто игры — мы создаем переживания. Наши миры наполнены 
                  атмосферой таинственности, где каждая деталь имеет значение, а каждый 
                  момент может стать поворотным в истории героя.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="void-card p-8 rounded-lg text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 animate-pulse-glow"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full"></div>
                    <div className="absolute inset-8 bg-background rounded-full"></div>
                    <div className="absolute inset-12 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full animate-float"></div>
                  </div>
                </div>
                <h4 className="font-cinzel text-xl font-semibold mb-4 text-accent">Из пустоты</h4>
                <p className="font-inter text-sm text-muted-foreground">
                  Каждая история начинается с пустоты — бесконечного пространства возможностей, 
                  ожидающего своего воплощения
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;