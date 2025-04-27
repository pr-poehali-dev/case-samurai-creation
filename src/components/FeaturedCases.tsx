import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CaseCard from "@/components/CaseCard";

// Примеры данных для отображения
const mockCases = {
  cs2: [
    { id: "CS001", name: "Хромированный кейс", price: 199, imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80", rarity: "common", game: "cs2" },
    { id: "CS002", name: "Кейс Прайм", price: 399, imageUrl: "https://images.unsplash.com/photo-1608579099499-ccbf477c9dce?auto=format&fit=crop&q=80", rarity: "rare", game: "cs2" },
    { id: "CS003", name: "Кейс Браво", price: 599, imageUrl: "https://images.unsplash.com/photo-1519669417670-09c42ff5a16b?auto=format&fit=crop&q=80", rarity: "epic", game: "cs2" },
  ],
  dota2: [
    { id: "DT001", name: "Сундук Героя", price: 249, imageUrl: "https://images.unsplash.com/photo-1623283593065-9a787d598291?auto=format&fit=crop&q=80", rarity: "common", game: "dota2" },
    { id: "DT002", name: "Сундук Аркана", price: 499, imageUrl: "https://images.unsplash.com/photo-1605973033242-5cca4bc07672?auto=format&fit=crop&q=80", rarity: "epic", game: "dota2" },
    { id: "DT003", name: "Сундук Бессмертного", price: 699, imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80", rarity: "legendary", game: "dota2" },
  ],
  rust: [
    { id: "RS001", name: "Кейс Выжившего", price: 179, imageUrl: "https://images.unsplash.com/photo-1525853240521-92alva5rxb2?auto=format&fit=crop&q=80", rarity: "common", game: "rust" },
    { id: "RS002", name: "Свирепый кейс", price: 349, imageUrl: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80", rarity: "rare", game: "rust" },
    { id: "RS003", name: "Древний кейс", price: 649, imageUrl: "https://images.unsplash.com/photo-1595866135276-5115ba4d3069?auto=format&fit=crop&q=80", rarity: "legendary", game: "rust" },
  ]
};

type GameType = "cs2" | "dota2" | "rust";

const FeaturedCases = () => {
  const [activeTab, setActiveTab] = useState<GameType>("cs2");

  return (
    <div className="w-full">
      <h2 className="mb-6 text-3xl font-bold text-center">Популярные кейсы</h2>
      
      <Tabs defaultValue="cs2" onValueChange={(val) => setActiveTab(val as GameType)}>
        <TabsList className="w-full mb-6 grid grid-cols-3">
          <TabsTrigger value="cs2" className="data-[state=active]:text-cs2 data-[state=active]:border-cs2">CS2</TabsTrigger>
          <TabsTrigger value="dota2" className="data-[state=active]:text-dota data-[state=active]:border-dota">Dota 2</TabsTrigger>
          <TabsTrigger value="rust" className="data-[state=active]:text-rust data-[state=active]:border-rust">Rust</TabsTrigger>
        </TabsList>

        {(["cs2", "dota2", "rust"] as GameType[]).map((game) => (
          <TabsContent key={game} value={game}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockCases[game].map((caseItem) => (
                <CaseCard
                  key={caseItem.id}
                  id={caseItem.id}
                  name={caseItem.name}
                  price={caseItem.price}
                  imageUrl={caseItem.imageUrl}
                  rarity={caseItem.rarity as any}
                  game={game}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FeaturedCases;
