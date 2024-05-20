import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-green-900 text-white hover:bg-green-700 hover:text-green-100 active:bg-green-800 active:text-green-300 focus-visible:outline-green-900',
    blue: 'bg-green-600 text-white hover:text-green-100 hover:bg-green-500 active:bg-green-800 active:text-green-100 focus-visible:outline-green-600',
    white:
      'bg-white text-green-900 hover:bg-green-50 active:bg-green-200 active:text-green-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-green-200 text-green-700 hover:text-green-900 hover:ring-green-300 active:bg-green-100 active:text-green-600 focus-visible:outline-green-600 focus-visible:ring-green-300',
    white:
      'ring-green-700 text-white hover:ring-green-500 active:ring-green-700 active:text-green-400 focus-visible:outline-white',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
