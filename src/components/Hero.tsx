import { Button } from "@/components/ui/button";
import { Calendar, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-medical-light to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Sua <span className="text-primary">Saúde</span> é Nossa
                <br />
                <span className="bg-gradient-medical bg-clip-text text-transparent">
                  Prioridade
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Oferecemos atendimento médico de excelência com uma equipe especializada, 
                tecnologia de ponta e o cuidado que você merece.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Calendar className="mr-2" size={20} />
                Agendar Consulta Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Conhecer Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center animate-slide-in">
                <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-3 shadow-medical">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-foreground">Segurança</h3>
                <p className="text-sm text-muted-foreground">Protocolos rigorosos</p>
              </div>
              <div className="text-center animate-slide-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-3 shadow-medical">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-foreground">Cuidado</h3>
                <p className="text-sm text-muted-foreground">Atendimento humanizado</p>
              </div>
              <div className="text-center animate-slide-in" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-3 shadow-medical">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-foreground">Experiência</h3>
                <p className="text-sm text-muted-foreground">+15 anos no mercado</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Clínica médica moderna com ambiente profissional" 
                className="rounded-2xl shadow-hero w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">+5.000</p>
                    <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;