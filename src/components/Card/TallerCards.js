import Image from "next/image";
import Link from "next/link";

function TallerCards({ course }) {
  const { attributes } = course
   const description = attributes.Cardtext
   const imgUrl = attributes.cover.data.attributes.url
   
  return (
    
    <section className="relative hover:shadow-lg w-full  rounded-xl flex items-center justify-center">
      <Image
            width={2000}
            height={2000}
            style={{ width: 'full', height: '400px' }}
            src={imgUrl}
            className="rounded-xl brightness-50"
            alt="chair"
      />
       
      <div className="absolute  flex flex-col   lg:w-80 xl:w-96 h-full items-center justify-between py-10">
        <div className="flex items-center justify-center flex-col h-full">
          <h2 className="xl:px-10 text-2xl font-bold  text-center text-white">
            {attributes.title}
          </h2>
          <p className="xl:px-10  text-base font-medium  text-center text-white mt-4">
             {description}
          </p>
        </div>
        <div className="flex justify-center md:w-auto w-full">
          
          <Link href='https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta' className="rounded-lg hover:bg-fuchsia-pink-700 transition duration-150 text-base font-semibold leading-none text-center text-white py-4 px-12 bg-fuchsia-pink-500 ">
            Empezar Ya
          </Link>
        </div>
      </div>
      
    </section>
    
  );
}

export default TallerCards;
