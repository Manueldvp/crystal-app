"use client";
import { useState, useEffect } from "react";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import { CalendarIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function AgendarCitaPage() {
  const [selectedType, setSelectedType] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly script only once
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      // Script already exists, check if Calendly is available
      if (window.Calendly) {
        setScriptLoaded(true);
      } else {
        // Wait for script to load
        const checkCalendly = setInterval(() => {
          if (window.Calendly) {
            setScriptLoaded(true);
            clearInterval(checkCalendly);
          }
        }, 100);
        return () => clearInterval(checkCalendly);
      }
    }
  }, []);

  // Initialize widget when type changes and script is loaded
  useEffect(() => {
    if (selectedType && scriptLoaded && window.Calendly) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        const widgetElement = document.querySelector('.calendly-inline-widget');
        if (widgetElement) {
          const url = consultaTypes.find((t) => t.id === selectedType)?.calendlyUrl;
          // Destroy existing widget if it exists
          if (widgetElement.calendlyWidget) {
            widgetElement.calendlyWidget.destroy();
          }
          // Initialize new widget
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: widgetElement,
          });
        }
      }, 100);
    }
  }, [selectedType, scriptLoaded]);

  const consultaTypes = [
    {
      id: "primera",
      title: "Primera Consulta",
      description: "Para pacientes nuevas",
      duration: "60 minutos",
      includes: [
        "Entrevista detallada sobre tu salud",
        "Evaluación física personalizada",
        "Explicación del plan de tratamiento",
        "Inicio de tratamiento si es posible",
      ],
      calendlyUrl: "https://calendly.com/cristalsarabia/primera-consulta?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=C267C0",
    },
    {
      id: "seguimiento",
      title: "Consulta de Seguimiento",
      description: "Para continuar tu progreso",
      duration: "50 minutos",
      includes: [
        "Revisión de tus avances y síntomas",
        "Ajuste de ejercicios y técnicas según tu evolución",
        "Tratamiento manual o instrumental cuando sea necesario",
        "Resolución de dudas y definición de siguientes pasos",
      ],
      calendlyUrl: "https://calendly.com/cristalsarabia/consultas?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=C267C0",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-fuchsia-pink-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <RevealWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Agenda tu Consulta
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                ¿Es tu primera vez con nosotros o ya eres paciente?
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Selection + Location */}
          <div className="space-y-6">
            <RevealWrapper>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                ¿Qué tipo de consulta necesitas?
              </h2>

              <div className="space-y-3 mb-6">
                {consultaTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedType === type.id
                        ? "border-fuchsia-pink-500 bg-fuchsia-pink-50"
                        : "border-gray-200 bg-white hover:border-fuchsia-pink-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-1">
                          {type.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <ClockIcon className="w-3 h-3" />
                          <span>Duración: {type.duration}</span>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                          selectedType === type.id
                            ? "border-fuchsia-pink-500 bg-fuchsia-pink-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedType === type.id && (
                          <CheckCircleIcon className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* What's Included */}
              {selectedType && (
                <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Esta consulta incluye:
                  </h3>
                  <ul className="space-y-2">
                    {consultaTypes
                      .find((t) => t.id === selectedType)
                      ?.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-fuchsia-pink-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </RevealWrapper>

            {/* Location Section */}
            <RevealWrapper>
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-fuchsia-pink-100 rounded-full flex items-center justify-center">
                      <MapPinIcon className="w-5 h-5 text-fuchsia-pink-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Ubicación
                    </h3>
                    <p className="text-sm text-gray-700 mb-1">
                      Torres Médicas Angelópolis II
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      Piso 4, Consultorio 408
                      <br />
                      Puebla, Puebla
                    </p>
                    <a
                      href={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:ChIJ4dhTKFS5z4UR3fEa8TxPeGw`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-fuchsia-pink-600 hover:text-fuchsia-pink-700 font-medium"
                    >
                      Ver en Google Maps
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Right: Calendly Embed */}
          <div>
            <RevealWrapper>
              {selectedType ? (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Selecciona tu fecha y hora
                  </h2>
                  {scriptLoaded ? (
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <div
                        key={selectedType}
                        className="calendly-inline-widget"
                        data-url={
                          consultaTypes.find((t) => t.id === selectedType)
                            ?.calendlyUrl
                        }
                        style={{ minWidth: "320px", height: "600px" }}
                      />
                    </div>
                  ) : (
                    <div className="rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50" style={{ minHeight: "600px" }}>
                      <p className="text-gray-500">Cargando calendario...</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="pt-12">
                  <div className="bg-white rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                    <CalendarIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Selecciona un tipo de consulta
                    </h3>
                    <p className="text-sm text-gray-600">
                      Elige entre primera consulta o consulta de seguimiento para
                      ver los horarios disponibles
                    </p>
                  </div>
                </div>
              )}
            </RevealWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

