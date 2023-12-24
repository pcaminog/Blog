import { Logo, Logomark } from '@/components/Logo'
import Link from 'next/link'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
        <div className="mx-auto flex items-center gap-10 text-gray-900">
          <Logo className="flex-none" />

          <Link
            href={'https://www.mon1tor.com/privacy'}
            className="text-sm text-gray-500 underline"
          >
            Privacy Policy{' '}
          </Link>
          <Link
            href={'https://www.mon1tor.com/terms'}
            className=" text-sm text-gray-500 underline"
          >
            Terms{' '}
          </Link>

          <p className="text-sm text-gray-500">Made with ❤️ from Texas 🇺🇸 </p>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
