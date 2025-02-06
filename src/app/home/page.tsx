import Card from "@/components/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  "Desenvolvimento Web",
  "Desenvolvimento Mobile",
  "Ciência de Dados",
  "Machine Learning e IA",
  "DevOps e Cloud Computing",
  "Cibersegurança",
  "Bancos de Dados",
  "Internet das Coisas (IoT)",
  "Automação com Python",
  "Marketing Digital",
  "Gestão de Projetos",
  "Finanças e Investimentos",
  "Empreendedorismo",
  "Estratégia e Planejamento",
  "Gestão de Pessoas (RH)",
  "E-commerce",
  "Vendas",
  "Design Gráfico",
  "UX/UI Design",
  "Edição de Vídeo",
  "Animação e Motion Graphics",
  "Fotografia",
  "Design de Produtos",
  "Modelagem 3D e Renderização",
  "Produtividade",
  "Liderança e Gestão de Equipes",
  "Comunicação e Oratória",
  "Educação Financeira",
  "Inteligência Emocional",
  "Técnicas de Estudo",
  "Mindfulness e Meditação",
  "Estatística",
  "Matemática Aplicada",
  "Física",
  "Química",
  "Biologia",
  "Pesquisa e Métodos Científicos",
  "Inglês",
  "Espanhol",
  "Francês",
  "Alemão",
  "Mandarim",
  "Línguas para negócios",
  "Música (Teoria Musical, Instrumentos, Produção)",
  "Escrita Criativa",
  "Pintura e Desenho",
  "Arte Digital",
  "Escultura",
  "Artesanato",
  "Nutrição",
  "Exercícios Físicos",
  "Yoga e Pilates",
  "Saúde Mental",
  "Primeiros Socorros",
  "Desenvolvimento Infantil",
  "Terapias Alternativas",
  "Didática e Metodologia de Ensino",
  "Ensino de Crianças (Educação Infantil)",
  "Ensino de Jovens e Adultos",
  "Uso de Tecnologia na Educação",
  "Formação para Professores",
  "Direito e Legislação",
  "Engenharia",
  "Arquitetura",
  "Medicina e Enfermagem",
  "Agricultura e Meio Ambiente",
  "Turismo e Hotelaria",
];

export default function Page() {
  return (
    <div >
      <div className="py-2">
        {categories.map((item, index) => (
          <Badge key={index} className="ms-1">{item}</Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 py-4">
        <Card />
        <Card />
        <Card />
        <Card />


       
      </div>
    </div>
  );
}
