"use client"

import Image from "next/image"
import { useState } from "react"

const features = [
  {
    title: "audit",
    desc: "find rf, electric fields, and magnetic field hotspots in the rooms that matter most.",
    icon: "/images/icon-audit.png",
  },
  {
    title: "plan",
    desc: "get a prioritized roadmap so you know what to fix first and what to ignore.",
    icon: "/images/icon-plan.png",
  },
  {
    title: "protect",
    desc: "apply targeted solutions and validate with before and after measurements.",
    icon: "/images/icon-protect.png",
  },
]

export default function Page() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error")
      return
    }

    try {
      const res = await fetch("http://localhost:8002/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        setStatus("error")
        return
      }

      form.reset()
      setStatus("sent")
      window.setTimeout(() => setStatus("idle"), 2500)
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* bg overlay */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none relative">
        <Image
          src="/images/abstract-background.png"
          alt="abstract background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-white.png" alt="bluewire home" width={36} height={36} />
          <span className="text-sm tracking-wide opacity-90">bluewire home</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-85">
          <a href="#services" className="hover:opacity-100">
            services
          </a>
          <a href="#process" className="hover:opacity-100">
            process
          </a>
          <a href="#contact" className="hover:opacity-100">
            contact
          </a>
        </nav>
      </header>

      {/* hero section */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs text-white/80">
            emf • rf • dirty electricity
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            emf protection for modern living, without the fear spiral.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/75 max-w-xl">
            we help you measure exposure, prioritize fixes, and confirm results. designed for bedrooms, offices,
            studios, and whole homes.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="bg-white text-black px-5 py-3 rounded-xl text-sm font-medium hover:opacity-90"
            >
              book an audit
            </a>
            <a
              href="#services"
              className="border border-white/15 bg-white/5 text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-white/10"
            >
              view services
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <Image
            src="/images/main-hero.png"
            alt="bluewire home hero"
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </section>

      {/* services */}
      <section id="services" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">start with clarity</h2>
          <p className="mt-2 text-sm text-white/70 max-w-2xl">
            three steps to a calmer, lower-emf space. simple, practical, and measurable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <Image src={feature.icon} alt={`${feature.title} icon`} width={44} height={44} />
              <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* process */}
      <section id="process" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5">
          <h2 className="text-2xl font-semibold tracking-tight">how it works</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-white/90">1) measure</p>
              <p className="mt-2 text-sm text-white/70">we identify key sources and document baseline readings.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">2) reduce</p>
              <p className="mt-2 text-sm text-white/70">we prioritize the highest impact changes first.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">3) validate</p>
              <p className="mt-2 text-sm text-white/70">
                we confirm improvements with before and after measurements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contact form */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">tell us about your space</h2>
            <p className="mt-2 text-sm text-white/70 max-w-lg">
              bedroom, office, whole home, or studio. share your biggest concern and we&apos;ll suggest the best
              next step.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="grid gap-3">
              <input
                name="name"
                aria-label="name"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                placeholder="name"
                autoComplete="name"
                required
              />
              <input
                name="email"
                aria-label="email"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                placeholder="email"
                type="email"
                autoComplete="email"
                required
              />
              <textarea
                name="message"
                aria-label="message"
                className="w-full px-4 py-3 min-h-[120px] rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                placeholder="what are you trying to improve?"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 px-5 py-3 bg-white text-black rounded-xl text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "sending..." : status === "sent" ? "sent" : "send"}
              </button>

              {status === "error" ? (
                <p className="text-xs text-white/70">
                  something went wrong. make sure the python api is running on localhost:8002.
                </p>
              ) : null}
            </div>
          </form>
        </div>

        <footer className="mt-14 pt-8 border-t border-white/10 text-xs text-white/50">
          © {new Date().getFullYear()} bluewire home
        </footer>
      </section>
    </main>
  )
}