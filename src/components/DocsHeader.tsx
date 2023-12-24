'use client'

import { usePathname } from 'next/navigation'

import { navigation } from '@/lib/navigation'

export function DocsHeader({ title, date }: { title?: string; date?: string }) {
  let pathname = usePathname()
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }

  return (
    <header className="mb-9 space-y-1">
      {section && (
        <p className="font-display text-sm font-medium text-slate-600">
          {section.title}
        </p>
      )}
      {title && (
        <h1 className="font-display text-3xl tracking-tight text-slate-900  ">
          {title}
        </h1>
      )}
      {date && (
        <p className="font-display text-sm font-medium text-slate-600">
          {date}
        </p>
      )}
    </header>
  )
}
