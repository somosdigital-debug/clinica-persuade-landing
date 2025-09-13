import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Calendar, MapPin } from "lucide-react";
import doctorImage from "@/assets/doctor-profile.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "15+", label: "Anos de Experiência" },
    { icon: Award, value: "5.000+", label: "Pacientes Atendidos" },
    { icon: Calendar, value: "50+", label: "Consultas por Semana" },
    { icon: MapPin, value: "3", label: "Unidades" }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sobre a <span className="text-primary">Clínica MedCare</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Há mais de 15 anos dedicamos nossa expertise ao cuidado da saúde de nossa comunidade. 
                Nossa missão é oferecer atendimento médico de excelência, combinando tecnologia 
                avançada com o cuidado humano que cada paciente merece.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nossa equipe multidisciplinar é formada por profissionais altamente qualificados, 
                comprometidos em proporcionar diagnósticos precisos e tratamentos eficazes em 
                um ambiente acolhedor e seguro.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 bg-gradient-card shadow-card border-0 animate-slide-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="medical" size="lg">
              Conheça Nossa Equipe
            </Button>
          </div>

          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img 
                src={doctorImage} 
                alt="Doutor da Clínica MedCare em ambiente profissional" 
                className="rounded-2xl shadow-hero w-full h-auto object-cover"
              />
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-card">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-white" size={20} />
                  </div>
                  <p className="font-semibold text-foreground">Certificada</p>
                  <p className="text-sm text-muted-foreground">CRM Ativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-medical-light rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Nossa <span className="text-primary">Missão</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Promover a saúde e o bem-estar de nossos pacientes através de atendimento médico 
            humanizado, tecnologia de ponta e excelência profissional. Acreditamos que cada 
            pessoa merece cuidados de qualidade, respeitando sua individualidade e necessidades específicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;