import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-primary text-transparent bg-clip-text">
            Case-Samurai
          </span>
        </Link>

        <div className="hidden space-x-4 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/cs2" className="text-cs2 hover:text-cs2/90">CS2</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/dota2" className="text-dota hover:text-dota/90">Dota 2</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/rust" className="text-rust hover:text-rust/90">Rust</Link>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" variant="secondary">
            Войти
          </Button>
          <Button size="sm">
            Регистрация
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
