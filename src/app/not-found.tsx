import Link from 'next/link'
import { Button } from '@/components/Button'
import { SlimLayout } from '@/components/SlimLayout'
import Image from 'next/image' // Importa el componente Image
import theCleanGardenImage from '@/images/logos/theCleanGarden.jpg';

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          {/* Reemplaza el componente Logo con una imagen */}
          <Image src={theCleanGardenImage} alt="Descripción de la imagen" width={120} height={80} />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-green-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-green-900">
        Pagina no encontrada
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Lo siento, la página está en mantenimiento.
      </p>
      <Button href="/" className="mt-10">
        Vuelve para atrás
      </Button>
    </SlimLayout>
  )
}