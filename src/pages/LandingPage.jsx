import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import LogoTicker from '../components/sections/LogoTicker';
import FavoriteTeammate from '../components/sections/FavoriteTeammate';
import EngineeringWork from '../components/sections/EngineeringWork';
import StatsSection from '../components/sections/StatsSection';
import Integrations from '../components/sections/Integrations';
import RecentlyShipped from '../components/sections/RecentlyShipped';
import EnterpriseSecurity from '../components/sections/EnterpriseSecurity';
import LatestNews from '../components/sections/LatestNews';
import CtaSection from '../components/sections/CtaSection';
import Footer from '../components/sections/Footer';
import Reveal from '../components/ui/Reveal';

export default function LandingPage({ onOpenLogin }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-bg-page)',
        color: 'var(--color-text-primary)',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      }}
    >
      <Navbar onOpenLogin={onOpenLogin} />
      <main style={{ flex: 1 }}>
        <Hero onOpenLogin={onOpenLogin} />
        <Reveal root inView>
          <LogoTicker />
        </Reveal>
        <Reveal root inView>
          <FavoriteTeammate />
        </Reveal>
        <Reveal root inView>
          <EngineeringWork />
        </Reveal>
        <Reveal root inView>
          <StatsSection />
        </Reveal>
        <Reveal root inView>
          <Integrations />
        </Reveal>
        <Reveal root inView>
          <RecentlyShipped />
        </Reveal>
        <Reveal root inView>
          <EnterpriseSecurity />
        </Reveal>
        <Reveal root inView>
          <LatestNews />
        </Reveal>
        <Reveal root inView>
          <CtaSection onOpenLogin={onOpenLogin} />
        </Reveal>
      </main>
      <Reveal root inView>
        <Footer onOpenLogin={onOpenLogin} />
      </Reveal>

      {/* Production-grade Viewport Bottom Progressive Glass Blur */}
      <div className="viewport-bottom-blur" aria-hidden="true" />
    </div>
  );
}

