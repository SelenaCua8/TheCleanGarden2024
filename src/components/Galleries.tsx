"use client";
import React from "react";
import construccion from '@/images/screenshots/construccionDeParque.jpg';

import construccionDos from '@/images/screenshots/construccionUno.jpg';
import construccionTres from '@/images/screenshots/construccionDos.jpg';
import construccionCuatro from '@/images/screenshots/construccionTres.jpg';
import sillasYmesas from '@/images/screenshots/sillas-y-mesas.jpg';
import tomografia from '@/images/screenshots/tomografia.jpg';
import tomografiaCinco from '@/images/screenshots/tomografiaCinco.jpg';
import tomografiaSeis from '@/images/screenshots/tomografiaSeis.jpg';
import tomografiaSiete from '@/images/screenshots/tomografiaSiete.jpg';
import parque from '@/images/screenshots/parqueUno.jpg';
import parqueUno from '@/images/screenshots/parqueDos.jpg';
import parqueDos from '@/images/screenshots/parqueTres.jpg';
import parqueTres from '@/images/screenshots/parqueCuatro.jpg';
import parqueCuatro from '@/images/screenshots/parqueCinco.jpg';

// Define el tipo de las galerías
type Gallery = {
  imgelink: string;
};

// Define el tipo de las propiedades del componente
interface FeaturedImageGalleryProps {
  galleryId: number;
}

// Galerías de imágenes
const galleries: { [key: number]: Gallery[] } = {
  1: [
    { imgelink: construccion.src },
    { imgelink: sillasYmesas.src },
    
    { imgelink: construccionDos.src },
    { imgelink: construccionTres.src },
    { imgelink: construccionCuatro.src },
  ],
  2: [
    { imgelink: tomografia.src },
    { imgelink: tomografiaCinco.src },
    { imgelink: tomografiaSeis.src },
    { imgelink: tomografiaSiete.src },
  ],
  3: [
    { imgelink: parque.src },
    { imgelink: parqueUno.src },
    { imgelink: parqueDos.src },
    { imgelink: parqueTres.src },
    { imgelink: parqueCuatro.src },
  ],
  4: [],
  5: [],
};

export function FeaturedImageGallery({ galleryId }: FeaturedImageGalleryProps) {
  // Verificamos si la galería existe y si tiene al menos una imagen
  const gallery = galleries[galleryId] || [];
  const [active, setActive] = React.useState<string>(gallery.length > 0 ? gallery[0].imgelink : "");

  if (gallery.length === 0) {
    return <p>Galería no encontrada o sin imágenes.</p>;
  }

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Active gallery image"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {gallery.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
