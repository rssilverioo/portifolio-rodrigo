import { useRouter } from 'next/router'
import Link from 'next/link'

export type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const { asPath } = useRouter()

  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground ${asPath === href ? 'text-foreground' : ''}`}
    >
      {children}
    </Link>
  )
}
