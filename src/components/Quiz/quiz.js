'use client'
import React from "react";
import Quiz from "./quizMain";

function QuizLayout() {
    return (
        <section className="w-full px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden bg-purple-secondary-700 rounded-2xl p-8 md:p-12">
                    {/* Decorative circles */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-2 border-white/10" />
                    <div className="absolute -left-5 -bottom-5 w-24 h-24 rounded-full border-2 border-white/10" />
                    <div className="absolute right-1/4 bottom-10 w-16 h-16 rounded-full border-2 border-white/10" />
                    
                    <div className="relative z-10">
                        <p className="text-fuchsia-pink-200 font-medium tracking-wide uppercase text-xs mb-3">
                            Cuestionario de salud
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight mb-4">
                            ¿Necesitas fisioterapia pélvica?
                        </h2>
                        <p className="text-purple-secondary-100 mb-8 max-w-2xl">
                            Responde algunas preguntas para conocer si podrías beneficiarte de un tratamiento especializado.
                        </p>
                        <Quiz/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuizLayout;
