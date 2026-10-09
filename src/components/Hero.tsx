import { metrics } from '../data'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCRUnZk0dYkvLJVGPJCFeMWYqWeSARhLi3E1Co0-4XUt7zs2bxSIkMpgC9yg7oNP7dCgah5a-D4AE8auT8Qfn--ltGMJBdBDQDQPDC9dwp7rB7c2YYVTT6OX-NiCEpe_7dgfH6jjsZTih5jqcGFnGfNVrMnI5sK0qX-I2Z8VS4lPFuN9gmDyr9moGqSBV0-NoiUzmFVipRbwfWEHiBF9GKoQ3icrYgq35bQEulpzsFI4yE_56h7hU7c'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          alt="Fachada residencial moderna de alto padrão com grandes vãos envidraçados iluminados"
          className="h-full w-full scale-105 transform object-cover object-center duration-1000"
          src={HERO_IMAGE}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0b0b]/80 via-[#0b0b0b]/60 to-[#0b0b0b]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-brand-gold/60 bg-[#161410]/70 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-gold uppercase md:text-[11px]">
            Alta Engenharia de Esquadrias &amp; Fachadas
          </span>
        </div>

        <h1 className="font-luxury mb-6 max-w-4xl text-4xl leading-[1.08] font-normal tracking-tight text-white md:text-6xl lg:text-7xl">
          Arquitetura que se <br className="hidden sm:inline" />
          revela nos detalhes.
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-relaxed font-light text-[#bfb9ad] md:text-lg">
          Soluções em alumínio, esquadrias e acabamentos de alto padrão, desenvolvidas para valorizar
          a arquitetura e transformar projetos em experiências únicas.
        </p>

        <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="flex w-full items-center justify-center gap-2 bg-brand-gold px-8 py-3.5 text-xs font-semibold tracking-widest text-[#0b0b0b] uppercase transition-all duration-300 hover:bg-brand-gold-hover sm:w-auto"
            href="#orcamento"
          >
            <span>Solicitar Orçamento</span>
            <span className="text-sm">↗</span>
          </a>
          <a
            className="flex w-full items-center justify-center gap-2 border border-[#3e382d] bg-[#151412]/60 px-8 py-3.5 text-xs font-medium tracking-widest text-[#d6d0c4] uppercase transition-all duration-300 hover:border-brand-gold hover:bg-[#1a1815] hover:text-white sm:w-auto"
            href="#solucoes"
          >
            <span>Explorar Soluções</span>
            <span className="text-sm">↗</span>
          </a>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-8 border-t border-[#262420] pt-8 sm:grid-cols-3 sm:gap-12">
          {metrics.map((metric) => (
            <div key={metric.value} className="flex flex-col items-center text-center">
              <span className="font-luxury text-2xl font-semibold text-brand-gold md:text-3xl">
                {metric.value}
              </span>
              <span className="mt-1 text-xs tracking-wider text-[#958e80] uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
