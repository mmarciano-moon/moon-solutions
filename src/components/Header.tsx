import { navLinks, WHATSAPP_URL } from '../data'
import { WhatsAppIcon } from './Icons'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#22211e] bg-[#0c0c0c]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a className="group flex flex-col" href="#">
          <span className="font-serif text-xl font-bold tracking-[0.22em] text-brand-gold transition-colors group-hover:text-brand-gold-light md:text-2xl">
            MOON SOLUTIONS
          </span>
          <span className="-mt-0.5 text-[8.5px] tracking-[0.38em] text-[#8e877a] uppercase">
            ARCHITECTURAL SYSTEMS
          </span>
        </a>

        <nav className="hidden items-center space-x-10 text-[13px] font-medium tracking-widest text-[#c0bbb0] uppercase md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="transition-colors hover:text-brand-gold" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <a
            className="hidden items-center gap-2 text-[12px] tracking-wider text-[#a8a194] uppercase transition-colors hover:text-brand-gold lg:flex"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-500" />
            VIP Desk
          </a>
          <a
            className="flex items-center gap-1.5 rounded-sm bg-brand-gold px-5 py-2.5 text-[12px] font-semibold tracking-wider text-brand-black uppercase shadow-md transition-all duration-300 hover:bg-brand-gold-hover"
            href="#orcamento"
          >
            <span>Solicitar Orçamento</span>
            <span className="text-sm font-bold">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
