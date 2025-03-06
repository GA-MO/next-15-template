import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)

export function useChangeLocale() {
  const router = useRouter()
  const pathname = usePathname()

  return (locale: typeof routing.defaultLocale) => {
    router.push({ pathname }, { locale })
  }
}
