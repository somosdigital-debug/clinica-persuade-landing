import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "52 anos",
      condition: "Cardiologia",
      rating: 5,
      text: "O atendimento na Clínica MedCare é excepcional. Dr. João me acompanha há 3 anos e sempre demonstra muito cuidado e atenção. Me sinto segura e bem cuidada.",
      initials: "MS"
    },
    {
      name: "Carlos Santos",
      age: "45 anos", 
      condition: "Ortopedia",
      rating: 5,
      text: "Excelente estrutura e profissionais altamente qualificados. Meu problema no joelho foi resolvido com precisão. Recomendo para toda a família.",
      initials: "CS"
    },
    {
      name: "Ana Costa",
      age: "38 anos",
      condition: "Pediatria",
      rating: 5,
      text: "Meus filhos são atendidos aqui desde bebês. A Dra. Paula é maravilhosa com as crianças e sempre nos deixa tranquilos. Ambiente muito acolhedor.",
      initials: "AC"
    },
    {
      name: "Roberto Lima",
      age: "60 anos",
      condition: "Clínica Geral",
      rating: 5,
      text: "Faço meus check-ups anuais aqui há mais de 5 anos. Sempre muito organizados, pontuais e com equipamentos modernos. Confiança total!",
      initials: "RL"
    },
    {
      name: "Fernanda Oliveira",
      age: "29 anos",
      condition: "Oftalmologia",
      rating: 5,
      text: "Descobri meu problema de visão cedo graças aos exames detalhados da clínica. Hoje enxergo perfeitamente bem. Muito grata por todo cuidado!",
      initials: "FO"
    },
    {
      name: "José Pereira",
      age: "55 anos",
      condition: "Neurologia",
      rating: 5,
      text: "Tratamento da enxaqueca mudou minha qualidade de vida. Dr. Marcos é muito atencioso e explica tudo com detalhes. Clínica nota 10!",
      initials: "JP"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-medical-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que Nossos <span className="text-primary">Pacientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista. Veja alguns depoimentos 
            de quem confia na nossa equipe para cuidar da sua saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white shadow-card hover:shadow-medical transition-all duration-300 transform hover:-translate-y-2 border-0 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-medical rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.age} • {testimonial.condition}</p>
                    </div>
                  </div>
                  <Quote className="text-primary" size={20} />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-medical rounded-2xl p-8 text-white shadow-hero">
          <h3 className="text-2xl font-bold mb-4">Mais de 5.000 Pacientes Satisfeitos</h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se à nossa família de pacientes e experimente o cuidado que você merece.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm opacity-80">Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-sm opacity-80">Avaliação</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm opacity-80">Recomendação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;