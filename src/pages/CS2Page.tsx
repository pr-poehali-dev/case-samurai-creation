
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CaseCard from "@/components/CaseCard";

const CS2Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />
      
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-cs2">Counter-Strike 2</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Открывай кейсы CS2 и получай редкие скины для своей коллекции оружия с лучшими шансами на выигрыш
            </p>
          </div>

          <Tabs defaultValue="popular" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="popular">Популярные</TabsTrigger>
                <TabsTrigger value="new">Новые</TabsTrigger>
                <TabsTrigger value="cheap">Дешевые</TabsTrigger>
                <TabsTrigger value="rare">Редкие</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="popular" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <CaseCard 
                  title="Кейс Операции"
                  price="249 ₽"
                  image="https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&w=300&h=300"
                  bestDrop="AK-47 | Поверхностная закалка"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Прорыв»"
                  price="189 ₽"
                  image="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=300&h=300"
                  bestDrop="AWP | Пустынный повстанец"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Спектр»"
                  price="299 ₽"
                  image="https://images.unsplash.com/photo-1580327942498-53a3210d3445?auto=format&fit=crop&w=300&h=300"
                  bestDrop="M4A4 | Неонуар"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Хрома»"
                  price="199 ₽"
                  image="https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=300&h=300"
                  bestDrop="USP-S | Неонуар"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Гамма»"
                  price="219 ₽"
                  image="https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=300&h=300"
                  bestDrop="M4A1-S | Механо-пушка"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Призма»"
                  price="179 ₽"
                  image="https://images.unsplash.com/photo-1560273234-d3c52e815de1?auto=format&fit=crop&w=300&h=300"
                  bestDrop="Desert Eagle | Изумрудный йорик"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Охота»"
                  price="349 ₽"
                  image="https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=300&h=300"
                  bestDrop="AK-47 | Огненный змей"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Кобра»"
                  price="259 ₽"
                  image="https://images.unsplash.com/photo-1601142634808-38923eb7c560?auto=format&fit=crop&w=300&h=300"
                  bestDrop="AWP | Гипербист"
                  game="cs2"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="new">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <CaseCard 
                  title="Кейс «2025»"
                  price="399 ₽"
                  image="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=300&h=300"
                  bestDrop="AWP | Нео-нуар"
                  game="cs2"
                  isNew
                />
                <CaseCard 
                  title="Кейс «Революция»"
                  price="299 ₽"
                  image="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=300&h=300"
                  bestDrop="M4A4 | Император"
                  game="cs2"
                  isNew
                />
                <CaseCard 
                  title="Кейс «Ночь»"
                  price="349 ₽"
                  image="https://images.unsplash.com/photo-1508333821969-9b3399bd9c10?auto=format&fit=crop&w=300&h=300"
                  bestDrop="AK-47 | Азимов"
                  game="cs2"
                  isNew
                />
              </div>
            </TabsContent>
            
            <TabsContent value="cheap">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <CaseCard 
                  title="Кейс «Базовый»"
                  price="99 ₽"
                  image="https://images.unsplash.com/photo-1610496000208-64f15066df38?auto=format&fit=crop&w=300&h=300"
                  bestDrop="Glock-18 | Водяной"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Эконом»"
                  price="129 ₽"
                  image="https://images.unsplash.com/photo-1564473185935-6e8aebadb66b?auto=format&fit=crop&w=300&h=300"
                  bestDrop="P250 | Азимов"
                  game="cs2"
                />
                <CaseCard 
                  title="Кейс «Старт»"
                  price="79 ₽"
                  image="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=300&h=300"
                  bestDrop="Nova | Гипербист"
                  game="cs2"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="rare">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <CaseCard 
                  title="Кейс «Драгон»"
                  price="999 ₽"
                  image="https://images.unsplash.com/photo-1529564217784-25151c7147ec?auto=format&fit=crop&w=300&h=300"
                  bestDrop="AWP | Драгон Лор"
                  game="cs2"
                  isHot
                />
                <CaseCard 
                  title="Кейс «Хищник»"
                  price="799 ₽"
                  image="https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=300&h=300"
                  bestDrop="Керамбит | Градиент"
                  game="cs2"
                  isHot
                />
                <CaseCard 
                  title="Кейс «Элитный»"
                  price="899 ₽"
                  image="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=300&h=300"
                  bestDrop="M9 Штык-нож | Гамма Доплер"
                  game="cs2"
                  isHot
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <section className="container px-4 py-12 bg-card/30 my-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Как открыть кейс CS2</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-md">
                <div className="w-12 h-12 bg-cs2/20 text-cs2 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Выбери кейс</h3>
                <p className="text-sm text-muted-foreground">Выбери кейс CS2, который хочешь открыть из нашей коллекции</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-md">
                <div className="w-12 h-12 bg-cs2/20 text-cs2 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Оплати</h3>
                <p className="text-sm text-muted-foreground">Пополни баланс и оплати открытие кейса удобным способом</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-md">
                <div className="w-12 h-12 bg-cs2/20 text-cs2 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Получи выигрыш</h3>
                <p className="text-sm text-muted-foreground">Получи свой выигрыш мгновенно или продай его на площадке</p>
              </div>
            </div>
            
            <Button className="mt-8 bg-cs2 hover:bg-cs2/90 text-white">Открыть кейс</Button>
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

export default CS2Page;
