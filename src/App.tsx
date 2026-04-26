/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle, 
  EyeOff, 
  Droplet, 
  ShieldCheck, 
  TrendingUp, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Home,
  Rocket,
  LayoutGrid,
  MessageSquare,
  Play
} from 'lucide-react';
import { useState } from 'react';

const IMAGES = {
  jupiter: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiTZ9ddosL120hB5SFyDICN5XQtxs_hZSWQoucbi-Y5O7f8p7EjrKRx7cArnLKOObQnYfzmq47xOhdlW9nX3e1E5sFxCSh6fw2Jfr5vLi2h43UccM6Awe_XDmzLfgYe9Hx7TfiTKygWiXasK_NkL2U0K3BGUwyvXI09Pxk9GuT7ppynJetehae6lAfp_4uh6W5Loy4P4QK0D2tmuHOI_jWClOL0o3F--f6gZOcKJIeQIKNRzhYHqUyz9_tZncVrvWZtTlkYDCzuEBY",
  lambda: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKAsmnvmHj7Oa694BsH2QtEbL-JPG3vz_crN5Yo3pWy_36v8eG4PfsrYswJZoQayyCEk_UmHhneB4g0ef1h_jOyrEqe3UA0LXJmKnnwTQsa61jS2pYgsVUzfWM9PSnEsfXXnVTiqXsQPGC7PhpFZeA6ceRTXrM0v6dksnod_YNqTEZjJaTADpl_7dXtluxup4qC_kalC7jVaC26PkPsL78aA_U7_D7weOlQKEk4Rexw_q5B7CMIZUNbxy7p_bf6mh8aQkxrvv2P0h8",
  brics: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjqvWj3G4slUKJSIyKGCQt-IEhL8TTdeBunLaLHAPX2p5dZYfqhuLibVroZFfn4ID3MTCg4--BsNoPWI-uWKgtg8phuTB416VI9llXTrCypPiNV0Y3jGwLVvLZa0A5W4P_1lKhQujjjkWeyIfNr9jj75qOwbt2f2Q7eGRTw2eEP25cjlfmTm-nZC6owwo8xrYyB-gQ-tMnStOZdlXTM377guBJsfA-jZ1VAoap008Qi7FRLUcgo_2eb26RaMR5ucf6UQw4Mkix8VUA",
  dashboard: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPKnK5WgQhGHMIsxu9DvKiltfxeR1GKIRjP-oFzTbJrtZJnJWBGLYzNQd3tncWG_2Su_yF1JClA_IzrnbSh4PWu-7L5__0w9QVXmZNBDao1P26_bXCLyeaH2hwz-KnUMteTUnSjimy3gqkBQ3c6Uvjbm5ADE29O5rdflSuWIEC9etU-za2ad3qAIGcxyY9AikUHeQO-9p8y03-J6rgXcxrw-nZnyD4amQGvX3iQ4282GyzwIPymRl9RNjxlYo4n2Nd-GxKvd3hVsC2",
  caseStudy: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb77NL7OEuMZMzLgHvsvnWuh1cPr3CJ4MTqtNkMI00ZLscN-03U9UUzaHPT-BGn95CRJSMTBzukVwLylzANWjSsfCpExJodPt2KV_ixjdH5TSk3Oht9yvnxC-Ryx3dE19bfrk9wAKcUKKhOa31RYL3H0sMvIx4QdMqpiz1365dwyYa5zmafFFqNddySAMs1P1yS6E7k9NNmaNSvxelUyez2SzUs_3ZGQlbPypHJgxBQpZcSG51i3klEO97i-DKD2fXk61CdHiV145h",
  portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcpRW-ivql52Wyw-dcM-iV4vexiPM8s22YB9lSPwcQeLdWYNg9GHuX_xOtMCA-ubzksiKCbmiMZZOsDj0jcBiR49o_jusnXJs1euxrQqGl53niSwqUkBpaBFee1YEJWG3kmpn-NZZ687eZDqvpK564u7-jrNX_-kzGSc-RcwUCDnUaM6gxPigRluFdi1FnoV-3wurOqiWVYGmJez7srm7dpu0uZROwVS03LspmRuXiPyPxgMGZUldSWEKqe_cBijOwjgGde9MNDvYk"
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-white/10 h-24 px-6 md:px-12 flex justify-between items-center">
    <div className="text-3xl font-black tracking-tighter text-primary">SiteSurge</div>
    <div className="hidden md:flex gap-10 items-center">
      {['Services', 'Portfolio', 'Process', 'About'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className={`text-lg transition-colors duration-300 ${item === 'Services' ? 'text-primary border-b-2 border-primary pb-1' : 'text-zinc-400 hover:text-primary'}`}
        >
          {item}
        </a>
      ))}
    </div>
    <button className="bg-primary text-black px-8 py-3 rounded-2xl font-bold transition-transform hover:scale-105 active:scale-95 hover:brightness-110 text-lg">
      Let's Talk
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[120vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(163,255,0,0.08)_0%,transparent_70%)] animate-pulse-soft"></div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-[1.1]">
        Be found. Be trusted. <br/>
        <span className="text-primary italic">Be the best.</span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        We transform invisible businesses into industry leaders through high-performance digital presence and strategic search dominance.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-primary text-black px-10 py-5 rounded-2xl font-bold text-xl hover:neon-glow transition-all">
          Get Started
        </button>
        <button className="glass-card text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
          View Our Work
        </button>
      </div>
    </motion.div>
  </section>
);

const Portfolio = () => {
  const projects = [
    { title: "Jupiter Law", sub: "Corporate Legal Excellence", img: IMAGES.jupiter },
    { title: "Lambda Learning", sub: "Digital Education Revolution", img: IMAGES.lambda },
    { title: "BRICS", sub: "Global Economic Portal", img: IMAGES.brics }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Previous Designs</h2>
          <div className="h-1 flex-grow bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-primary/30 w-1/3"
            />
          </div>
        </div>
        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-4xl aspect-[4/5] glass-card"
          >
            <img 
              src={p.img} 
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <motion.h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {p.title}
              </motion.h3>
              <p className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TargetAudience = () => (
  <section className="py-24 bg-zinc-950/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Who is this for?</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            title: "The Invisible",
            desc: "Businesses with incredible products or services that simply don't appear in search results. You're the best-kept secret that shouldn't be a secret.",
            icon: EyeOff,
            label: "Visibility Strategy"
          },
          {
            title: "The Leaky Bucket",
            desc: "You're getting traffic, but it's disappearing. Your website looks dated, lacks trust, and fails to convert visitors into loyal paying customers.",
            icon: Droplet,
            label: "Conversion Optimization"
          }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 hover:border-primary/30 group"
          >
            <item.icon className="w-16 h-16 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">{item.desc}</p>
            <div className="flex items-center gap-3 text-primary font-semibold">
              <CheckCircle className="w-6 h-6 fill-primary text-black" />
              <span>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          We Build <span className="text-primary italic">Digital Shops</span> That Command Immediate Trust
        </h2>
        <div className="space-y-12">
          {[
            {
              title: "A digital shop that builds trust",
              desc: "First impressions are everything. We create polished, premium experiences that validate your professional authority instantly.",
              icon: ShieldCheck
            },
            {
              title: "Ranking at the top of Google",
              desc: "Winning the SEO game isn't an accident. We engineer your site to speak Google's language while captivating human eyes.",
              icon: TrendingUp
            }
          ].map((f) => (
            <div key={f.title} className="flex gap-8 group">
              <div className="w-16 h-16 shrink-0 bg-primary/10 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-3">{f.title}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full animate-pulse-soft"></div>
        <div className="glass-card p-4 md:p-8 relative overflow-hidden rounded-4xl">
          <img 
            src={IMAGES.dashboard} 
            alt="Dashboard" 
            className="rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">Our 3-Step Surge</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { step: "01", title: "Audit", desc: "We dissect your current presence and identify exactly where you are losing money and visibility." },
          { step: "02", title: "The New Look", desc: "Our designers craft a bespoke glassmorphic identity that separates you from every competitor." },
          { step: "03", title: "Getting Found", desc: "Strategic deployment and SEO dominance. We flip the switch and let the traffic flow to your new hub." }
        ].map((p, i) => (
          <motion.div 
            key={p.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center px-6 relative"
          >
            <div className="w-28 h-28 bg-zinc-900 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-10 relative">
              <span className="text-4xl font-black text-primary">{p.step}</span>
              {i === 0 && <div className="absolute -inset-2 rounded-full border border-primary/20 animate-ping"></div>}
            </div>
            <h3 className="text-3xl font-bold mb-6">{p.title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">{p.desc}</p>
            {i < 2 && (
              <div className="hidden lg:block absolute top-14 left-[calc(100%-40px)] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-[3rem] p-10 md:p-20 overflow-hidden relative"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest mb-10 border border-primary/20">CASE STUDY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Impact Details: Real Results</h2>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 p-10 rounded-4xl border border-white/5 hover:border-primary/20 transition-all">
              <p className="text-5xl font-black text-primary mb-3">240%</p>
              <p className="text-zinc-500 text-lg uppercase tracking-wider font-bold">Traffic Increase</p>
            </div>
            <div className="bg-white/5 p-10 rounded-4xl border border-white/5 hover:border-primary/20 transition-all">
              <p className="text-5xl font-black text-primary mb-3">12k+</p>
              <p className="text-zinc-500 text-lg uppercase tracking-wider font-bold">New Leads</p>
            </div>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed mb-12">
            See how we transformed a stagnant service provider into a market leader in under 90 days. Our results aren't just about numbers; they're about business growth.
          </p>
          <button className="flex items-center gap-4 text-primary font-bold text-2xl hover:gap-6 transition-all group">
            Watch the Breakdown <ArrowRight className="w-8 h-8 transition-transform group-hover:scale-110" />
          </button>
        </div>
        <div className="relative aspect-video bg-zinc-900 rounded-4xl border border-white/10 flex items-center justify-center overflow-hidden hover:neon-glow transition-all">
          <img 
            src={IMAGES.caseStudy} 
            alt="Workspace" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
          />
          <button className="relative w-28 h-28 bg-primary rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 active:scale-95 transition-all">
            <Play className="w-12 h-12 fill-current ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  </section>
);

const Testimonial = () => (
  <section className="py-32 bg-zinc-950 overflow-hidden relative">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mb-12 inline-block"
      >
        <Quote className="w-24 h-24 text-primary opacity-20" />
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-5xl font-medium mb-20 italic leading-relaxed md:leading-snug"
      >
        "The transformation was overnight. We went from being page 5 on Google to the first result for our main keywords. AURA didn't just build a site; they built a growth engine."
      </motion.p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary neon-glow">
          <img src={IMAGES.portrait} alt="Client" className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
          <p className="font-bold text-white text-2xl mb-1">Aatif Iqbal</p>
          <p className="text-zinc-500 text-lg uppercase tracking-[0.15em]">CEO, Jupiter Law</p>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-20">
        <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-primary text-zinc-500 hover:text-primary transition-all group">
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-primary text-zinc-500 hover:text-primary transition-all group">
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-6">
    <motion.div 
      whileInView={{ scale: [0.95, 1] }}
      className="max-w-7xl mx-auto glass-card rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse-soft"></div>
      <div className="relative z-10">
        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-tight">Every business is customised.</h2>
        <p className="text-zinc-400 text-xl md:text-2xl mb-20 max-w-3xl mx-auto leading-relaxed">
          Stop settling for generic templates. Get a strategy that matches your ambition.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button className="bg-primary text-black px-14 py-7 rounded-2xl font-black text-2xl hover:neon-glow-strong transition-all">
            Start Your Surge
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-14 py-7 rounded-2xl font-black text-2xl hover:bg-white/10 transition-all">
            Book Free Audit
          </button>
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-950 w-full py-20 px-6 md:px-12 border-t border-white/5 mt-12 pb-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-primary font-black text-2xl tracking-tighter">SITESURGE DIGITAL AGENCY</div>
      <div className="text-center md:text-left text-zinc-500 text-sm tracking-widest font-medium uppercase">
        © 2026 AURA DIGITAL AGENCY. BUILT FOR THE FUTURE.
      </div>
      <div className="flex gap-12 font-bold text-zinc-400">
        {['Instagram', 'LinkedIn', 'Twitter', 'Dribbble'].map(social => (
          <a key={social} href="#" className="hover:text-primary transition-colors">{social}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  // Fake initial load for feel
  setTimeout(() => setLoading(false), 500);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <TargetAudience />
        <Features />
        <Process />
        <CaseStudy />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
