import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageCircle,
  Navigation
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-medical-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para cuidar da sua saúde. Entre em contato conosco para 
            agendar sua consulta ou esclarecer suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card shadow-card border-0 animate-slide-in">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="mr-2" size={20} />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Unidade Principal</h4>
                  <p className="text-muted-foreground">
                    Rua das Flores, 123<br />
                    Centro, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <Navigation className="mr-2" size={16} />
                  Ver no Mapa
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 animate-slide-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Phone className="mr-2" size={20} />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">(11) 9999-9999</p>
                  <p className="text-sm text-muted-foreground">Celular / WhatsApp</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">(11) 3333-3333</p>
                  <p className="text-sm text-muted-foreground">Telefone fixo</p>
                </div>
                <Button variant="medical" className="w-full">
                  <MessageCircle className="mr-2" size={16} />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0 animate-slide-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="mr-2" size={20} />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta:</span>
                  <span className="text-foreground font-semibold">7h às 19h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados:</span>
                  <span className="text-foreground font-semibold">8h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Urgências:</span>
                  <span className="text-primary font-semibold">24h</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-card border-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="flex items-center text-primary text-2xl">
                  <Calendar className="mr-2" size={24} />
                  Agendar Consulta
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="especialidade">Especialidade</Label>
                    <select className="w-full h-10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-input bg-background rounded-md">
                      <option value="">Selecione a especialidade</option>
                      <option value="clinica-geral">Clínica Geral</option>
                      <option value="cardiologia">Cardiologia</option>
                      <option value="neurologia">Neurologia</option>
                      <option value="oftalmologia">Oftalmologia</option>
                      <option value="ortopedia">Ortopedia</option>
                      <option value="pediatria">Pediatria</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                  <Textarea 
                    id="mensagem" 
                    placeholder="Descreva brevemente o motivo da consulta ou suas dúvidas..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Calendar className="mr-2" size={16} />
                    Agendar Consulta
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Mail className="mr-2" size={16} />
                    Enviar E-mail
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios. Entraremos em contato em até 2 horas úteis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-medical rounded-2xl p-8 text-center text-white shadow-hero">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Cuidar da Sua Saúde?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Nossa equipe está aguardando para proporcionar o melhor atendimento médico 
            para você e sua família. Agende já sua consulta!
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Phone className="mr-2" size={20} />
            Ligar Agora: (11) 9999-9999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;