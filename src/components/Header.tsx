import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-medical rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gradient-medical rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Clínica MedCare</h1>
              <p className="text-sm text-muted-foreground">Cuidando da sua saúde</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors duration-300">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors duration-300">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors duration-300">
              Sobre Nós
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors duration-300">
              Depoimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors duration-300">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center text-sm text-muted-foreground">
              <Phone size={16} className="mr-2" />
              <span>(11) 9999-9999</span>
            </div>
            <Button variant="medical" size="sm">
              <Calendar className="mr-2" size={16} />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;