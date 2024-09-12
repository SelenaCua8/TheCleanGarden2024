import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CarouselCustomArrows } from './Carrusel';
import tomografia from '@/images/screenshots/tomografia.jpg'
import parque from '@/images/screenshots/parque1.jpg'
import parqueDeFutbol from '@/images/screenshots/parque-de-futbol.jpg'
import sistemaDeRiego from '@/images/screenshots/sistemaDeRiego.jpg';
import vivero from '@/images/screenshots/vivero1.jpg'

const FifthFeatures = () => {
  const data = [
    {
      link: 'add link here' ,
      image: parqueDeFutbol,
      comment: `Diseño y construcciones de espacios públicos únicos, como parques y áreas recreativas, para disfrutar del medio ambiente`,
    },
    {
      link: 'add link here',
      image: tomografia,
      comment: `Somos la única empresa en el país especializada en el cuidado de árboles, ofreciendo el innovador servicio de tomografía arbórea`,
    },
    {
      link: 'add link here',
      image: parque,
      comment: `Nos dedicamos al mantenimiento de espacios verdes`,
    },
    {
      link: 'add link here',
      image: sistemaDeRiego,
      comment: `Implementamos un sistema de riego eficiente y personalizado, diseñado para optimizar el uso del agua y garantizar el cuidado ideal de cada espacio verde.`,
    },
    
    {
      link: 'add link here',
      image: vivero,
      comment: `Contamos con nuestro propio vivero, lo que nos permite cultivar plantas y árboles saludables, contribuyendo al cuidado del medio ambiente y garantizando la máxima calidad en cada proyecto.`,
    },
    // ... Agrega los otros objetos aquí
  ];

  return (
    <div className="">
      <div className="p-6 container mx-auto">
        <div className="py-2">
          <h1 className="text-center text-4xl">QUÉ HACMEOS</h1>
        </div>
        <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {data.map((x, index) => (
            <article
              key={index} // Utiliza el índice como key
              className="p-6 mb-6 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
            >
              <Link
                href={x.link}
                className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
              />
              <div className="relative mb-4 rounded-2xl">
                <Image
                  width={400}
                  height={400}
                  className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                  src={x.image}
                  alt=""
                />
                <Link
                  className="flex justify-center items-center bg-green-500 bg-opacity-80 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                  href={x.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Galeria de fotos
                </Link>
              </div>
              <h3 className="font-medium text-xl leading-8">
                <Link
                  href={x.link} // Cambia el href si es necesario
                  className="block relative group-hover:text-green-500 transition-colors duration-200"
                >
                  <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthFeatures;
