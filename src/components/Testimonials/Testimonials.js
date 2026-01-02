'use client'
import { StarIcon } from '@heroicons/react/24/solid';
import { RevealWrapper } from '@/components/RevealWrapper/RevealWrapper';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Daly Cs",
    text: "Quiero agradecer profundamente a mi fisioterapeuta de piso pélvico por acompañarme en este proceso de recuperación después de mi cirugía por endometriosis. Después de ocho sesiones, me siento una persona completamente diferente: sin dolor, más ligera, renovada y con ganas de volver a disfrutar mi día a día. Su paciencia, profesionalismo y la manera tan humana de tratarme hicieron toda la diferencia.",
    rating: 5,
  },
  {
    id: 2,
    name: "Frida Cano",
    text: "Es la primera vez que abordó la endometriosis y adenomiosis desde otro ángulo y de forma multidisciplinaria. Estoy sorprendida con los resultados desde la reducción de dolor hasta el impacto que he tenido mejorando mi estilo de vida y mis emociones. He dejado de normalizar el dolor y sé que encontré a alguien que se destaca por su profesionalismo y experiencia.",
    rating: 5,
  },
  {
    id: 3,
    name: "Julia Dietrich",
    text: "Tengo escoliosis y pensé que el embarazo haría que tuviera más dolor de espalda pero no fue así, los ejercicios me ayudaron muchísimo a llevar un embarazo bonito y poder disfrutarlo en cada momento. Hoy después de dos días posparto, con mi bebé de 3,865 kg y sin que me hicieran episiotomía, puedo decir que recomiendo ampliamente llevar fisioterapia pélvica.",
    rating: 5,
  },
  {
    id: 4,
    name: "Katia Salas",
    text: "Llegue con una vulvodinia que el dolor era 10/10. Después de 4 sesiones el dolor había bajado a 2/10 y a la 6 sesión me fui con dolor 1/10. Aunque es un tratamiento incómodo te hace sentir agusto en todo momento. No podría imaginar una mejor fisioterapeuta de piso pélvico para resolver el dolor que tenía.",
    rating: 5,
  },
  {
    id: 5,
    name: "Nélida Guzmán Hernández",
    text: "Me encantó! Siempre me sentí súper acompañada por Cristal. Siempre estaba al pendiente de cómo me sentía y atenta a cómo respondía mi cuerpo. Aprendí muchísimo sobre cómo cuidar mi piso pélvico y tener una mayor consciencia de cómo trabajar estas partes que a menudo olvidamos. Sentí muchísima mejoría con sus ejercicios.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nancy Rocha",
    text: "Tuve una operación de histerectomía total y tenía mucha sensibilidad en el vientre bajo, no me podía tallar al bañarme, ni echar crema en esa zona. Su trato es amable y profesional, llevaba mucho dolor e inflación y con la valoración se bajó el dolor. Me ayudó mucho con ejercicio específicos que me enseñó junto con terapias físicas a mejorar la sensibilidad. La recomiendo ampliamente.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TESTIMONIALS.map((testimonial, index) => (
        <RevealWrapper key={testimonial.id || index}>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            
            {/* Quote icon */}
            <div className="mb-4">
              <svg 
                className="w-10 h-10 text-purple-secondary-200" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-sm overflow-hidden" style={{
              display: '-webkit-box',
              WebkitLineClamp: 7,
              WebkitBoxOrient: 'vertical',
            }}>
              &ldquo;{testimonial.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-pink-300 to-purple-secondary-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>
      ))}
    </div>
  );
}

