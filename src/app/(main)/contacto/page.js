"use client";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import { useState } from "react";
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Dirección",
      content: "Torres Médicas Angelópolis II, Piso 4, Consultorio 408",
      subcontent: "Puebla, Puebla",
    },
    {
      icon: PhoneIcon,
      title: "Teléfono",
      content: "+52 222 423 7337",
      link: "tel:+522224237337",
    },
    {
      icon: EnvelopeIcon,
      title: "Correo Electrónico",
      content: "info@cristalsarabia.com",
      link: "mailto:info@cristalsarabia.com",
    },
    {
      icon: ClockIcon,
      title: "Horario de Atención",
      content: "Lunes a Viernes",
      subcontent: "9:00 AM - 7:00 PM",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-secondary-700 via-purple-secondary-800 to-fuchsia-pink-600 py-8">
        <div className="absolute inset-0 bg-purple-secondary-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Contacto
              </h1>
              <p className="text-base md:text-lg text-purple-secondary-100">
                ¿Tienes preguntas o quieres agendar una consulta? Estamos aquí
                para acompañarte en tu proceso de salud pélvica.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <RevealWrapper>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Información de contacto
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Puedes contactarnos a través de cualquiera de estos medios.
                  Estamos aquí para responder tus dudas y acompañarte en tu
                  proceso.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-secondary-50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-fuchsia-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-fuchsia-pink-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-fuchsia-pink-600 mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-800 hover:text-fuchsia-pink-600 transition-colors block"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-800">{info.content}</p>
                          )}
                          {info.subcontent && (
                            <p className="text-gray-600 text-sm mt-1">
                              {info.subcontent}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-purple-secondary-50 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-purple-secondary-700">
                      ¿Prefieres agendar directamente?
                    </strong>{" "}
                    Puedes usar nuestro sistema de citas en línea o contactarnos
                    por WhatsApp.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="/agendar-cita"
                      className="inline-flex items-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      Agendar cita
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20agendar%20una%20consulta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-fuchsia-pink-500 text-fuchsia-pink-600 hover:bg-fuchsia-pink-50 font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      WhatsApp
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* Contact Form */}
            <RevealWrapper>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-gray-600 mb-6">
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible.
                </p>

                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-green-800 font-medium">
                        ¡Mensaje enviado exitosamente! Te responderemos pronto.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-pink-100 ${
                        errors.name
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 focus:border-fuchsia-pink-500"
                      }`}
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-pink-100 ${
                        errors.email
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 focus:border-fuchsia-pink-500"
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-fuchsia-pink-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-pink-100 transition-all"
                      placeholder="+52 222 123 4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-pink-100 resize-none ${
                        errors.message
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 focus:border-fuchsia-pink-500"
                      }`}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestra ubicación
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visítanos en nuestras instalaciones. Estamos ubicados en Torres
                Médicas Angelópolis II, en el corazón de Puebla.
              </p>
            </div>

            <div className="relative w-full max-w-6xl mx-auto aspect-[1080/520] rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:ChIJ4dhTKFS5z4UR3fEa8TxPeGw`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Cristal Sarabia - Fisioterapia Pélvica"
              ></iframe>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
