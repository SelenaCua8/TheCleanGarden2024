import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: '¿Cuáles son los servicios que ofrece su empresa?',
      answer: 'Nos dedicamos a una amplia rama de servicios de espacios verdes, entre ellos se encuentran: tomografía de árboles; poda, transplante y extracción de ejemplares; diseño y planificación del paisaje; construcción y mantenimiento de fuentes, cascadas y juegos de agua; mantenimiento de espacios verdes; diseño y construcción de sistema de riego; obra pública'
    },
    {
      question: '¿Cuál es la ubicación de su empresa?',
      answer: 'Estamos ubicados en Buenos Aires y en Zárate',
    },
    {
      question: '¿Cuáles son las áreas de servicio específicas de su empresa?',
      answer:
        'Nuestra empresa brinda servicios de mantenimiento de espacios verdes, construcciones paisajísticas y más en toda la región metropolitana de la capital. Además, gracias a nuestro vivero ubicado en Zarate, tenemos la capacidad de ofrecer servicios especializados y suministro de plantas a clientes en áreas circundantes y más allá. Nos enorgullece extender nuestros servicios a diversas comunidades.',
    },
  ],
  [
    {
      question: '¿Cuáles son sus métodos y enfoques para el diseño paisajístico?',
      answer:
        'En nuestra empresa, adoptamos un enfoque personalizado para el diseño paisajístico. Nuestro equipo de expertos colabora estrechamente con cada cliente, comprendiendo sus preferencias y visiones. Utilizamos técnicas innovadoras en construcciones paisajísticas, integrando sistemas de riego eficientes y seleccionando cuidadosamente plantas que se adapten al clima local. Nuestra prioridad es transformar espacios verdes en entornos armoniosos y sostenibles que superen las expectativas de nuestros clientes.',
    },
    {
      question: 'La forma de trabajo de la empresa ¿en qué se centra?',
    answer:
      'La forma de trabajo de nuestra empresa se centra en brindar soluciones integrales en construcción, espacios verdes y paisajismo, respaldadas por un compromiso continuo con el medio ambiente y la satisfacción del cliente. Nuestro enfoque se basa en los siguientes principios:',
    principles: [
      'Sostenibilidad Ambiental.',
      'Diseño Paisajístico.',
      'Vivero Propio.',
      'Colaboración con Clientes.',
      'Calidad y seguridad.',
      'Innovación y Mejora Continua.'
    ],
    summary:
      'En resumen, nuestra forma de trabajo se basa en la excelencia, la sostenibilidad y la satisfacción del cliente, con un enfoque especial en la creación de entornos que armonicen con la naturaleza y contribuyan positivamente al medio ambiente.'
  },
    {
      question:
        'I found other companies called TaxPal, are you sure you can use this name?',
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
  id="faq-title"
  className="font-display text-3xl tracking-tight text-white sm:text-4xl"
>
  Preguntas frecuentes
</h2>
<p className="mt-4 text-lg tracking-tight text-white">
  Si no puede encontrar lo que busca, envíe un correo electrónico a nuestro equipo de soporte y, alguien se comunicará con usted.
</p>
        </div>
        <ul
  role="list"
  className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
>
  {faqs.map((column, columnIndex) => (
    <li key={columnIndex}>
      <ul role="list" className="flex flex-col gap-y-8">
        {column.map((faq, faqIndex) => (
          <li key={faqIndex}>
            <h3 className="font-display text-lg leading-7 text-white">
              {faq.question}
            </h3>
            <p className="mt-4 text-sm text-white">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </li>
  ))}
</ul>
      </Container>
    </section>
  )
}
