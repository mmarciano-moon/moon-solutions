import { footerFinishes, footerSystems } from '../data'

function FooterColumn({ title, items, href, className }: { title: string; items: string[]; href: string; className: string }) {
  return (
    <div className={className}>
      <span className="mb-4 block text-[11px] font-semibold tracking-[0.2em] text-brand-ivory uppercase">
        {title}
      </span>
      <ul className="space-y-2.5 text-xs font-light">
        {items.map((item) => (
          <li key={item}>
            <a className="transition-colors hover:text-brand-gold" href={href}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1917] bg-[#090909] px-6 pt-16 pb-12 text-[#878073]" id="empresa">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b border-[#1b1a18] pb-12 md:grid-cols-12">
        <div className="flex flex-col md:col-span-4">
          <a className="mb-4" href="#">
            <span className="font-serif text-xl font-bold tracking-[0.2em] text-brand-gold">
              MOON SOLUTIONS
            </span>
            <span className="block text-[8px] tracking-[0.38em] text-[#6b665c] uppercase">
              ARCHITECTURAL SYSTEMS
            </span>
          </a>
          <p className="max-w-sm text-xs leading-relaxed font-light text-[#7a7469]">
            Engenharia de precisão para esquadrias de grande porte, fechadas bioclimáticas e
            acabamentos nobres. Desenvolvida para materializar a visão autoral dos principais
            escritórios de arquitetura contemporânea do país.
          </p>
        </div>

        <FooterColumn className="md:col-span-3" title="Sistemas" items={footerSystems} href="#solucoes" />
        <FooterColumn className="md:col-span-2" title="Acabamentos Nobres" items={footerFinishes} href="#acabamentos" />

        <div className="md:col-span-3">
          <span className="mb-4 block text-[11px] font-semibold tracking-[0.2em] text-brand-ivory uppercase">
            Contato Exclusivo
          </span>
          <p className="mb-1 text-xs font-light text-[#7e786d]">
            São Paulo • Alphaville • Vale do Paraíba • Litoral Paulista
          </p>
          <p className="mt-2 text-xs font-medium text-brand-gold">vip@moonsolutions.com.br</p>
          <p className="mt-1 text-xs font-medium text-brand-ivory">+55 (11) 99999-9999</p>
          <div className="mt-4">
            <a
              className="inline-block border border-brand-gold/40 px-4 py-2 text-[10px] font-semibold tracking-widest text-brand-gold uppercase transition-colors hover:border-brand-gold"
              href="#orcamento"
            >
              Área do Especificador
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between pt-8 text-[11px] text-[#5e584f] sm:flex-row">
        <p>© {new Date().getFullYear()} Moon Solutions Architectural Systems. Todos os direitos reservados.</p>
        <div className="mt-4 flex space-x-6 sm:mt-0">
          <a className="transition-colors hover:text-brand-gold" href="#">
            Políticas de Privacidade &amp; LGPD
          </a>
          <a className="transition-colors hover:text-brand-gold" href="#">
            Termos Técnicos de Garantia
          </a>
        </div>
      </div>
    </footer>
  )
}
