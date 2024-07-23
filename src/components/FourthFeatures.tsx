import Image from 'next/image';
import sillasMesas from '@/images/screenshots/sillas-y-mesas.jpg';
import jardinero from '@/images/screenshots/jardinero.jpg';
import poda from '@/images/screenshots/poda-de-arboles.jpg';
import parqueDeFutbol from '@/images/screenshots/parque-de-futbol.jpg';

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl"
            id='aboutus'>¿QUIÉNES SOMOS?</h2>
            <p className="mt-6 text-xl leading-8 text-green-600">
              Somos una empresa con más de 20 años de experiencia orientados a dar soluciones integrales para espacios verdes de mediana y gran escala en espacios públicos, empresas o particulares.
            </p>
            <p className="mt-6 text-base leading-7 text-green-600">
              Los espacios verdes constituyen uno de los principales articuladores de la vida social. Son lugares de encuentro, de integración, promueven la diversidad cultural generan valor simbólico, identidad y pertenencia. Asimismo, contribuyen en la regulación hídrica y en la reducción del impacto de la ciudad o insdustria construida sobre el medio ambiente. Y ofrecen un ecosistema apropiado para la conservación de la biodiversidad.
            </p>
            <div className="mt-10 flex">
              {/* Puedes agregar más contenido aquí si es necesario */}
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={poda}
                alt="Imagen descriptiva"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={sillasMesas}
                  alt=""
                  width={768}
                  height={604}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={jardinero}
                  alt=""
                  width={1152}
                  height={842}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={parqueDeFutbol}
                  alt=""
                  width={768}
                  height={604}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
