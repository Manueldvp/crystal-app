import Link from "next/link";

export default function CookiesPolicy() {
    return (
        <div>
            <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center text-center space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 md:leading-7 lg:leading-9 text-gray-800">Política de Cookies</h1>
                        <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">Este aviso recoge las políticas que regulan el uso y la gestión de las cookies en nuestro sitio web.</p>
                    </div>
                    
                    <div className="mt-16 flex justify-center flex-col items-center w-full text-left space-y-8">
                        <div className=" flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">¿Qué son las cookies?</h3> <br/>
                            
                            <p className="text-base leading-6 text-gray-600">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, móvil, tablet, etc.) cuando visitas un sitio web. Las cookies ayudan a los sitios web a recordar información sobre tu visita, como tu idioma preferido y otras configuraciones. Esto puede facilitar tu próxima visita y hacer que el sitio web sea más útil para ti.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12 ">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">¿Cómo usamos las cookies?</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">Usamos cookies para entender cómo interactúas con nuestro sitio web, mejorar tu experiencia y personalizar el contenido que te mostramos. Por ejemplo, podemos usar cookies para recordar tus preferencias de idioma o para mostrarte contenido relevante basado en tus intereses.</p>
                            <p className="mt-6 text-base leading-6 text-gray-600">Las cookies desempeñan un papel importante. Sin ellas, el uso de la web podría ser una experiencia mucho más frustrante. Las cookies nos ayudan a mejorar nuestro sitio web y a ofrecerte un servicio mejor y más personalizado.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Tipos de cookies que utilizamos</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600"><strong>Cookies esenciales:</strong> Estas cookies son necesarias para que nuestro sitio web funcione correctamente. No recogen información personal y no puedes optar por no aceptarlas. </p>
                            <p className="mt-6 text-base leading-6 text-gray-600"><strong>Cookies de rendimiento:</strong> Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, proporcionándonos información sobre las áreas visitadas, el tiempo pasado en el sitio web, y cualquier problema encontrado, como mensajes de error. </p>
                            <p className="mt-6 text-base leading-6 text-gray-600"><strong>Cookies de funcionalidad</strong> Estas cookies nos permiten recordar tus preferencias para proporcionarte características personalizadas y servicios.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">¿Cómo puedes gestionar las cookies?</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">La mayoría de los navegadores web permiten controlar casi todas las cookies a través de la configuración del navegador. Para obtener más información sobre las cookies, incluyendo cómo ver qué cookies se han establecido y cómo gestionarlas y eliminarlas, visita www.allaboutcookies.org.</p>
                            <p className="mt-6 text-base leading-6 text-gray-600">Si no quieres que se recopile información a través del uso de cookies, hay una configuración simple en la mayoría de los navegadores que te permite rechazar automáticamente muchas cookies, o te da la opción de rechazar o aceptar la transferencia a tu dispositivo de determinadas cookies de determinados sitios web.</p>
                            <p className="mt-6 text-base leading-6 text-gray-600">Pero recuerda que si eliges rechazar las cookies, es posible que algunas secciones de nuestro sitio web no funcionen correctamente.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Cambios en nuestra Política de Cookies</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">Es posible que actualicemos nuestra Política de Cookies de vez en cuando para reflejar cambios en nuestras prácticas de recopilación y uso de datos. Si hacemos algún cambio material, te notificaremos publicando la política de cookies actualizada en nuestro sitio web, y, si es necesario, obteniendo tu consentimiento.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Contacto</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en <Link className=" text-fuchsia-pink-400 hover:text-fuchsia-pink-600" href='/contacto'>contactarnos</Link>.</p>
                            <p className="mt-6 text-base leading-6 text-gray-600">Fecha de última actualización: 20/03/2024</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}