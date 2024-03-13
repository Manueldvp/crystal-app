
export default function AvisoLegal() {
    return (
        <div>
            <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center text-center space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 md:leading-7 lg:leading-9 text-gray-800">Aviso Legal y de Privacidad</h1>
                        <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">Este aviso legal recoge las condiciones generales que regulan el acceso y el uso de la página web <a href="/" className=" cursor-pointer text-purple-secondary-500 hover:text-gray-600">cristalsarabia.com</a></p>
                    </div>
                    
                    <div className="mt-16 flex justify-center flex-col items-center w-full text-left space-y-8">
                        <div className=" flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Identificación del Responsable:</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">Nombre del Responsable: [Tu Nombre Completo] </p>
                            <p className="mt-6 text-base leading-6 text-gray-600">Domicilio: [Tu Dirección en México] </p>
                            <p className="mt-6 text-base leading-6 text-gray-600">Contacto: [Tu Email] / [Tu Teléfono]</p>
                            <p className="mt-6 text-base leading-6 text-gray-600">RFC: [Tu Registro Federal de Contribuyentes]</p> <br/>
                            <p className="text-base leading-6 text-gray-600">Objeto: El presente aviso legal regula el uso del sitio web [URL de tu sitio web], del cual es titular [Tu Nombre Completo]. La navegación por el sitio web del titular atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12 ">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Propiedad Intelectual e Industrial:</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">Los contenidos de este sitio web, incluyendo entre otros textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a [Tu Nombre Completo], sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Protección de Datos Personales:</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">[Tu Nombre Completo] se compromete a garantizar la privacidad de los datos personales recabados a través de los formularios ubicados en la página web y a tratarlos con la confidencialidad correspondiente. La finalidad de la recogida y tratamiento de los datos personales, que se solicitan en [URL de tu sitio web], incluye, entre otros, la atención de solicitudes de información, suscriptores, y clientes, sin que en ningún caso sean utilizados para finalidades distintas.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Limitaciones o Exclusiones de Responsabilidad:</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">[Tu Nombre Completo] no se responsabiliza de los daños y perjuicios de cualquier naturaleza que pudieran surgir por la falta de disponibilidad o continuidad del funcionamiento del sitio web y de los servicios ofrecidos en el mismo, así como de los errores en el acceso a distintas páginas web o aquellos desde los que, en su caso, se presten dichos servicios.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                        <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12">
                            <h3 className="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800">Legislación y Jurisdicción Aplicable:</h3>
                            <p className="mt-6 text-base leading-6 text-gray-600">El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley mexicana. Para la resolución de cualquier conflicto que pudiera derivarse del acceso al sitio web, [Tu Nombre Completo] y el usuario acuerdan someterse expresamente a los juzgados y tribunales de la ciudad de [Tu Ciudad], renunciando a cualquier otro fuero que pudiera corresponderles.</p>
                        </div>
                        <hr className="border border-gray-100 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
