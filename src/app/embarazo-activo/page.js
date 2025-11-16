"use client";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import {
  CalendarDaysIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  HeartIcon,
  HandRaisedIcon,
  UserIcon,
  UsersIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function EmbarazoActivoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full min-h-[85vh] md:min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/taller-embarazo/hero.jpg"
            alt="Embarazo Activo - Preparación al Parto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-secondary-900/70 via-fuchsia-pink-900/60 to-purple-secondary-900/70"></div>
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-secondary-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-fuchsia-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative h-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center">
          <div className="text-center px-4 py-16 max-w-6xl mx-auto">
            <RevealWrapper>
              <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <p className="text-sm md:text-base text-white font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="text-pink-secondary-200">●</span>
                  Taller Online en Vivo
                  <span className="text-pink-secondary-200">●</span>
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Preparándome para
                <br />
                <span className="text-white drop-shadow-lg">el Parto</span>
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold mb-6 leading-relaxed italic">
                &ldquo;Prepárate física y emocionalmente para el nacimiento de
                tu bebé&rdquo;
              </p>

              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                3 sesiones online para vivir tu parto con mayor confianza,
                conocimiento y serenidad
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                  <CalendarDaysIcon className="w-8 h-8 text-white mb-2 mx-auto" />
                  <div className="text-white font-bold text-sm mb-1">
                    24, 27 Y 28 DE NOVIEMBRE
                  </div>
                  <div className="text-white/80 text-sm">18:30 - 20:30 hrs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                  <ClockIcon className="w-8 h-8 text-white mb-2 mx-auto" />
                  <div className="text-white font-bold text-sm mb-1">
                    MODALIDAD ONLINE
                  </div>
                  <div className="text-white/80 text-sm">En vivo por Zoom</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center">
                  <CurrencyDollarIcon className="w-8 h-8 text-white mb-2 mx-auto" />
                  <div className="text-white font-bold text-sm mb-1">
                    $1,800
                  </div>
                  <div className="text-white/80 text-sm">
                    Por pareja + 1 mes de clases
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://wa.me/5212224237337?text=%C2%A1Hola%2C%20Cristal%21%20Quiero%20inscribirme%20al%20taller%20Prepar%C3%A1ndome%20para%20el%20Parto"
                  target="_blank"
                  className="group relative px-8 py-4 bg-gradient-to-r from-pink-secondary-500 to-fuchsia-pink-500 text-white font-bold text-lg rounded-full hover:from-pink-secondary-600 hover:to-fuchsia-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    INSCRÍBETE AHORA
                    <span className="text-2xl">→</span>
                  </span>
                </Link>

                <a
                  href="#contenido"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-pink-secondary-600 transition-all duration-300 hover:scale-105"
                >
                  VER MÁS INFORMACIÓN ▼
                </a>
              </div>

              <p className="mt-12 text-lg md:text-xl text-white/80 italic font-light max-w-2xl mx-auto">
                &ldquo;Cuando nace un bebé, también nace una nueva esencia de
                ti&rdquo;
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <RevealWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-secondary-700 mb-6">
                ¿Qué es este taller?
              </h2>
              <div className="w-24 h-1 bg-pink-secondary-500 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Un programa de preparación integral donde aprenderás a moverte,
                respirar, relajarte y comprender tu cuerpo para vivir tu parto
                con mayor confianza. Integra conocimientos actualizados de
                fisioterapia pélvica en obstetricia para optimizar la
                preparación corporal para el trabajo de parto.
              </p>
              <p className="text-base md:text-lg text-pink-secondary-600 font-semibold mt-4">
                Ideal para mujeres a partir de la semana 20 de embarazo
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-secondary-200">
                <div
                  className="relative bg-black"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/xLi7qAIHSP8"
                    title="Embarazo Activo y Preparación al Parto - Cristal Sarabia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 italic">
                Descubre los ejercicios y técnicas que aprenderás en el taller
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section id="contenido" className="py-16 bg-pink-secondary-50">
        <div className="max-w-6xl mx-auto px-4">
          <RevealWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-secondary-700 mb-6">
                Lo que aprenderás
              </h2>
              <div className="w-24 h-1 bg-pink-secondary-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                3 sesiones completas de preparación para el parto
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sesión 1 */}
            <RevealWrapper className="h-full">
              <div className="h-full bg-gradient-to-br from-pink-secondary-50 to-fuchsia-pink-50 rounded-2xl p-8 border-2 border-pink-secondary-200 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-secondary-400 to-fuchsia-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-secondary-700">
                      SESIÓN 1
                    </h3>
                    <p className="text-sm text-gray-600">Biomecánica</p>
                  </div>
                </div>
                <ul className="text-gray-600 flex-grow space-y-2 text-sm">
                  <li>• Biomecánica de la pelvis durante el parto</li>
                  <li>• Movimientos que facilitan el descenso del bebé</li>
                  <li>• Posiciones para el trabajo de parto</li>
                </ul>
              </div>
            </RevealWrapper>

            {/* Sesión 2 */}
            <RevealWrapper className="h-full">
              <div className="h-full bg-gradient-to-br from-pink-secondary-50 to-fuchsia-pink-50 rounded-2xl p-8 border-2 border-pink-secondary-200 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-secondary-400 to-fuchsia-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-secondary-700">
                      SESIÓN 2
                    </h3>
                    <p className="text-sm text-gray-600">Técnicas</p>
                  </div>
                </div>
                <ul className="text-gray-600 flex-grow space-y-2 text-sm">
                  <li>• Técnicas de respiración funcional</li>
                  <li>• Métodos no farmacológicos para aliviar el dolor</li>
                  <li>• Rol activo del acompañante</li>
                </ul>
              </div>
            </RevealWrapper>

            {/* Sesión 3 */}
            <RevealWrapper className="h-full">
              <div className="h-full bg-gradient-to-br from-pink-secondary-50 to-fuchsia-pink-50 rounded-2xl p-8 border-2 border-pink-secondary-200 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-secondary-400 to-fuchsia-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-secondary-700">
                      SESIÓN 3
                    </h3>
                    <p className="text-sm text-gray-600">Cuidado Pélvico</p>
                  </div>
                </div>
                <ul className="text-gray-600 flex-grow space-y-2 text-sm">
                  <li>• Cuidado y protección del piso pélvico</li>
                  <li>• Masaje perineal y relajación pélvica</li>
                  <li>• Activación efectiva de la faja abdominal</li>
                </ul>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <RevealWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-secondary-700 mb-6">
                Beneficios
              </h2>
              <div className="w-24 h-1 bg-pink-secondary-500 mx-auto mb-8"></div>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: SparklesIcon,
                title: "Mayor confianza",
                description:
                  "Vive tu parto con conocimiento y seguridad en tu cuerpo",
              },
              {
                icon: HandRaisedIcon,
                title: "Herramientas prácticas",
                description:
                  "Técnicas de respiración, movimiento y manejo del dolor",
              },
              {
                icon: HeartIcon,
                title: "Conexión profunda",
                description: "Fortalece el vínculo con tu bebé y tu pareja",
              },
              {
                icon: AcademicCapIcon,
                title: "Conocimiento actualizado",
                description:
                  "Basado en evidencia científica y fisioterapia pélvica",
              },
              {
                icon: UserIcon,
                title: "Preparación completa",
                description:
                  "Física, emocional y mental para el momento del parto",
              },
              {
                icon: UsersIcon,
                title: "Flexibilidad online",
                description:
                  "Desde la comodidad de tu casa, en vivo con Cristal",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <RevealWrapper key={index} className="h-full">
                  <div className="h-full bg-white rounded-2xl p-8 border-2 border-pink-secondary-100 hover:border-pink-secondary-300 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col">
                    <IconComponent className="w-12 h-12 text-pink-secondary-500 mb-4" />
                    <h3 className="text-xl font-bold text-pink-secondary-700 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {benefit.description}
                    </p>
                  </div>
                </RevealWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-pink-secondary-500 via-fuchsia-pink-500 to-purple-secondary-500">
        <div className="max-w-5xl mx-auto px-4">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center flex items-center gap-4 md:gap-6">
              <HeartIcon className="w-10 h-10 md:w-12 md:h-12 text-white flex-shrink-0" />
              <p className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-snug">
                &ldquo;Tu cuerpo está diseñado para esta experiencia. Cuidarlo
                durante el embarazo no es un lujo, es una inversión en tu salud
                y la de tu bebé.&rdquo;
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="py-16 bg-pink-secondary-50">
        <div className="max-w-6xl mx-auto px-4">
          <RevealWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-secondary-700 mb-6">
                Sobre mí
              </h2>
              <div className="w-24 h-1 bg-pink-secondary-500 mx-auto"></div>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-secondary-50 to-fuchsia-pink-50 rounded-3xl p-8 md:p-12 border-2 border-pink-secondary-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-pink-secondary-300 shadow-xl">
                    <Image
                      src="/images/taller-embarazo/about-me.jpg"
                      alt="Cristal Sarabia - Fisioterapeuta Pélvica"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-3xl font-black text-pink-secondary-700 mb-2">
                    Cristal Sarabia
                  </h3>
                  <p className="text-lg text-fuchsia-pink-600 font-semibold mb-4">
                    Fisioterapeuta Pélvica y Educadora Perinatal
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Especialista en el abordaje del complejo
                    abdomino-lumbo-pélvico y en salud de la mujer. Con más de 6
                    años de experiencia clínica y certificaciones
                    internacionales, Cristal se dedica a acompañar a las mujeres
                    en las etapas más importantes de su vida.
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Link
                      href="https://www.instagram.com/cristalsarabia_"
                      target="_blank"
                      className="px-6 py-3 bg-gradient-to-r from-pink-secondary-500 to-fuchsia-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="https://www.facebook.com/FisioPelvicaCristalSarabia"
                      target="_blank"
                      className="px-6 py-3 bg-white border-2 border-pink-secondary-400 text-pink-secondary-600 font-semibold rounded-full hover:bg-pink-secondary-50 hover:scale-105 transition-all duration-300"
                    >
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <RevealWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-secondary-700 mb-6">
                Todo sobre el Taller
              </h2>
              <div className="w-24 h-1 bg-pink-secondary-500 mx-auto"></div>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-pink-secondary-200 overflow-hidden mb-12">
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <CurrencyDollarIcon className="w-10 h-10 text-pink-secondary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-pink-secondary-700 mb-1">
                        Inversión
                      </h4>
                      <p className="text-gray-700 font-semibold">
                        $1,800 por pareja
                      </p>
                      <p className="text-sm text-pink-secondary-600">
                        + 1 mes de clases de ejercicio en embarazo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CalendarDaysIcon className="w-10 h-10 text-pink-secondary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-pink-secondary-700 mb-1">
                        Fechas
                      </h4>
                      <p className="text-gray-700">24, 27 y 28 de noviembre</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ClockIcon className="w-10 h-10 text-pink-secondary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-pink-secondary-700 mb-1">
                        Horario
                      </h4>
                      <p className="text-gray-700">18:30 - 20:30 hrs</p>
                      <p className="text-sm text-gray-500">
                        2 horas por sesión
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <UserGroupIcon className="w-10 h-10 text-pink-secondary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-pink-secondary-700 mb-1">
                        Modalidad
                      </h4>
                      <p className="text-gray-700">Online en vivo por Zoom</p>
                      <p className="text-sm text-gray-500">Cupo limitado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ChatBubbleLeftRightIcon className="w-10 h-10 text-pink-secondary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-pink-secondary-700 mb-1">
                        Reserva tu lugar
                      </h4>
                      <p className="text-gray-700">Aparta con $500</p>
                      <p className="text-sm text-gray-500">
                        WhatsApp: 222 423 7337
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <SparklesIcon className="w-10 h-10 text-pink-secondary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-pink-secondary-700 mb-1">
                        Ideal para
                      </h4>
                      <p className="text-gray-700">
                        Mujeres desde la semana 20 de embarazo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-secondary-500 via-fuchsia-pink-500 to-purple-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/bg-3.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <RevealWrapper>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Vive tu embarazo en movimiento,
              <br />
              con fuerza y serenidad
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 italic">
              &ldquo;Ellas ya vivieron la experiencia de moverse con propósito.
              <br />
              Ahora es tu turno.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://wa.me/5212224237337?text=%C2%A1Hola%2C%20Cristal%21%20Quiero%20inscribirme%20al%20taller%20Prepar%C3%A1ndome%20para%20el%20Parto"
                target="_blank"
                className="group relative px-10 py-5 bg-white text-pink-secondary-600 font-black text-xl rounded-full hover:bg-pink-secondary-50 transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  RESERVA TU LUGAR
                  <HeartIcon className="w-6 h-6" />
                </span>
              </Link>

              <Link
                href={`https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quiero%20información%20sobre%20el%20taller%20Preparándome%20para%20el%20Parto`}
                target="_blank"
                className="px-10 py-5 bg-transparent border-3 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-pink-secondary-600 transition-all duration-300 hover:scale-105"
              >
                MÁS INFORMACIÓN
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}
