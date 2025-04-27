import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-primary/20 to-background"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      <div className="container relative z-10 px-4 py-16 mx-auto text-center md:py-24">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          <span className="block">CASE-SAMURAI</span>
          <span className="block mt-2 text-transparent bg-gradient-to-r from-cs2 via-dota to-rust bg-clip-text">
            Открывай. Побеждай. Владей.
          </span>
        </h1>
        
        <p className="max-w-lg mx-auto mb-8 text-lg md:text-xl text-muted-foreground">
          Погрузись в мир премиальных кейсов для CS2, Dota 2 и Rust. 
          Открывай кейсы, получай редкие предметы и становись легендой.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button size="lg" className="w-full md:w-auto px-8 py-6 text-lg">
            Начать сейчас
            <ArrowRight />
          </Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto px-8 py-6 text-lg">
            Как это работает
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
