import { iconPaths } from '../iconPaths'
import { OutlineIcon } from './Icons'

const badges = [
  { icon: iconPaths.shield, title: 'ABNT NBR 10821', subtitle: 'Pressão de Vento & Estanqueidade' },
  { icon: iconPaths.bolt, title: 'ABNT NBR 14718', subtitle: 'Carga para Guarda-Corpos' },
  { icon: iconPaths.globe, title: 'Certificação LEED', subtitle: 'Eficiência Térmica Sustentável' },
  { icon: iconPaths.sparkles, title: 'Qualicoat Seaside', subtitle: 'Resistência Extrema a Maresia' },
]

export default function TechnicalBadges() {
  return (
    <section className="border-t border-[#1a1917] bg-[#0c0c0c] px-6 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.title} className="flex flex-col items-center">
            <OutlineIcon d={badge.icon} className="mb-2 h-6 w-6 text-brand-gold" />
            <span className="text-xs font-semibold tracking-wider text-white uppercase">
              {badge.title}
            </span>
            <span className="mt-0.5 text-[10px] text-[#7b7569]">{badge.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
