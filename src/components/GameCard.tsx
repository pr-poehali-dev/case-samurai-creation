import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface GameCardProps {
  title: string;
  path: string;
  icon: ReactNode;
  color: string;
  description: string;
}

const GameCard = ({ title, path, icon, color, description }: GameCardProps) => {
  return (
    <Link to={path}>
      <Card className="overflow-hidden transition-all duration-300 border-2 hover:scale-105 hover:shadow-lg" 
        style={{ borderColor: color }}>
        <CardContent className="p-6 text-center flex flex-col items-center">
          <div 
            className="flex items-center justify-center w-20 h-20 mb-4 rounded-full animate-float"
            style={{ backgroundColor: `${color}20` }}
          >
            {icon}
          </div>
          <h3 className="mb-2 text-2xl font-bold" style={{ color }}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;
