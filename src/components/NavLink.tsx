import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-green-700 hover:bg-green-100 hover:text-green-900"

    >
      {children}
    </Link>
  )
}
