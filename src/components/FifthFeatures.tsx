import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FeaturedImageGallery } from './Galleries';
import tomografia from '@/images/screenshots/tomografia.jpg'
import parque from '@/images/screenshots/parque1.jpg'
import parqueDeFutbol from '@/images/screenshots/parque-de-futbol.jpg'
import sistemaDeRiego from '@/images/screenshots/sistemaDeRiego.jpg';
import vivero from '@/images/screenshots/vivero1.jpg'


const FifthFeatures = () => {
  const data = [
    {
      galleryId: 1,
      image: parqueDeFutbol,
      comment: `Diseño y construcciones de espacios públicos únicos, como parques y áreas recreativas, para disfrutar del medio ambiente`,
    },
    {
      galleryId: 2,
      image: tomografia,
      comment: `Somos la única empresa en el país especializada en el cuidado de árboles, ofreciendo el innovador servicio de tomografía arbórea`,
    },
    {
      galleryId: 3,
      image: parque,
      comment: `Nos dedicamos al mantenimiento de espacios verdes`,
    },
    {
      galleryId: 4,
      image: sistemaDeRiego,
      comment: `Implementamos un sistema de riego eficiente y personalizado, diseñado para optimizar el uso del agua y garantizar el cuidado ideal de cada espacio verde.`,
    },
    {
      galleryId: 5,
      image: vivero,
      comment: `Contamos con nuestro propio vivero, lo que nos permite cultivar plantas y árboles saludables, contribuyendo al cuidado del medio ambiente y garantizando la máxima calidad en cada proyecto.`,
    },
  ];

  return (
    <div className="">
      <div className="p-6 container mx-auto">
        <div className="py-2">
          <h1 className="text-center text-4xl">QUÉ HACEMOS</h1>
        </div>
        <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {data.map((x) => (
            <article
              key={x.galleryId}
              className="p-6 mb-6 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
            >
              <div className="relative mb-4 rounded-2xl">
                <Image
                  width={400}
                  height={400}
                  className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                  src={x.image}
                  alt=""
                />
                <div className="flex justify-center items-center bg-green-500 bg-opacity-80 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100">
                  <FeaturedImageGallery galleryId={x.galleryId} />
                </div>
              </div>
              <h3 className="font-medium text-xl leading-8">
                <span dangerouslySetInnerHTML={{ __html: x.comment }} />
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthFeatures;