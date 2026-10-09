import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { defaultSystems, projectStages, projectTypes, systemOptions, WHATSAPP_URL } from '../data'
import { iconPaths } from '../iconPaths'
import { OutlineIcon, WhatsAppIcon } from './Icons'

const inputClass =
  'w-full rounded-none border border-[#2f2b23] bg-[#1b1a18] px-4 py-3 text-xs text-brand-ivory placeholder:text-[#555047] transition-colors focus:border-brand-gold focus:ring-0'
const labelClass = 'mb-2 block text-xs tracking-wider text-[#989182] uppercase'

const MAX_UPLOAD_BYTES = 50 * 1024 * 1024

export default function ContactForm() {
  const [systems, setSystems] = useState<string[]>(defaultSystems)
  const [stage, setStage] = useState('Projeto Executivo')
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const totalBytes = files.reduce((sum, file) => sum + file.size, 0)
  const exceedsLimit = totalBytes > MAX_UPLOAD_BYTES

  function toggleSystem(system: string) {
    setSystems((current) =>
      current.includes(system) ? current.filter((s) => s !== system) : [...current, system],
    )
  }

  function addFiles(list: FileList | null) {
    if (!list) return
    setFiles((current) => [...current, ...Array.from(list)])
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    addFiles(event.target.files)
    event.target.value = ''
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (exceedsLimit) return
    // TODO: integrar com o backend / serviço de e-mail.
    // const data = new FormData(event.currentTarget)
    // systems.forEach((s) => data.append('sistemas', s)); data.append('etapa', stage)
    // files.forEach((f) => data.append('arquivos', f))
    setSubmitted(true)
  }

  return (
    <section className="border-t border-[#1e1d1b] bg-[#0e0e0d] px-6 py-24" id="orcamento">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-sm border border-[#292621] bg-[#141312] p-8 shadow-2xl md:p-14">
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#25221d] pb-8 md:flex-row md:items-center">
            <div>
              <span className="mb-1 block text-[10px] font-semibold tracking-[0.25em] text-brand-gold uppercase">
                Atendimento Técnico de Alto Padrão
              </span>
              <h2 className="font-luxury text-2xl font-semibold text-white md:text-3xl">
                Solicite seu estudo técnico e orçamento.
              </h2>
              <p className="mt-1 text-xs font-light text-[#8c8577]">
                Envie seus arquivos de projeto para nossa equipe de engenharia analisar vãos e
                soluções personalizadas.
              </p>
            </div>
            <a
              className="flex shrink-0 items-center gap-2 self-start border border-emerald-600/40 bg-emerald-950/60 px-4 py-2 text-xs tracking-wider text-emerald-300 uppercase transition-colors hover:bg-emerald-900/60 md:self-auto"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current text-emerald-400" />
              <span>WhatsApp VIP Direto</span>
            </a>
          </div>

          {submitted ? (
            <div className="py-10 text-center">
              <span className="mb-3 block text-[11px] font-semibold tracking-[0.25em] text-brand-gold uppercase">
                Solicitação recebida
              </span>
              <h3 className="font-luxury mb-3 text-2xl font-semibold text-white md:text-3xl">
                Obrigado! Nossa engenharia entrará em contato.
              </h3>
              <p className="mb-8 text-xs font-light text-[#8c8577]">
                Retornamos em até 1 dia útil com a análise preliminar do seu projeto.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-medium tracking-widest text-brand-gold uppercase transition-colors hover:text-white"
              >
                Enviar nova solicitação ↗
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="nome">
                    Nome Completo *
                  </label>
                  <input className={inputClass} id="nome" name="nome" placeholder="Ex: Arq. Felipe Guimarães" required type="text" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="empresa">
                    Empresa / Escritório de Arquitetura
                  </label>
                  <input className={inputClass} id="empresa" name="empresa" placeholder="Ex: Studio Guimarães Arquitetura" type="text" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="telefone">
                    Telefone / WhatsApp *
                  </label>
                  <input className={inputClass} id="telefone" name="telefone" placeholder="(11) 99999-9999" required type="tel" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    E-mail Corporativo *
                  </label>
                  <input className={inputClass} id="email" name="email" placeholder="contato@escritorio.arq.br" required type="email" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="cidade">
                    Cidade e Estado da Obra *
                  </label>
                  <input className={inputClass} id="cidade" name="cidade" placeholder="Ex: São Paulo - SP / Fazenda Boa Vista" required type="text" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="tipo_projeto">
                    Tipo de Projeto
                  </label>
                  <select className={inputClass} id="tipo_projeto" name="tipo_projeto">
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <fieldset className="pt-2">
                <legend className="mb-3 block text-xs tracking-wider text-[#989182] uppercase">
                  Sistemas de Interesse no Projeto (Selecione quantos desejar):
                </legend>
                <div className="grid grid-cols-2 gap-3 text-xs text-[#a59f92] sm:grid-cols-3">
                  {systemOptions.map((system) => (
                    <label
                      key={system}
                      className="flex cursor-pointer items-center gap-2 border border-[#26241f] bg-[#191816] p-2.5 hover:border-brand-gold/40"
                    >
                      <input
                        type="checkbox"
                        name="sistemas"
                        value={system}
                        checked={systems.includes(system)}
                        onChange={() => toggleSystem(system)}
                        className="rounded-none border-[#3e3a31] bg-[#111] text-brand-gold focus:ring-0"
                      />
                      <span>{system}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="pt-2">
                <legend className="mb-2.5 block text-xs tracking-wider text-[#989182] uppercase">
                  Etapa Atual do Projeto
                </legend>
                <div className="flex flex-wrap gap-2">
                  {projectStages.map((option) => {
                    const active = option === stage
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setStage(option)}
                        className={`border bg-[#1a1917] px-3.5 py-1.5 text-xs transition-colors ${
                          active
                            ? 'border-brand-gold text-brand-gold'
                            : 'border-[#2d2922] text-[#938b7d] hover:border-brand-gold hover:text-brand-ivory'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div className="pt-2">
                <span className={labelClass}>Envio de Pranchas de Projeto (DWG, RVT, PDF até 50MB)</span>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      fileInputRef.current?.click()
                    }
                  }}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setIsDragging(true)
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault()
                    setIsDragging(false)
                    addFiles(e.dataTransfer.files)
                  }}
                  className={`flex cursor-pointer flex-col items-center justify-center border-2 border-dashed bg-[#181715]/40 p-6 text-center transition-colors hover:border-brand-gold/60 ${
                    isDragging ? 'border-brand-gold/60' : 'border-[#343026]'
                  }`}
                >
                  <OutlineIcon d={iconPaths.upload} className="mb-2 h-8 w-8 text-brand-gold/70" />
                  <p className="text-xs text-[#a19989]">
                    Clique para selecionar os arquivos ou arraste suas pranchas aqui
                  </p>
                  <span className="mt-1 text-[10px] text-[#6b6456]">
                    Garantimos total sigilo e assinatura de NDA técnico se necessário.
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".dwg,.rvt,.pdf"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
                {files.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs text-[#a59f92]">
                    {files.map((file, index) => (
                      <li
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between border border-[#26241f] bg-[#191816] px-3 py-2"
                      >
                        <span className="truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setFiles((current) => current.filter((_, i) => i !== index))}
                          className="ml-3 shrink-0 text-[10px] tracking-wider text-[#71695c] uppercase hover:text-brand-gold"
                        >
                          Remover
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {exceedsLimit && (
                  <p className="mt-2 text-[11px] text-red-400">
                    Os arquivos ultrapassam o limite de 50MB.
                  </p>
                )}
              </div>

              <div className="pt-2">
                <label className={labelClass} htmlFor="mensagem">
                  Observações Técnicas / Requisitos Especiais
                </label>
                <textarea
                  className={inputClass}
                  id="mensagem"
                  name="mensagem"
                  placeholder="Indique vãos aproximados, requisitos acústicos especiais ou previsão de cronograma..."
                  rows={3}
                />
              </div>

              <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
                <span className="text-[11px] font-light text-[#71695c]">
                  Seus dados serão tratados com estrito sigilo comercial.
                </span>
                <button
                  className="flex w-full items-center justify-center gap-2 bg-brand-gold px-8 py-3.5 text-xs font-semibold tracking-widest text-brand-black uppercase transition-all duration-300 hover:bg-brand-gold-hover disabled:opacity-50 sm:w-auto"
                  type="submit"
                  disabled={exceedsLimit}
                >
                  <span>Enviar Solicitação para Engenharia</span>
                  <span className="text-sm">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
