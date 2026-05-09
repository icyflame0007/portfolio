import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-lg py-8 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-cyan-500 text-lg">SA</span>
            <span className="font-semibold tracking-tight text-foreground">Santosh Akula</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            © 2025 Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
