import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby, 
  Shield, 
  Clock 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Clínica Geral",
      description: "Atendimento médico completo para toda a família com foco na prevenção e diagnóstico precoce.",
      features: ["Consultas de rotina", "Check-ups completos", "Medicina preventiva"]
    },
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Especialistas em saúde cardiovascular com equipamentos de última geração para diagnósticos precisos.",
      features: ["Eletrocardiograma", "Ecocardiograma", "Teste ergométrico"]
    },
    {
      icon: Brain,
      title: "Neurologia",
      description: "Diagnóstico e tratamento de doenças do sistema nervoso com abordagem multidisciplinar.",
      features: ["Eletroencefalograma", "Consultas especializadas", "Acompanhamento contínuo"]
    },
    {
      icon: Eye,
      title: "Oftalmologia",
      description: "Cuidados completos para a saúde dos seus olhos com tecnologia avançada em diagnósticos.",
      features: ["Exames de vista", "Cirurgias", "Tratamentos especializados"]
    },
    {
      icon: Bone,
      title: "Ortopedia",
      description: "Tratamento especializado para ossos, músculos e articulações com equipe experiente.",
      features: ["Consultas ortopédicas", "Fisioterapia", "Cirurgias especializadas"]
    },
    {
      icon: Baby,
      title: "Pediatria",
      description: "Cuidado especializado para bebês, crianças e adolescentes em ambiente acolhedor.",
      features: ["Puericultura", "Vacinação", "Acompanhamento do desenvolvimento"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-medical-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de especialidades médicas com profissionais qualificados 
            e equipamentos modernos para garantir o melhor atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-0"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-4 shadow-medical">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-medical rounded-2xl p-8 text-center text-white shadow-hero">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Clock className="mr-3" size={24} />
                <div className="text-left">
                  <p className="font-semibold">Atendimento de Urgência</p>
                  <p className="text-sm opacity-90">24 horas por dia</p>
                </div>
              </div>
              <div className="flex items-center">
                <Shield className="mr-3" size={24} />
                <div className="text-left">
                  <p className="font-semibold">Convênios Aceitos</p>
                  <p className="text-sm opacity-90">Principais operadoras</p>
                </div>
              </div>
            </div>
          </div>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Verificar Convênio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;