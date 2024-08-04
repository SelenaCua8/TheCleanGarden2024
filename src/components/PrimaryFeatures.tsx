'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import equipamiento from '@/images/screenshots/equipamiento.jpg'
import flexibilidad from '@/images/screenshots/flexibilidad.jpg'
import capacitaciones from '@/images/screenshots/capacitaciones.jpg'
import politicasCalidad from '@/images/screenshots/politicaCalidadAmbiente.jpg'
import logoIso from '@/images/screenshots/logoIso.jpg'
import control from '@/images/screenshots/control.jpg'

const features = [
  {
    title: 'Políticas de calidad y ambiente',
    description:
      "Las Políticas de Calidad y de Medio Ambiente fijan como objetivos prioritarios la mejora continua de productos y servicios, mediante una gestión óptima de los recursos técnicos y humanos a la vez que la protección del medio ambiente, evitando en la medida de lo posible los impactos ambientales significativos y mejorando estos aspectos de forma continuada. Estas proporcionan un marco de referencia para establecer y revisar los objetivos de la empresa.",
    image: politicasCalidad,
  },
  {
    title: 'Normas de certificación',
    description: "Normas ISO 9001:2015 y 14001:2015",
    image: logoIso,
  },
  {
    title: 'Capacitaciones',
    description:
      "Dedicamos especial atención a la formación de todo nuestro personal en lo pertinente al manejo de maquinarias, procedimientos de limpieza, uso eficiente de los recursos, medidas de seguridad y prevención de accidentes.",
    image: capacitaciones,
  },
  {
    title: 'Equipamiento',
    description:
      'Disponemos de un completo parque de vehículos y maquinaria que nos permiten ejecutar las tareas en forma eficiente y segura.',
    image: equipamiento,
  },
  {
    title: 'Control',
    description:
      'Inspeccionamos regularmente las obras para garantizar el cumplimiento de los planes de trabajo propuestos, medir la calidad del servicio percibida por el cliente e implementar acciones correctivas, en caso de necesidad.',
    image: control,
  },
  
]

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    const onMediaQueryChange = ({ matches }: { matches: boolean }) => {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-green-600 pb-20 pt-12 sm:py-20"
    >
      
      <Container className="relative px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
            ¿POR QUÉ ELEGIRNOS?
          </h2>
        </div>
        <TabGroup
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-6"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex flex-col gap-y-6 sm:gap-y-8 lg:col-span-5 lg:flex-col lg:gap-y-6">
                <TabList className="flex flex-col gap-y-6 lg:flex-col lg:gap-y-6">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-5 lg:rounded-xl lg:py-10',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-sm sm:text-base lg:text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-green-900 lg:text-white'
                              : 'text-green-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-green-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute inset-x-0 bottom-[-4rem] top-[-1rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-6 sm:mt-8 lg:mt-10 max-w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-green-900/20">
                      <Image
                        className="w-full h-auto object-cover"
                        src={feature.image}
                        alt={feature.title}
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
