import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CaseCardProps {
  id?: string;
  title?: string;
  name?: string;
  price: string | number;
  imageUrl?: string;
  image?: string;
  rarity?: "common" | "rare" | "epic" | "legendary";
  game: "cs2" | "dota2" | "rust";
  bestDrop?: string;
  isNew?: boolean;
  isHot?: boolean;
}

const rarityColors = {
  common: "bg-slate-500",
  rare: "bg-blue-500",
  epic: "bg-purple-500",
  legendary: "bg-amber-500"
};

const gameColors = {
  cs2: "bg-cs2 text-black",
  dota2: "bg-dota",
  rust: "bg-rust"
};

const CaseCard = ({ 
  id, 
  title, 
  name, 
  price, 
  imageUrl, 
  image, 
  rarity, 
  game, 
  bestDrop,
  isNew,
  isHot
}: CaseCardProps) => {
  const displayName = name || title || "Кейс";
  const displayImage = imageUrl || image;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 group">
      <div className="relative pt-4">
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge className={gameColors[game]}>
            {game === "cs2" ? "CS2" : game === "dota2" ? "Dota 2" : "Rust"}
          </Badge>
          {rarity && (
            <Badge className={rarityColors[rarity]}>
              {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
            </Badge>
          )}
          {isNew && <Badge className="bg-green-500">Новый</Badge>}
          {isHot && <Badge className="bg-red-500">Горячий</Badge>}
        </div>
        <img 
          src={displayImage} 
          alt={displayName}
          className="object-contain w-full h-48 mx-auto transition-transform group-hover:scale-110"
        />
      </div>

      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold">{displayName}</h3>
        {id && <p className="text-sm text-muted-foreground">ID: {id}</p>}
        {bestDrop && <p className="text-xs text-muted-foreground mt-1">Лучший дроп: {bestDrop}</p>}
      </CardContent>

      <CardFooter className="flex justify-between">
        <p className="font-bold text-primary">{typeof price === 'number' ? `${price} ₽` : price}</p>
        <Button size="sm" className="animate-glow">Открыть</Button>
      </CardFooter>
    </Card>
  );
};

export default CaseCard;
