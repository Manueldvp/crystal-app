const Fisioterapia = () => {
  return (
    <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
      <div className="xl:w-1/2 w-11/12">
        <h1
          role="heading"
          tabIndex={0}
          className="text-6xl font-bold 2xl:leading-10 mb-10 leading-0 text-center text-gray-800"
        >
          Fisioterapia Pélvica
        </h1>
        <h2
          role="contentinfo"
          tabIndex={0}
          className="text-base leading-normal mb-4 text-center text-gray-600 mt-5"
        >
          La fisioterapia pélvica es una especialidad de la fisioterapia que se centra en tratar y prevenir diversas condiciones relacionadas con el suelo pélvico. El suelo pélvico es un conjunto de músculos, ligamentos y tejidos que proporcionan soporte a los órganos pélvicos, incluyendo la vejiga, el intestino y el útero en las mujeres, y la próstata en los hombres.
        </h2>
        <h2
          role="contentinfo"
          tabIndex={0}
          className="text-base leading-normal mb-4 text-center text-gray-600 mt-5"
        >
          Los fisioterapeutas pélvicos utilizan una variedad de técnicas para tratar afecciones como la incontinencia urinaria y fecal, el dolor pélvico crónico, la disfunción sexual y las complicaciones del embarazo y el parto. Estas técnicas pueden incluir ejercicios de fortalecimiento del suelo pélvico, técnicas de relajación muscular, biofeedback y estimulación eléctrica.
        </h2>
        <h2
          role="contentinfo"
          tabIndex={0}
          className="text-base leading-normal mb-4 text-center text-gray-600 mt-5"
        >
          Además, los fisioterapeutas pélvicos pueden proporcionar educación y asesoramiento sobre cambios en el estilo de vida que pueden ayudar a mejorar los síntomas y prevenir futuros problemas. Esto puede incluir consejos sobre la dieta y la hidratación, la postura y la mecánica corporal, y la gestión del estrés.
        </h2>
        <h2
          role="contentinfo"
          tabIndex={0}
          className="text-base leading-normal mb-4 text-center text-gray-600 mt-5"
        >
          La fisioterapia pélvica puede ser beneficiosa para una amplia gama de personas, incluyendo mujeres que han tenido hijos, hombres que han tenido cirugía de próstata, personas que sufren de estreñimiento crónico, y aquellos que tienen condiciones crónicas como la fibromialgia o el síndrome del intestino irritable.
        </h2>
        <h2
          role="contentinfo"
          tabIndex={0}
          className="text-base leading-normal mb-4 text-center text-gray-600 mt-5"
        >
          En resumen, la fisioterapia pélvica es una opción de tratamiento valiosa y efectiva para una variedad de condiciones del suelo pélvico. Si estás experimentando síntomas que afectan tu calidad de vida, te animamos a que busques la ayuda de un fisioterapeuta pélvico. ¡No tienes que vivir con dolor o incomodidad!
        </h2>
      </div>
      <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4">
        <div className="mt-24">
          <div className="flex items-end ">
            <img
              tabIndex={0}
              src="/25.jpg"
              alt="girl with blue background"
              className="w-20 h-20 rounded-lg mr-6"
            />
            <img
              tabIndex={0}
              src="/29.jpg"
              alt="guy winking"
              className="w-48 h-36 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-end my-6">
            <img
              tabIndex={0}
              src="/25.jpg"
              alt="guy smiling"
              className="w-48 h-48 rounded-lg"
            />  
          </div>
          <div className="flex items-start">
            <img
              tabIndex={0}
              src="/27.jpg"
              alt="girl with bluw background"
              className="w-48 h-48 rounded-lg"
            />
            <img
              tabIndex={0}
              src="/29.jpg"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
            />
          </div>
        </div>
        <div className="ml-6 mt-20">
          <img
            tabIndex={0}
            src="/29.jpg"
            className="w-72 h-80 rounded-lg"
            alt="guy with sunglasses"
          />
          <div className="flex items-start mt-6">
            <img
              tabIndex={0}
              src="/29.jpg"
              alt="girl  laughing"
              className="w-48 h-48 rounded-lg"
            />
            <img
              tabIndex={0}
              src="/29.jpg"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Fisioterapia;
