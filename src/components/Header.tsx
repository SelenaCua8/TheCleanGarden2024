'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'; // Asegúrate de importar Image de la manera correcta

import theCleanGardenImage from '@/images/logos/theCleanGarden.jpg';

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 overflow-visible stroke-green-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <Transition>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverOverlay className="fixed inset-0 bg-green-500/50" />
        </TransitionChild>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-green p-4 text-lg tracking-tight text-green-600 shadow-xl ring-1 ring-green-500/90">
            <MobileNavLink href="/PrimaryFeatures">Menu</MobileNavLink>
            <MobileNavLink href="/FourthFeatures">Nosotros</MobileNavLink>
            <MobileNavLink href="/Faqs">Preguntas frecuentes</MobileNavLink>
            <hr className="m-2 border-green-500/70" />
            <MobileNavLink href="/login">Contacto</MobileNavLink>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
          <Link href="#" aria-label="Home">
          <Image src={theCleanGardenImage} alt="Descripción de la imagen" width={120} height={80} />
    </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#testimonials">Menu</NavLink>
              <NavLink href="#features">Nosotros</NavLink>
              <NavLink href="#pricing">Preguntas frecuentes</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
           
            <Button href="/register" className='bg-green-700'>
              <span>
                Contacto
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
