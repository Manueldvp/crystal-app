"use client";
import Link from "next/link";
import Image from "next/image";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

const FORMACION = [
  {
    titulo: "Licenciatura en Fisioterapia",
    institucion: "Benemérita Universidad Autónoma de Puebla (BUAP)",
    ubicacion: "Puebla, México · 2020",
    descripcion: "Prácticas clínicas en la Clínica Escuela Integral de Fisioterapia BUAP y el Hospital Universitario BUAP.",
    logo: "/logos/buap.png",
  },
  {
    titulo: "Prácticas Internacionales",
    institucion: "Instituto Nacional de Cancerología de Colombia",
    ubicacion: "Colombia",
    descripcion: "Trabajo con pacientes en contextos de alta complejidad física y emocional.",
    logo: "/logos/inc.jpg",
  },
  {
    titulo: "Diplomado Internacional en Fisioterapia del Suelo Pélvico",
    institucion: "Andare Certificaciones",
    ubicacion: "Ciudad de México",
    logo: "/logos/andare.jpg",
  },
  {
    titulo: "Posgrado en Uroginecología y Sexualidad Funcional",
    institucion: "Faculdade Inspirar",
    ubicacion: "Brasil",
    descripcion: "Enfoque basado en evidencia científica y práctica clínica especializada.",
    logo: "/logos/inspirar.png",
    darkBg: true,
  },
  {
    titulo: "Neuromodulación Percutánea Ecoguiada en Suelo Pélvico",
    institucion: "NMP Academy",
    ubicacion: "Madrid, España",
    logo: "/logos/nmp.png",
  },
  {
    titulo: "Posgrado en Fisioterapia Invasiva en Suelo Pélvico",
    institucion: "NMP Academy",
    ubicacion: "Madrid, España",
    logo: "/logos/nmp.png",
  },
];

const CERTIFICACIONES = [
  {
    titulo: "Trainer en Hipopresivos",
    institucion: "Low Pressure Fitness",
    descripcion: "Técnicas hipopresivas para rehabilitación abdomino-pélvica y entrenamiento postural.",
    logo: "/logos/lpf.svg",
    darkBg: true,
  },
  {
    titulo: "Educadora Perinatal",
    institucion: "LAMAZE International",
    descripcion: "Educación perinatal basada en evidencia para acompañamiento durante embarazo y parto.",
    logo: "/logos/lamaze.svg",
  },
];

const SERVICIOS_DESTACADOS = [
  {
    title: "Dolor en Endometriosis y Adenomiosis",
    description: "Abordaje especializado desde la fisioterapia pélvica para el manejo del dolor.",
    slug: "endometriosis-adenomiosis",
    image: "/images/endometriosis/main.png",
    isService: true,
  },
  {
    title: "Disfunciones Pélvicas",
    description: "Tratamiento especializado para disfunciones del suelo pélvico.",
    slug: "disfunciones-pelvicas-en-el-adulto",
    image: "/25.jpg",
    isService: true,
  },
  {
    title: "Embarazo y Preparación al Parto",
    description: "Acompañamiento integral durante el embarazo.",
    slug: "embarazo-y-preparacion-al-parto",
    image: "/images/servicios/embarazo.jpg",
    isService: true,
  },
  {
    title: "Disfunción Sexual",
    description: "Abordaje fisioterapéutico de disfunciones sexuales.",
    slug: "disfuncion-sexual",
    image: "/images/servicios/disfuncion.png",
    isService: true,
  },
  {
    title: "HIPOPOWER",
    description: "Entrenamiento para salud abdominal y pélvica.",
    slug: "hipo-power",
    image: "/images/hipopower/hero.webp",
    isService: false,
  },
];

const CREENCIAS = [
  {
    texto: "El dolor no debe normalizarse",
    descripcion: "No es \"parte de ser mujer\" ni algo con lo que debas aprender a vivir.",
  },
  {
    texto: "La información es parte del tratamiento",
    descripcion: "Entender tu cuerpo te empodera para tomar mejores decisiones.",
  },
  {
    texto: "El acompañamiento es tan importante como la técnica",
    descripcion: "Cada persona merece ser escuchada y tratada con respeto.",
  },
];

const VALORES = [
  { nombre: "Profesionalismo", desc: "Compromiso con la excelencia en la atención al paciente." },
  { nombre: "Competencia", desc: "Conocimiento y habilidades actualizadas en fisioterapia del suelo pélvico." },
  { nombre: "Empatía", desc: "Escucha activa y comprensión de las necesidades del paciente." },
  { nombre: "Trabajo en equipo", desc: "Colaboración con otros profesionales para ofrecer un servicio integral." },
  { nombre: "Investigación", desc: "Actualización constante en el conocimiento científico." },
];

const About = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/43.png"
            alt="Cristal Sarabia - Fisioterapeuta"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-secondary-900/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <RevealWrapper>
            <div className="max-w-2xl">
              <p className="text-fuchsia-pink-400 font-semibold tracking-widest uppercase text-sm mb-4">
                Fisioterapia del Suelo Pélvico
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                Cristal Sarabia
            </h1>
              <div className="w-20 h-1 bg-fuchsia-pink-500 mb-6" />
              <p className="text-xl md:text-2xl text-purple-secondary-100 font-light leading-relaxed">
                Fisioterapeuta especializada en Uroginecología y Sexualidad Funcional
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20agendar%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Agendar cita
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="#sobre-mi" 
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Conocer más
                </a>
          </div>
        </div>
      </RevealWrapper>
        </div>
      </section>

      {/* Intro Section */}
      <section id="sobre-mi" className="py-14 lg:py-20 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <RevealWrapper>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5">
                  La salud pélvica es una parte fundamental del bienestar físico, emocional y funcional de las personas, y sin embargo, sigue siendo una de las áreas más invisibilizadas dentro del cuidado de la salud.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-5">
                  Mi trabajo como fisioterapeuta nace precisamente de ese vacío: <strong className="text-gray-800">acompañar, informar y tratar aquello que durante años ha sido normalizado como &ldquo;parte de la vida&rdquo;.</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Soy Cristal Sarabia, fisioterapeuta especializada en Uroginecología y Sexualidad Funcional, con más de cinco años de experiencia clínica acompañando a mujeres y hombres en distintas etapas de su vida, desde el embarazo y el postparto, hasta el tratamiento de disfunciones complejas del piso pélvico.
                </p>
          </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-tr from-fuchsia-pink-300 to-purple-secondary-300 rounded-2xl -rotate-2" />
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/27.jpg"
                      alt="Cristal Sarabia"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
          </div>
        </div>
      </RevealWrapper>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-14 bg-purple-secondary-700 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-16 top-10 w-48 h-48 rounded-full border-2 border-white/15" />
        <div className="absolute left-10 bottom-10 w-24 h-24 rounded-full border-2 border-white/10" />
        <div className="absolute right-1/4 top-1/2 w-16 h-16 rounded-full border-2 border-white/10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <p className="text-fuchsia-pink-200 font-medium tracking-wide uppercase text-xs mb-3 text-center">
              Nuestra esencia
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
              Misión, Visión y Valores
          </h2>

            {/* Misión y Visión - Side by side */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
              {/* Misión */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-fuchsia-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Misión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Brindar atención integral de fisioterapia del suelo pélvico a mujeres y hombres de todas las edades, con el objetivo de mejorar su calidad de vida.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-secondary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ser una clínica de referencia en fisioterapia del suelo pélvico en Puebla, México, y ofrecer un servicio de excelencia, basado en la evidencia científica y la ética profesional.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-5 text-center">
            Valores
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {VALORES.map((valor, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-4 text-center shadow-lg"
                  >
                    <div className="w-8 h-8 bg-fuchsia-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-sm mb-1">{valor.nombre}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{valor.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Formación Académica */}
      <section className="py-14 bg-pink-secondary-50 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-32 top-20 w-96 h-96 rounded-full border-[3px] border-purple-secondary-200 opacity-50" />
        <div className="absolute -right-20 top-40 w-64 h-64 rounded-full border-[3px] border-fuchsia-pink-200 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
              Formación académica y clínica
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-3">
              {FORMACION.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-stretch rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-white border-l-4 border-fuchsia-pink-500"
                >
                  <div className={`w-32 flex items-center justify-center flex-shrink-0 p-2 border-r border-gray-100 ${item.darkBg ? 'bg-gray-800' : 'bg-white'}`}>
                    {item.logo ? (
                      <Image 
                        src={item.logo} 
                        alt={item.institucion} 
                        width={120} 
                        height={80} 
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <svg className="w-12 h-12 text-purple-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 p-5">
                    <h3 className="font-semibold text-gray-800 leading-tight">{item.titulo}</h3>
                    <p className="text-fuchsia-pink-600 text-sm font-medium">{item.institucion}</p>
                    <p className="text-gray-500 text-sm">{item.ubicacion}</p>
                    {item.descripcion && (
                      <p className="text-gray-600 text-sm mt-1">{item.descripcion}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-14 bg-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-purple-secondary-100 to-pink-secondary-100 opacity-60" />
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-fuchsia-pink-100 to-purple-secondary-100 opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
              Certificaciones
          </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 text-sm">
              Herramientas que integro como parte de un abordaje clínico que respeta la individualidad y las necesidades de cada persona.
            </p>
            
            <div className="max-w-4xl mx-auto space-y-3">
              {CERTIFICACIONES.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-stretch rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-white border-l-4 border-purple-secondary-500"
                >
                  <div className={`w-32 flex items-center justify-center flex-shrink-0 p-2 border-r border-gray-100 ${cert.darkBg ? 'bg-gray-800' : 'bg-white'}`}>
                    {cert.logo ? (
                      <Image src={cert.logo} alt={cert.institucion} width={120} height={80} className="object-contain w-full h-full" />
                    ) : (
                      <svg className="w-12 h-12 text-purple-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 p-5">
                    <h3 className="font-bold text-gray-800 text-lg">{cert.titulo}</h3>
                    <p className="text-fuchsia-pink-600 text-sm font-medium mb-1">{cert.institucion}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* COMFIP */}
      <section className="py-14 bg-purple-secondary-700 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute left-10 top-10 w-20 h-20 rounded-full border-2 border-white/15" />
        <div className="absolute right-20 bottom-10 w-32 h-32 rounded-full border-2 border-white/15" />
        <div className="absolute left-1/4 bottom-5 w-16 h-16 rounded-full border-2 border-white/10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-fuchsia-pink-200 font-medium tracking-wide uppercase text-xs mb-3">
                Liderazgo profesional
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Fundadora y Presidenta de COMFIP
              </h2>
              <p className="text-purple-secondary-100 leading-relaxed mb-4">
                <strong className="text-white">COMFIP – Colegio Mexicano de Fisioterapia Pélvica</strong> es una iniciativa que creé con el objetivo de fortalecer el desarrollo académico, clínico y ético de la fisioterapia pélvica en México.
              </p>
              <p className="text-purple-secondary-200 text-sm leading-relaxed">
                Trabajo activamente en la profesionalización del área, la educación continua y la visibilización de la salud pélvica como pilar fundamental del bienestar.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Filosofía de trabajo */}
      <section className="py-14 bg-purple-secondary-50 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -left-16 bottom-10 w-48 h-48 rounded-full border-[3px] border-fuchsia-pink-200 opacity-60" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                Mi filosofía de trabajo
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Mi práctica clínica se basa en un abordaje <strong className="text-gray-800">integral, ético y empático</strong>. 
                No trabajo con protocolos genéricos, sino con valoraciones detalladas y planes de tratamiento individualizados.
              </p>

              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {CREENCIAS.map((creencia, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border-t-4 border-fuchsia-pink-500 hover:shadow-lg transition-all text-center"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-pink-500 to-purple-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-gray-800 font-semibold mb-2">{creencia.texto}</h3>
                    <p className="text-gray-600 text-sm">{creencia.descripcion}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-secondary-50 to-pink-secondary-50 rounded-xl border border-purple-secondary-100">
                <p className="text-lg text-gray-700 text-center">
                  &ldquo;La fisioterapia pélvica no solo trata músculos, <strong className="text-fuchsia-pink-600">trata personas</strong>.&rdquo;
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="py-14 bg-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full border-[3px] border-purple-secondary-200 opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
              Áreas de especialización
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 text-sm">
              Conoce los servicios que ofrezco para acompañarte en tu proceso de salud pélvica.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {SERVICIOS_DESTACADOS.map((servicio, index) => (
                <Link
                  key={index}
                  href={servicio.isService ? `/servicios/${servicio.slug}` : `/${servicio.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={servicio.image}
                        alt={servicio.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-fuchsia-pink-600 transition-colors">
                        {servicio.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{servicio.description}</p>
                    </div>
                  </div>
          </Link>
                ))}
          </div>
        </RevealWrapper>
      </div>
    </section>

      {/* CTA Final */}
      <section className="py-14 bg-gradient-to-r from-fuchsia-pink-500 to-purple-secondary-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <RevealWrapper>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Lista para dar el primer paso?
            </h2>
            <p className="text-fuchsia-pink-100 mb-6 max-w-2xl mx-auto">
              Estoy aquí para acompañarte. Agenda tu consulta y comencemos a trabajar juntas en tu bienestar pélvico.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta"
              className="inline-flex items-center gap-2 bg-white text-fuchsia-pink-600 font-semibold px-8 py-4 rounded-full hover:bg-fuchsia-pink-50 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agenda tu consulta
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
};

export default About;
