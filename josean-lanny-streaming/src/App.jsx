import { useEffect, useMemo, useState } from 'react'
import { ChevronRight, Heart, LockKeyhole, Play, Sparkles, Star, X } from 'lucide-react'
import { couple, episodes, letter, rows } from './data/couple.js'
import { getRelationshipStats, plural } from './utils/date.js'

function App() {
  const [started, setStarted] = useState(false)
  const [selected, setSelected] = useState(null)
  const [showLetter, setShowLetter] = useState(false)
  const stats = useMemo(() => getRelationshipStats(couple.startDate), [])

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') {
        setSelected(null)
        setShowLetter(false)
      }
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  if (!started) {
    return <WelcomeScreen onStart={() => setStarted(true)} />
  }

  return (
    <main className="app">
      <Aurora />
      <Header />
      <Hero stats={stats} onLetter={() => setShowLetter(true)} />
      <section className="section stats-section" aria-label="Estatísticas do relacionamento">
        <StatCard label="Tempo oficial" value={couple.celebration} />
        <StatCard label="Dias desde o início" value={`${stats.days}+`} />
        <StatCard label="Horas de história" value={`${stats.hours.toLocaleString('pt-BR')}+`} />
        <StatCard label="Final" value="Sem previsão" />
      </section>

      <section id="episodios" className="section episodes-section" aria-label="Episódios especiais">
        <div className="section-title">
          <span className="eyebrow">Série original</span>
          <h2>Josean & Lanny: episódios essenciais</h2>
        </div>
        <div className="episodes-grid">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} onOpen={() => setSelected(episode)} />
          ))}
        </div>
      </section>

      {rows.map((row) => (
        <ContentRow key={row.title} row={row} onOpen={setSelected} />
      ))}

      <FinalLetter onOpen={() => setShowLetter(true)} />
      <Footer />

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
      {showLetter && <LetterModal onClose={() => setShowLetter(false)} />}
    </main>
  )
}

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome">
      <Aurora />
      <div className="grain" />
      <div className="welcome-card">
        <div className="lock-pill">
          <LockKeyhole size={15} /> Acesso especial liberado
        </div>
        <h1>{couple.brand}</h1>
        <p className="welcome-subtitle">Escolha o perfil para assistir à homenagem de hoje.</p>
        <button className="profile" onClick={onStart} aria-label="Entrar no perfil da Lanny">
          <div className="profile-avatar">
            <Heart fill="currentColor" size={42} />
          </div>
          <span>{couple.profileName}</span>
        </button>
        <p className="welcome-note">Hoje: {couple.celebration} de uma história escrita por Deus, amor e escolha.</p>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <a href="#top" className="brand" aria-label="Início">
        {couple.brand}
      </a>
      <nav className="nav" aria-label="Navegação principal">
        <a href="#momentos">Momentos</a>
        <a href="#episodios">Episódios</a>
        <a href="#carta">Carta</a>
      </nav>
      <div className="header-profile">
        <span>Para</span>
        <strong>{couple.profileName}</strong>
      </div>
    </header>
  )
}

function Hero({ stats, onLetter }) {
  const relationText = `${stats.years} ${plural(stats.years, 'ano', 'anos')} e ${stats.months} ${plural(stats.months, 'mês', 'meses')}`

  return (
    <section id="top" className="hero">
      <div className="hero-backdrop" />
      <div className="hero-content">
        <div className="hero-badges">
          <span className="badge live"><span /> Especial de hoje</span>
          <span className="badge">{couple.todayLabel}</span>
        </div>
        <p className="original">{couple.subtitle}</p>
        <h1>{couple.heroTitle}</h1>
        <p className="hero-description">{couple.heroText}</p>
        <div className="hero-meta">
          <span>{relationText}</span>
          <span>Romance real</span>
          <span>Classificação: para sempre</span>
          <span>Milhares de sentimentos</span>
        </div>
        <div className="hero-actions">
          <button className="btn primary" onClick={onLetter}>
            <Play fill="currentColor" size={19} /> Assistir carta
          </button>
          <a className="btn secondary" href="#momentos">
            Ver momentos <ChevronRight size={19} />
          </a>
        </div>
      </div>
      <div className="hero-poster">
        <div className="poster-frame">
          <img src="/fotos/foto-06.svg" alt="Pôster romântico de Josean e Lanny" />
          <div className="poster-glow" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  )
}

function EpisodeCard({ episode, onOpen }) {
  return (
    <article className="episode-card" onClick={onOpen} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen()}>
      <div className="episode-image">
        <img src={episode.image} alt={episode.title} />
        <button className="play-float" aria-label={`Abrir ${episode.title}`}>
          <Play fill="currentColor" size={17} />
        </button>
      </div>
      <div className="episode-info">
        <span>{episode.season}</span>
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>
      </div>
    </article>
  )
}

function ContentRow({ row, onOpen }) {
  if (row.type === 'ranked') {
    return (
      <section className="section row-section" aria-label={row.title}>
        <div className="section-title compact">
          <h2>{row.title}</h2>
        </div>
        <div className="rank-row">
          {row.items.map((text, index) => (
            <article className="rank-card" key={text}>
              <span className="rank-number">{index + 1}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }

  if (row.type === 'gallery') {
    return (
      <section id="momentos" className="section row-section" aria-label={row.title}>
        <div className="section-title compact">
          <h2>{row.title}</h2>
        </div>
        <div className="gallery-row">
          {row.items.map((item) => (
            <button className="gallery-card" key={item.title} onClick={() => onOpen(item)}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="section row-section" aria-label={row.title}>
      <div className="section-title compact">
        <h2>{row.title}</h2>
      </div>
      <div className="wide-row">
        {row.items.map((item) => (
          <button className="wide-card" key={item.title} onClick={() => onOpen(item)}>
            <img src={item.image} alt={item.title} />
            <div>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function FinalLetter({ onOpen }) {
  return (
    <section id="carta" className="section finale">
      <div className="finale-card">
        <span className="eyebrow">Cena final</span>
        <h2>Uma carta para a protagonista da minha vida</h2>
        <p>{couple.dedication}</p>
        <button className="btn primary" onClick={onOpen}>
          <Heart fill="currentColor" size={18} /> Abrir carta completa
        </button>
      </div>
    </section>
  )
}

function Modal({ item, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <article className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={22} />
        </button>
        <img src={item.image} alt={item.title} />
        <div className="modal-body">
          <div className="modal-tags">
            <span><Star fill="currentColor" size={15} /> Especial</span>
            <span>{item.duration || item.meta || 'Momento especial'}</span>
          </div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </article>
    </div>
  )
}

function LetterModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <article className="letter-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={22} />
        </button>
        <div className="letter-top">
          <Sparkles size={22} />
          <span>Mensagem exclusiva</span>
        </div>
        <h2>Para minha xuazinha</h2>
        <div className="letter-text">
          {letter.split('\n').map((paragraph, index) => (
            <p key={`${paragraph}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  )
}

function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Produção original de Josean para sua neguinha • {couple.celebration}</p>
    </footer>
  )
}

export default App
