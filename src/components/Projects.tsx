import { projects } from '../data'

export default function Projects() {
  return (
    <section className="border-t border-[#1e1d1b] px-6 py-24" id="obras">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block text-[11px] font-semibold tracking-[0.25em] text-brand-gold uppercase">
              Portfólio de Projetos
            </span>
            <h2 className="font-luxury text-3xl font-normal text-brand-ivory md:text-5xl">
              Obras Selecionadas
            </h2>
          </div>
          <p className="max-w-sm text-xs font-light text-[#948d80] md:text-sm">
            Soluções instaladas em condomínios de alto padrão como Fazenda Boa Vista, Quinta da
            Baroneza, Jardins e orlas do litoral.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden border border-[#24221f] bg-[#141312]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 border border-brand-gold/30 bg-black/60 px-2.5 py-1 text-[9px] tracking-wider text-brand-gold uppercase backdrop-blur-xs">
                  {project.location}
                </span>
              </div>
              <div className="flex grow flex-col p-6">
                <span className="mb-1 text-[10px] tracking-widest text-[#8a8376] uppercase">
                  {project.category}
                </span>
                <h3 className="font-luxury mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-6 grow text-xs leading-relaxed font-light text-[#958e82]">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#302c25] bg-[#1d1b19] px-2.5 py-1 text-[10px] text-[#b5ad9e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-[#22201d] pt-4 text-xs text-brand-gold">
                  <span className="font-light text-[#888173]">Concluído em {project.year}</span>
                  <a
                    className="flex items-center gap-1 font-medium transition-colors hover:text-white"
                    href="#orcamento"
                  >
                    Ver Detalhes ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
