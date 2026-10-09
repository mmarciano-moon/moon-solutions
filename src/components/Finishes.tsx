import { finishes } from '../data'

export default function Finishes() {
  return (
    <section className="border-t border-[#1e1d1b] bg-[#0f0e0d] px-6 py-24" id="acabamentos">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 block text-[11px] font-semibold tracking-[0.25em] text-brand-gold uppercase">
            Nossa Paleta Exclusiva
          </span>
          <h2 className="font-luxury mb-4 text-3xl font-normal text-brand-ivory md:text-5xl">
            Acabamentos &amp; Superfícies Nobres
          </h2>
          <p className="text-xs leading-relaxed font-light text-[#9e978a] md:text-sm">
            Tratamentos de altíssima durabilidade desenvolvidos para assegurar estabilidade estética
            com garantia de resistência a intempéries e névoa salina.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {finishes.map((finish) => (
            <div
              key={finish.code}
              className="group flex flex-col border border-[#272522] bg-[#151413] p-5 transition-all hover:border-brand-gold/60"
            >
              <div
                className={`relative mb-5 flex aspect-[4/3] w-full items-end border p-2.5 ${finish.swatch}`}
              >
                <span className="bg-black/60 px-2 py-0.5 text-[9px] tracking-wider text-white uppercase backdrop-blur-xs">
                  {finish.badge}
                </span>
              </div>
              <h4 className="mb-1 text-base font-semibold text-brand-ivory">{finish.name}</h4>
              <p className="mb-4 grow text-xs font-light text-[#8a8477]">{finish.description}</p>
              <div className="flex items-center justify-between border-t border-[#22201d] pt-3 font-mono text-[10px] tracking-widest text-[#716b60] uppercase">
                <span>Cód: {finish.code}</span>
                <span>15A</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
