import { solutions, type Solution } from '../data'

function SolutionArticle({ solution, imageFirst }: { solution: Solution; imageFirst: boolean }) {
  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div
        className={`order-2 flex flex-col justify-center lg:col-span-5 ${imageFirst ? '' : 'lg:order-1'}`}
      >
        <span className="mb-2 text-[10px] font-medium tracking-[0.25em] text-brand-gold uppercase">
          {solution.tag}
        </span>
        <h3 className="font-luxury mb-4 text-2xl font-semibold text-white md:text-3xl">
          {solution.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed font-light text-[#a8a192]">
          {solution.description}
        </p>
        <div className="mb-6 border-l-2 border-brand-gold bg-[#141312] p-4">
          <h4 className="mb-1 text-xs font-semibold tracking-wider text-brand-gold uppercase">
            Benefício Arquitetônico:
          </h4>
          <p className="text-xs leading-relaxed text-[#8f887b]">{solution.benefit}</p>
        </div>
        <ul className="mb-8 space-y-2 text-xs text-[#b8b1a4]">
          {solution.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-brand-gold uppercase transition-colors hover:text-white"
          href="#orcamento"
        >
          <span>Conhecer Detalhes</span>
          <span>↗</span>
        </a>
      </div>

      <div className={`order-1 lg:col-span-7 ${imageFirst ? '' : 'lg:order-2'}`}>
        <div className="relative aspect-[16/10] overflow-hidden border border-[#2b2720] bg-[#181715]">
          <img
            alt={solution.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            src={solution.image}
            loading="lazy"
          />
          <span className="absolute bottom-3 left-4 bg-black/40 px-2 py-1 text-[9px] tracking-widest text-white/50 uppercase backdrop-blur-xs">
            {solution.caption}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Solutions() {
  return (
    <>
      <section className="border-t border-[#1e1d1b] px-6 pt-24 pb-12" id="solucoes">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-b border-[#211f1c] pb-8 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block text-[11px] font-semibold tracking-[0.25em] text-brand-gold uppercase">
              Catálogo Exclusivo
            </span>
            <h2 className="font-luxury text-3xl font-normal text-brand-ivory md:text-5xl">
              Sistemas &amp; Soluções de Engenharia
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed font-light text-[#948d80]">
            Desenvolvido sob medida com rigor técnico, tecnologia oculta e estética minimalista para
            integrar interiores e exteriores com fluidez milimétrica.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-28">
        {solutions.map((solution, index) => (
          <SolutionArticle key={solution.title} solution={solution} imageFirst={index % 2 === 1} />
        ))}
      </section>
    </>
  )
}
