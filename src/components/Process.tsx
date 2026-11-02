import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { LeafIcon, SackIcon, ScaleIcon, TruckIcon } from "./Icons";

const STEPS = [
  {
    no: "01",
    icon: <LeafIcon className="w-6 h-6" />,
    title: "We buy from local farms",
    text: "Farmers bring cinnamon, pepper, copra and more to our counter in Mawathagama — or we collect from the farm gate.",
  },
  {
    no: "02",
    icon: <ScaleIcon className="w-6 h-6" />,
    title: "We grade & weigh fairly",
    text: "Every lot is cleaned, graded by hand and weighed in front of you at an agreed daily rate.",
  },
  {
    no: "03",
    icon: <SackIcon className="w-6 h-6" />,
    title: "We pack your bulk order",
    text: "Sacks, bales or crates packed to order — from small trade loads to full truck orders.",
  },
  {
    no: "04",
    icon: <TruckIcon className="w-6 h-6" />,
    title: "We deliver across the island",
    text: "Loaded at Mawathagama and delivered anywhere in Sri Lanka. Today's rate is one WhatsApp message away.",
  },
];

/** How far down the viewport the "reading line" sits (0–1). */
const ANCHOR = 0.68;

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<boolean[]>(() => STEPS.map(() => false));

  useEffect(() => {
    /* reduced motion: show the finished state, no scroll animation */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      setActive(STEPS.map(() => true));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const anchor = vh * ANCHOR;

      /* 0 → 1 as the step list travels past the reading line */
      const raw = (anchor - rect.top) / rect.height;
      const p = Math.min(1, Math.max(0, raw));
      setProgress((prev) => (Math.abs(prev - p) < 0.002 ? prev : p));

      /* a step pops in when its node crosses the reading line */
      const next = nodeRefs.current.map((n) => {
        if (!n) return false;
        const r = n.getBoundingClientRect();
        return r.top + r.height / 2 < anchor + 10;
      });
      setActive((prev) =>
        prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next
      );
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section aria-label="Our process" className="py-20 sm:py-24 bg-cream border-t border-line overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase text-clay">
            <span className="h-px w-8 bg-clay/60" />
            How we work
          </p>
          <h2 className="mt-5 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-espresso">
            Our process, in four steps.
          </h2>
          <p className="mt-4 text-bark leading-relaxed">
            The same routine we have followed since 1987 — from the farm gate to your godown.
          </p>
        </Reveal>

        <div ref={trackRef} className="relative mt-12 md:mt-16">
          {/* spine: faint track + scroll-filled highlight */}
          <div
            aria-hidden="true"
            className="absolute left-7 md:left-1/2 -translate-x-1/2 top-[52px] bottom-[52px] md:top-[60px] md:bottom-[60px] w-[3px] rounded-full bg-line"
          >
            <div
              className="absolute inset-x-0 top-0 rounded-full bg-clay"
              style={{ height: `${progress * 100}%` }}
            />
            {progress > 0.01 && progress < 0.999 && (
              <span
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-clay ring-4 ring-clay/20"
                style={{ top: `${progress * 100}%` }}
              />
            )}
          </div>

          {STEPS.map((s, i) => {
            const on = active[i];
            const left = i % 2 === 0;
            return (
              <div
                key={s.no}
                className="relative flex md:grid md:grid-cols-[1fr_96px_1fr] md:items-center gap-5 md:gap-0 py-6 md:py-8"
              >
                {/* node on the path */}
                <div
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className="relative z-10 shrink-0 md:col-start-2 md:row-start-1 md:mx-auto"
                >
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-500 ${
                      on
                        ? "bg-clay border-clay text-cream shadow-lg shadow-clay/30 scale-100"
                        : "bg-paper border-line text-fawn scale-90"
                    }`}
                  >
                    <span
                      className={`transition-all duration-500 ${
                        on ? "scale-100 rotate-0" : "scale-75 -rotate-12"
                      }`}
                    >
                      {s.icon}
                    </span>
                  </div>
                </div>

                {/* step card — alternates sides on desktop, stacks right on mobile */}
                <div
                  className={`flex-1 min-w-0 md:row-start-1 md:w-full md:max-w-md transition-all duration-700 ease-out ${
                    left
                      ? "md:col-start-1 md:justify-self-end"
                      : "md:col-start-3 md:justify-self-start"
                  } ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                  <div
                    className={`rounded-xl border bg-paper p-6 transition-all duration-500 ${
                      on
                        ? "border-clay/50 shadow-[0_18px_40px_-20px_rgba(42,29,17,0.3)]"
                        : "border-line"
                    }`}
                  >
                    <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-fawn">
                      Step {s.no}
                    </p>
                    <h3 className="mt-2 font-display font-semibold text-xl sm:text-2xl text-espresso leading-snug">
                      <span
                        className="bg-[linear-gradient(to_top,rgba(163,79,38,0.22)_38%,transparent_38%)] bg-no-repeat transition-[background-size] duration-700 ease-out"
                        style={{
                          backgroundSize: on ? "100% 100%" : "0% 100%",
                          backgroundPosition: "0 100%",
                        }}
                      >
                        {s.title}
                      </span>
                    </h3>
                    <p className="mt-2.5 text-sm text-bark leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-6 text-center">
          <p className="inline-flex items-center gap-3 text-sm font-bold text-bark">
            <span className="w-8 h-px bg-clay/50" aria-hidden="true" />
            No middlemen, no waiting.
            <span className="w-8 h-px bg-clay/50" aria-hidden="true" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
