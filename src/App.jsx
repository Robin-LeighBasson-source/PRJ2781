import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Search,
  X,
} from 'lucide-react'
import heroImage from './assets/morrow-hero.png'

const opportunities = [
  {
    company: 'Haven Collective',
    mark: 'HC',
    role: 'Brand Marketing Intern',
    location: 'Cape Town',
    mode: 'Hybrid',
    type: 'Internship',
    tone: 'sage',
  },
  {
    company: 'Northline Studio',
    mark: 'NS',
    role: 'Graduate Data Analyst',
    location: 'Johannesburg',
    mode: 'On-site',
    type: 'Graduate role',
    tone: 'ink',
  },
  {
    company: 'Form & Function',
    mark: 'FF',
    role: 'Product Design Intern',
    location: 'Stellenbosch',
    mode: 'Hybrid',
    type: 'Internship',
    tone: 'coral',
  },
  {
    company: 'Vector Works',
    mark: 'VW',
    role: 'Software Engineer Graduate',
    location: 'Pretoria',
    mode: 'Remote-friendly',
    type: 'Graduate role',
    tone: 'blue',
  },
  {
    company: 'Metric House',
    mark: 'MH',
    role: 'Finance Analyst Intern',
    location: 'Durban',
    mode: 'On-site',
    type: 'Internship',
    tone: 'sage',
  },
]

const primaryLinks = [
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'For graduates', href: '#graduates' },
  { label: 'For employers', href: '#employers' },
  { label: 'About', href: '#about' },
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Morrow home">
      <span className="logo__mark" aria-hidden="true">
        <span />
      </span>
      <span>Morrow</span>
    </a>
  )
}

function Header({ onPlaceholder }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="preview-bar">
        <p>Built for the first move.</p>
        <a href="#opportunities">
          Explore sample opportunities <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
      <header className="site-header">
        <div className="site-header__inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button className="text-button desktop-only" type="button" onClick={onPlaceholder}>
              Sign in
            </button>
            <a className="button button--dark desktop-only" href="#opportunities">
              Browse opportunities
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {primaryLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
              <ChevronRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <button
            className="button button--outline"
            type="button"
            onClick={() => {
              closeMenu()
              onPlaceholder()
            }}
          >
            Sign in
          </button>
          <a className="button button--dark" href="#opportunities" onClick={closeMenu}>
            Browse opportunities
          </a>
        </div>
      </div>
    </>
  )
}

function HeroSearch({ onSearch }) {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')

  return (
    <form
      className="hero-search"
      aria-label="Search opportunities"
      onSubmit={(event) => {
        event.preventDefault()
        onSearch({ keyword, location })
      }}
    >
      <label className="search-field">
        <span>Role or keyword</span>
        <span className="search-field__input">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Marketing, data, design"
          />
        </span>
      </label>
      <label className="search-field">
        <span>Location</span>
        <span className="search-field__input">
          <MapPin size={18} aria-hidden="true" />
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="City or remote"
          />
        </span>
      </label>
      <button className="button button--dark hero-search__submit" type="submit">
        Browse opportunities
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
    </form>
  )
}

function Hero({ onSearch }) {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="hero__content">
          <p className="hero__note">Student opportunities, minus the noise.</p>
          <h1>Find what <br />comes next.</h1>
          <p className="hero__copy">
            Discover internships and graduate roles made for your first steps into working life.
          </p>
          <HeroSearch onSearch={onSearch} />
          <p className="hero__fine-print">Preview experience · Sample listings only</p>
        </div>

        <div className="hero__media">
          <img
            src={heroImage}
            alt="Three students sharing a relaxed moment in a colourful studio"
            fetchpriority="high"
          />
          <div className="hero__media-label">
            <span>For students</span>
            <span>For graduates</span>
          </div>
        </div>
      </section>

      <div className="discipline-strip" aria-label="Opportunity categories">
        <span>Internships</span>
        <i aria-hidden="true" />
        <span>Graduate roles</span>
        <i aria-hidden="true" />
        <span>Part-time work</span>
        <i aria-hidden="true" />
        <span>Career starters</span>
      </div>
    </main>
  )
}

function OpportunityRow({ opportunity, onPlaceholder }) {
  return (
    <article className="opportunity-row">
      <div className={`company-mark company-mark--${opportunity.tone}`} aria-hidden="true">
        {opportunity.mark}
      </div>
      <div className="opportunity-row__role">
        <h3>{opportunity.role}</h3>
        <p>{opportunity.company}</p>
      </div>
      <div className="opportunity-row__location">
        <p>{opportunity.location}</p>
        <span>{opportunity.mode}</span>
      </div>
      <span className={`role-tag role-tag--${opportunity.type === 'Internship' ? 'sage' : 'blue'}`}>
        {opportunity.type}
      </span>
      <button className="role-link" type="button" onClick={onPlaceholder}>
        View role
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>
    </article>
  )
}

function Opportunities({ onPlaceholder }) {
  return (
    <section className="opportunities" id="opportunities" aria-labelledby="opportunities-title">
      <div className="section-heading">
        <div>
          <p>Sample listings</p>
          <h2 id="opportunities-title">Fresh opportunities</h2>
        </div>
        <button className="inline-link" type="button" onClick={onPlaceholder}>
          View all opportunities
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="opportunity-list">
        {opportunities.map((opportunity) => (
          <OpportunityRow
            key={`${opportunity.company}-${opportunity.role}`}
            opportunity={opportunity}
            onPlaceholder={onPlaceholder}
          />
        ))}
      </div>
    </section>
  )
}

function GraduatesSection() {
  return (
    <section className="graduates" id="graduates" aria-labelledby="graduates-title">
      <div className="graduates__copy">
        <h2 id="graduates-title">Your first move deserves a better starting point.</h2>
        <p>
          Morrow is being shaped around early careers—not adapted from a platform built for everyone else.
        </p>
        <a className="button button--white" href="#opportunities">
          Browse opportunities
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="portal" aria-hidden="true">
        <span className="portal__circle" />
        <span className="portal__door" />
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <p className="about__statement" id="about-title">
        Less scrolling past roles that were never meant for you. More clarity about where to begin.
      </p>
      <div className="about__details" id="employers">
        <p>
          The future Morrow platform will bring students, graduates, and employers into one focused space.
        </p>
        <p>
          This first version is intentionally a visual frontend concept. Profiles, applications, and employer tools come later.
        </p>
      </div>
    </section>
  )
}

function Footer({ onNewsletter }) {
  const [email, setEmail] = useState('')

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="footer-brand">
          <Logo />
          <p>Find internships and graduate roles that set you up for what comes next.</p>
          <span>Frontend concept only.</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h2>Explore</h2>
          <a href="#opportunities">Opportunities</a>
          <a href="#graduates">For graduates</a>
          <a href="#employers">For employers</a>
          <a href="#about">About Morrow</a>
        </nav>

        <div className="footer-contact">
          <h2>Stay in the loop</h2>
          <p>Get a note when the next part of Morrow takes shape.</p>
          <form
            className="newsletter"
            onSubmit={(event) => {
              event.preventDefault()
              onNewsletter(email)
              setEmail('')
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <Mail size={18} aria-hidden="true" />
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              required
            />
            <button type="submit" aria-label="Join the Morrow newsletter preview">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Morrow</p>
        <div className="social-links" aria-label="Social links">
          <button type="button" aria-label="Instagram placeholder">
            <Instagram aria-hidden="true" />
          </button>
          <button type="button" aria-label="LinkedIn placeholder">
            <Linkedin aria-hidden="true" />
          </button>
        </div>
        <p>Designed for students finding their first move.</p>
      </div>
    </footer>
  )
}

function App() {
  const [message, setMessage] = useState('')

  const showPlaceholder = (customMessage = 'This is a frontend preview. The full experience will connect here later.') => {
    setMessage(customMessage)
    window.setTimeout(() => setMessage(''), 3600)
  }

  const handleSearch = ({ keyword, location }) => {
    const detail = [keyword, location].filter(Boolean).join(' · ')
    showPlaceholder(detail ? `Search preview: ${detail}` : 'Search preview ready. Results will connect here later.')
    document.querySelector('#opportunities')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header onPlaceholder={() => showPlaceholder('Sign-in is a frontend placeholder for now.')} />
      <Hero onSearch={handleSearch} />
      <Opportunities onPlaceholder={() => showPlaceholder()} />
      <GraduatesSection />
      <AboutSection />
      <Footer
        onNewsletter={(email) => showPlaceholder(`Newsletter preview saved for ${email}. No data was sent.`)}
      />
      <div className={`toast${message ? ' toast--visible' : ''}`} role="status" aria-live="polite">
        {message}
      </div>
    </div>
  )
}

export default App
