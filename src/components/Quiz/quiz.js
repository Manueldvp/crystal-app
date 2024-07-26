'use client'
import React from "react";
import Quiz from "./quizMain";

function QuizLayout() {
    return (
        
                <div className="xl:w-2/3 lg:w-full sm:w-full p-4 flex justify-center">
                    <div className="bg-gradient-to-r rounded-lg from-pink-secondary-600 to-fuchsia-pink-400 md:py-8 md:px-8 px-8 py-4 xl:px-12 xl:py-16">
                        <div>
                            <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                    <div>
                                        <h1 role="heading" className="text-xl md:text-xl lg:text-4xl xl:text-5xl lg:w-full text-white font-black leading-6 mb-10 md:text-left text-center">¡Realiza un diagnóstico breve con este cuestionario!</h1>
                                    </div>
                    
                                    <Quiz/>
                                </div>
                                <div className="md:w-1/3 w-2/3">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png" alt="cartoon avatars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          

    );
}

export default QuizLayout;
