"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const reels = [
  { id: 1, title: "Brand Identity — 2Amigos",       category: "Branding",     thumbnail: "/logos/2Amigos.png",          href: "/work" },
  { id: 2, title: "Social Campaign — Flamora",       category: "Social Media", thumbnail: "/logos/Flamora.jpg",          href: "/work" },
  { id: 3, title: "Content Strategy — House of Sash",category: "Content",      thumbnail: "/logos/House of Sash.jpg",    href: "/work" },
];

const graphics = [
  { id: 1, title: "Visual Identity System",   client: "Chocolate Confetti", tags: ["Branding","Print"],    image: "/logos/Chocolate Confetti.jpg", href: "/work" },
  { id: 2, title: "Digital Campaign Assets",  client: "Incept Design",      tags: ["Digital","Social"],    image: "/logos/Incept Desgin.jpg",      href: "/work" },
  { id: 3, title: "Brand Refresh",            client: "Abhivyakti",         tags: ["Branding","Strategy"], image: "/logos/Abhivyakti Logo.jpeg",   href: "/work" },
];

const testimonials = [
  { id: 1, name: "Rohan Mehta",  role: "Founder, 2Amigos",            avatar: "/img.png", quote: "Social VRTX completely transformed how we show up online. Our engagement tripled within the first month. The team just gets it." },
  { id: 2, name: "Priya Sharma", role: "CEO, Flamora",                 avatar: "/img.png", quote: "Working with Social VRTX felt like having an in-house creative team. Every piece of content was on-brand and delivered on time." },
  { id: 3, name: "Arjun Kapoor", role: "Director, House of Sash",      avatar: "/img.png", quote: "The strategy they built for us was data-driven and creative at the same time. We saw real ROI within weeks." },
  { id: 4, name: "Sneha Patel",  role: "Co-Founder, Chocolate Confetti",avatar: "/img.png", quote: "From content to campaigns, everything was handled with precision. Our brand finally looks as premium as our product." },
  { id: 5, name: "Vikram Nair",  role: "MD, Krazzy Computer Valley",   avatar: "/img.png", quote: "They don't just execute — they think. Social VRTX brought ideas we hadn't even considered and made them work." },
];

const brands = [
  { name: "2Amigos",            logo: "/logos/2Amigos.png" },
  { name: "Abhivyakti",         logo: "/logos/Abhivyakti Logo.jpeg" },
  { name: "BB",                 logo: "/logos/BB Logo.png" },
  { name: "Chocolate Confetti", logo: "/logos/Chocolate Confetti.jpg" },
  { name: "CK",                 logo: "/logos/CK.jpg" },
  { name: "Dimsums & More",     logo: "/logos/Dimsums & More.jpg" },
  { name: "Flamora",            logo: "/logos/Flamora.jpg" },
  { name: "House of Sash",      logo: "/logos/House of Sash.jpg" },
  { name: "Incept Design",      logo: "/logos/Incept Desgin.jpg" },
  { name: "Krazzy Computer Valley", logo: "/logos/Krazzy Computer Valley.jpg" },
];

// ─── ANIMATION HELPERS ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

// ─── REEL CARD ────────────────────────────────────────────────────────────────

function ReelCard({ reel, index }: { reel: typeof reels[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const offsets = [0, 40, 20]; // px vertical stagger

  return (
    <motion.div
      variants={fadeUp}
      style={{ marginTop: offsets[index] }}
      className="w-full sm:w-[240px] lg:w-[260px] flex-shrink-0"
    >
      <Link href={reel.href} className="block cursor-pointer group">
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.03, y: -6 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-yellow-400/40 transition-colors duration-300"
          style={{ aspectRatio: "9/16" }}
        >
          <div className="absolute inset-0 bg-zinc-900">
            <motion.img
              src={reel.thumbnail}
              alt={reel.title}
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: hovered ? 1.2 : 1, opacity: hovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center"
              style={{ boxShadow: hovered ? "0 0 60px rgba(250,204,21,0.7)" : "0 0 30px rgba(250,204,21,0.3)" }}
            >
              <Play className="w-6 h-6 text-black fill-black ml-0.5" />
            </motion.div>
          </div>

          {/* Category */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-[10px] font-bold bg-yellow-400 text-black rounded-full uppercase tracking-widest">
              {reel.category}
            </span>
          </div>

          {/* Bottom info */}
          <motion.div
            animate={{ y: hovered ? 0 : 4, opacity: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-5"
          >
            <p className="text-white font-bold text-sm leading-snug">{reel.title}</p>
            <div className="flex items-center gap-1 mt-2 text-yellow-400 text-xs font-semibold">
              <span>View Reel</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ─── GRAPHIC CARD ─────────────────────────────────────────────────────────────

function GraphicCard({ graphic, index }: { graphic: typeof graphics[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={fadeUp}>
      <Link href={graphic.href} className="block cursor-pointer group">
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl border border-white/10 hover:border-yellow-400/40 transition-colors duration-300 bg-white/[0.03]"
        >
          <div className="relative h-60 overflow-hidden bg-zinc-900">
            <motion.img
              src={graphic.image}
              alt={graphic.title}
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
              transition={{ duration: 0.25 }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center"
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>
          <div className="p-5">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-1">{graphic.client}</p>
            <h3 className="text-white font-bold text-base mb-3">{graphic.title}</h3>
            <div className="flex gap-2 flex-wrap">
              {graphic.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 text-[10px] border border-white/15 text-white/50 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => go(active === 0 ? testimonials.length - 1 : active - 1);
  const next = () => go(active === testimonials.length - 1 ? 0 : active + 1);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  return (
    <section ref={ref} className="py-28 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-semibold mb-3">What clients say</p>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">Testimonials</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black hover:bg-yellow-300 transition-colors duration-300 cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Featured quote */}
        <div className="mb-10 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-yellow-400/25 bg-white/[0.04] p-8 md:p-12"
            >
              <div className="absolute top-8 right-8 opacity-8">
                <Quote className="w-24 h-24 text-yellow-400" />
              </div>
              <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mb-8">
                "{testimonials[active].quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonials[active].avatar} alt={testimonials[active].name} className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400/40" />
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">{testimonials[active].name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{testimonials[active].role}</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5 selector slots */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => go(i)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                i === active ? "border-yellow-400/50 bg-yellow-400/[0.08]" : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <img src={t.avatar} alt={t.name} className={`w-7 h-7 rounded-full object-cover transition-all duration-300 ${i === active ? "border border-yellow-400/60" : "border border-white/10 opacity-50"}`} />
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === active ? "bg-yellow-400" : "bg-white/20"}`} />
              </div>
              <p className={`text-xs font-bold uppercase tracking-wide leading-tight transition-colors duration-300 ${i === active ? "text-white" : "text-white/40"}`}>{t.name}</p>
              <p className={`text-[10px] mt-0.5 transition-colors duration-300 ${i === active ? "text-white/50" : "text-white/25"}`}>{t.role}</p>
            </motion.button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => go(i)} className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === active ? "w-8 bg-yellow-400" : "w-1 bg-white/20 hover:bg-white/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BRAND MARQUEE (full colour) ──────────────────────────────────────────────

function BrandLogoStrip() {
  return (
    <div className="py-14 border-y border-white/[0.08] overflow-hidden">
      <div className="flex gap-14 items-center whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {[...brands, ...brands].map((b, i) => (
          <div key={i} className="flex-shrink-0 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* Full colour — no grayscale filter */}
            <img src={b.logo} alt={b.name} className="h-9 w-auto object-contain rounded-md" />
            <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, href }: { eyebrow: string; title: string; href?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-end justify-between mb-14"
    >
      <div>
        <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold mb-3">{eyebrow}</p>
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">{title}</h2>
      </div>
      {href && (
        <Link href={href} className="group hidden md:flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-300">
          View all <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      )}
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroY = useSpring(rawY, { stiffness: 80, damping: 20 });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Page-level scroll progress for the top bar
  const { scrollYProgress: pageProgress } = useScroll();
  const scaleX = useSpring(pageProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">

      {/* ── SCROLL PROGRESS BAR ── */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-yellow-400 z-[100]"
      />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-end pb-24 px-6 md:px-10 overflow-hidden pt-32">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
        {/* Glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[140px] pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-6xl mx-auto w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-yellow-400 text-xs uppercase tracking-[0.4em] font-bold mb-8"
          >
            Selected Work
          </motion.p>

          {/* ── HERO TITLE ── */}
          <div className="overflow-hidden mb-2">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[clamp(3.5rem,12vw,9rem)] font-black uppercase tracking-[-0.03em] leading-[0.92] text-white"
            >
              Our
            </motion.div>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
              className="text-[clamp(3.5rem,12vw,9rem)] font-black uppercase tracking-[-0.03em] leading-[0.92] text-yellow-400"
            >
              Work.
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-6"
          >
            <div className="w-px h-14 bg-white/15 mt-1 flex-shrink-0" />
            <p className="text-white/45 text-sm md:text-base max-w-md leading-relaxed">
              Brands built, campaigns launched, and stories told — here's a look at what we've created together.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-10 md:gap-16 mt-16 pt-10 border-t border-white/[0.08]"
          >
            {[
              { num: "50+",  label: "Brands" },
              { num: "100+", label: "Projects" },
              { num: "5+",   label: "Years" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              >
                <p className="text-2xl md:text-3xl font-black text-yellow-400">{s.num}</p>
                <p className="text-white/35 text-[10px] uppercase tracking-[0.2em] mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── BRAND MARQUEE ── */}
      <BrandLogoStrip />

      {/* ── REELS ── */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Motion" title="Reels" href="/work" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center sm:items-end"
          >
            {reels.map((reel, i) => (
              <ReelCard key={reel.id} reel={reel} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GRAPHICS ── */}
      <section className="py-28 px-6 md:px-10" style={{ background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Design" title="Graphics" href="/work" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {graphics.map((g, i) => (
              <GraphicCard key={g.id} graphic={g} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-28 px-6 md:px-10 border-t border-white/[0.08]"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-yellow-400 text-xs uppercase tracking-[0.3em] font-bold mb-4">Ready to start?</p>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
              Let's build<br />something great.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-5 bg-yellow-400 text-black font-black text-sm uppercase tracking-wider hover:bg-yellow-300 transition-colors duration-300 rounded-full shrink-0 cursor-pointer"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
