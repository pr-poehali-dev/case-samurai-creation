import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";
import FeaturedCases from "@/components/FeaturedCases";
import { Shield, Sword, Hammer } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="container px-4 py-20">
          <h2 className="mb-10 text-3xl font-bold text-center">Выбери свою игру</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <GameCard 
              title="Counter-Strike 2" 
              path="/cs2" 
              color="#f7b538"
              description="Открывай кейсы CS2 и получай редкие скины для оружия"
              icon={<Shield className="w-10 h-10 text-cs2" />}
            />
            
            <GameCard 
              title="Dota 2" 
              path="/dota2" 
              color="#b80c09"
              description="Эксклюзивные сундуки с сетами и арканами для твоих героев"
              icon={<Sword className="w-10 h-10 text-dota" />}
            />
            
            <GameCard 
              title="Rust" 
              path="/rust" 
              color="#934b00"
              description="Редкие предметы и скины для оружия в мире выживания"
              icon={<Hammer className="w-10 h-10 text-rust" />}
            />
          </div>
        </section>

        <section className="container px-4 py-20 bg-card/30">
          <FeaturedCases />
        </section>

        <section className="container px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Почему Case-Samurai?</h2>
            
            <div className="grid gap-8 mt-12 md:grid-cols-3">
              <div className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 text-primary">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Моментальные выигрыши</h3>
                <p className="text-sm text-muted-foreground">Получай выигрыши мгновенно после открытия кейсов</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 text-primary">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Безопасность</h3>
                <p className="text-sm text-muted-foreground">Надежная платформа с защитой всех транзакций</p>
              </div>
              
              <div className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 text-primary">
                  <span className="text-3xl">🎁</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Бонусы</h3>
                <p className="text-sm text-muted-foreground">Ежедневные бонусы и подарки для наших пользователей</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 mt-auto text-center border-t bg-card/50 border-border">
        <div className="container px-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Case-Samurai. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
