import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin,
  Heart 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-medical rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-medical rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Clínica MedCare</h3>
                <p className="text-sm text-gray-300">Cuidando da sua saúde</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Há mais de 15 anos oferecendo atendimento médico de excelência 
              com tecnologia avançada e cuidado humanizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Clínica Geral</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Cardiologia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Neurologia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Oftalmologia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Ortopedia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Pediatria</a></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors duration-300">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors duration-300">Serviços</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors duration-300">Depoimentos</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-white transition-colors duration-300">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Convênios</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Rua das Flores, 123<br />
                    Centro, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-primary mr-3 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">(11) 9999-9999</p>
                  <p className="text-gray-300 text-sm">(11) 3333-3333</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-primary mr-3 flex-shrink-0" size={16} />
                <p className="text-gray-300 text-sm">contato@clinicamedcare.com.br</p>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-primary mt-1 mr-3 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">Segunda a Sexta: 7h às 19h</p>
                  <p className="text-gray-300 text-sm">Sábados: 8h às 14h</p>
                  <p className="text-primary text-sm font-semibold">Urgências: 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Clínica MedCare. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-gray-300 text-sm">
              <span>Feito com</span>
              <Heart className="text-red-500 mx-1" size={14} fill="currentColor" />
              <span>para cuidar da sua saúde</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              CRM: 12345-SP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;