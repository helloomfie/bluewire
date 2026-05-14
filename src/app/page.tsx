"use client"

import { useState } from "react"

const audits = [
  { client: "my house", location: "pelham manor, new york", date: "jan 19, 2026", readings: 24 },
  { client: "the office", location: "bayside, queens", date: "jan 18, 2026", readings: 18 },
  { client: "art studio", location: "williamsburg, brooklyn", date: "jan 17, 2026", readings: 31 },
]

const readings = [
  ["wifi router", "50 cm", "1.32", "mG"],
  ["smart tv", "100 cm", "0.45", "mG"],
  ["soundbar", "100 cm", "0.38", "mG"],
  ["game console", "100 cm", "0.71", "mG"],
]

export default function Page() {
  const [screen, setScreen] = useState<"home" | "detail" | "add">("home")

  return (
    <main className="min-h-screen bg-[#020712] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] min-h-[880px] rounded-[44px] border border-white/10 bg-[#07101d] shadow-2xl overflow-hidden relative">

        {/* phone glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(36,115,255,.25),transparent_35%)] pointer-events-none" />

        {/* top bar */}
        <div className="relative z-10 flex justify-between items-center px-6 pt-6 pb-4 text-xs text-white/70">
          <span>9:41</span>
          <span>bluewire audits</span>
          <span>▰▰▰</span>
        </div>

        {screen === "home" && (
          <section className="relative z-10 px-5 pb-24">
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-blue-400">emf audit logger</p>
                <h1 className="mt-2 text-2xl font-mono tracking-tight">BLUEWIRE AUDITS</h1>
              </div>
              <button className="text-blue-400 border border-blue-500/40 rounded-xl px-3 py-2 text-xs">
                CSV
              </button>
            </div>

            <button
              onClick={() => setScreen("add")}
              className="mt-8 w-full rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5 flex items-center gap-4 text-left"
            >
              <div className="h-14 w-14 rounded-xl border border-dashed border-blue-400 flex items-center justify-center text-3xl text-blue-400">
                +
              </div>
              <div>
                <p className="text-blue-300 font-mono">new audit</p>
                <p className="text-xs text-white/50 mt-1">create a new emf walkthrough</p>
              </div>
            </button>

            <div className="grid grid-cols-3 gap-3 mt-7">
              <Stat value="24" label="readings" />
              <Stat value="1.28" label="avg mG" />
              <Stat value="3" label="flagged" />
            </div>

            <div className="mt-8 flex items-center justify-between">
              <h2 className="text-sm uppercase tracking-widest text-white/70">recent audits</h2>
              <button className="text-xs text-blue-400">view all</button>
            </div>

            <div className="mt-4 space-y-3">
              {audits.map((audit) => (
                <button
                  key={audit.client}
                  onClick={() => setScreen("detail")}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left flex justify-between items-center"
                >
                  <div>
                    <p className="font-mono text-sm">{audit.client}</p>
                    <p className="text-xs text-white/45 mt-1">{audit.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/50">{audit.date}</p>
                    <p className="text-xs text-blue-400 mt-1">{audit.readings} readings</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {screen === "detail" && (
          <section className="relative z-10 px-5 pb-24">
            <button onClick={() => setScreen("home")} className="text-white/60 mt-4">← back</button>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h1 className="text-xl text-blue-400 font-mono">anderson residence</h1>
              <p className="text-sm text-white/55 mt-3">austin, tx</p>
              <p className="text-sm text-white/55 mt-1">may 19, 2026</p>
              <p className="text-sm text-white/45 mt-3">initial walkthrough assessment</p>
            </div>

            <div className="mt-7 flex justify-between items-center">
              <h2 className="text-sm uppercase tracking-widest text-white/70">rooms & readings</h2>
              <span className="text-xs text-blue-400 border border-blue-500/30 rounded-full px-3 py-1">
                24 readings
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 overflow-hidden">
              <div className="bg-white/[0.06] px-4 py-3 flex justify-between">
                <span className="font-mono text-sm">living room</span>
                <span className="text-xs text-white/50">5</span>
              </div>

              <table className="w-full text-xs">
                <thead className="bg-white/[0.04] text-white/45 uppercase">
                  <tr>
                    <th className="text-left p-3">device</th>
                    <th className="text-left p-3">distance</th>
                    <th className="text-left p-3">value</th>
                    <th className="text-left p-3">unit</th>
                  </tr>
                </thead>
                <tbody>
                  {readings.map((r) => (
                    <tr key={r[0]} className="border-t border-white/10">
                      <td className="p-3">{r[0]}</td>
                      <td className="p-3 text-white/60">{r[1]}</td>
                      <td className="p-3 text-blue-300">{r[2]}</td>
                      <td className="p-3 text-white/60">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={() => setScreen("add")}
              className="absolute bottom-8 right-6 h-16 w-16 rounded-full bg-blue-600 text-4xl shadow-xl shadow-blue-600/30"
            >
              +
            </button>
          </section>
        )}

        {screen === "add" && (
          <section className="relative z-10 px-5 pb-24">
            <button onClick={() => setScreen("detail")} className="text-white/60 mt-4">← back</button>

            <h1 className="mt-6 text-center text-sm uppercase tracking-[0.3em]">add reading</h1>

            <form className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 space-y-5">
              <Field label="room" placeholder="living room" />
              <Field label="device" placeholder="wifi router" />
              <Field label="distance cm" placeholder="50 cm" />
              <Field label="value" placeholder="1.32" />

              <label className="block">
                <span className="text-xs uppercase tracking-widest text-white/45">unit</span>
                <select className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none">
                  <option>mG</option>
                  <option>V/m</option>
                  <option>µW/m²</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs uppercase tracking-widest text-white/45">notes</span>
                <textarea
                  placeholder="enter notes..."
                  className="mt-2 min-h-[120px] w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/30"
                />
              </label>

              <button className="w-full rounded-xl bg-blue-600 py-4 text-sm font-mono tracking-widest">
                ✓ save reading
              </button>
            </form>
          </section>
        )}

        {/* bottom nav */}
        <nav className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#07101d]/90 backdrop-blur px-6 py-4 flex justify-between text-[11px] text-white/45">
          <button onClick={() => setScreen("home")} className={screen === "home" ? "text-blue-400" : ""}>home</button>
          <button onClick={() => setScreen("detail")} className={screen === "detail" ? "text-blue-400" : ""}>audits</button>
          <button>exports</button>
          <button>settings</button>
        </nav>
      </div>
    </main>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
      <p className="text-2xl font-mono">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-widest text-white/45">{label}</p>
    </div>
  )
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-white/45">{label}</span>
      <input
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/30"
      />
    </label>
  )
}