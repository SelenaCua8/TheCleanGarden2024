import Image from 'next/image';
import construcciones from '../images/screenshots/parque-de-futbol.jpg';
import tomografia from '../images/screenshots/tomografia.jpg'
import podaDeArboles from '@/images/screenshots/poda-de-arboles.jpg';
import sistemaDeRiego from '@/images/screenshots/sistemaDeRiego.jpg'
import obraPublica from '../images/screenshots/construccion1.jpg'
import vivero from '../images/screenshots/vivero1.jpg'


const posts = [
  {
    id: 1,
    title: 'Construcciones de parques',
    href: '#',
    description:
      'Nos especializamos en paisajismo y construcción de parques, ofreciendo soluciones integrales que van más allá de la creación de simples espacios verdes.',
    imageUrl: construcciones,
    category: { title: '', href: '#' },
  },
  {
    id: 2,
    title: 'Tomografía de árboles',
    href: '#',
    description:
      'La tomografía de ároles es una avanzada técnica de diagnóstico que nos permite analizar el estado interno de los árboles de manera detallada y no invasiva.',
    imageUrl: tomografia,
    category: { title: '', href: '#' },
  },
  {
    id: 3,
    title: 'Mantenimiento de espacios verdes',
    href: '#',
    description:
      'Nos especializamos en el mantenimiento integral de áreas urbanas, brindando servicios que realzan la belleza y funcionalidad de parques.',
    imageUrl: podaDeArboles,
    category: { title: '', href: '#' },
  },
  {
    id: 4,
    title: 'Sistema de Riego',
    href: '#',
    description: 'Contamos con un exclusivo sistema de riego, líder en Argentina, que garantiza un cuidado eficiente y sostenible de cada proyecto.',
    imageUrl: sistemaDeRiego,
    category: { title: '', href: '#' },
  },
  {
    id: 5,
    title: 'Obra pública',
    href: '#',
    description:
      'La tomografía de ároles es una avanzada técnica de diagnóstico que nos permite analizar el estado interno de los árboles de manera detallada y no invasiva.',
    imageUrl: obraPublica,
    category: { title: '', href: '#' },
  },
  {
    id: 6,
    title: 'Vivero propio',
    href: '#',
    description:
      'Nuestro vivero garantiza plantas de la más alta calidad, gracias a un equipo experto y un entorno propicio para su desarrollo.',
    imageUrl: vivero,
    category: { title: '', href: '#' },
  },
];

export default function ThirdFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">¿QUÉ HACEMOS?</h2>
          
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  alt=""
                  src={post.imageUrl}
                  layout="responsive"
                  width={720}
                  height={405}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-green-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-green-700 group-hover:text-green-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-green-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-green-700">
                      {/* Aquí puedes agregar más contenido */}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}