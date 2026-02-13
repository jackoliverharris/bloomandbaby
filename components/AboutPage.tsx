import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-start justify-between gap-6">
          <div>
            <p className="font-editorial text-lg italic text-stone-200">Bloom & Baby</p>
            <h1 className="mt-3 font-editorial text-5xl font-light text-[#FCFBF7] md:text-7xl">About Bloom & Baby</h1>
            <p className="mt-4 max-w-2xl text-lg text-stone-200 md:text-xl">
              A gentle, nature-led space for maternal wellbeing, connection, and calm.
            </p>
          </div>
          <a
            href="/"
            className="whitespace-nowrap rounded-full border border-stone-200/50 bg-black/30 px-5 py-2 font-editorial text-lg italic text-stone-100 transition hover:bg-black/50"
          >
            Back to home
          </a>
        </div>

        <div className="space-y-7">
          <article className="rounded-2xl border border-stone-200/30 bg-black/40 p-6 shadow-lg backdrop-blur-[2px] md:p-10">
            <p className="font-editorial text-2xl italic text-stone-200 md:text-3xl">
              Hello, I&apos;m Sheena - a mum of two young boys and the founder of Bloom & Baby.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-stone-100">
              After many years living in London, I now call Bath home. Like so many mothers, I found the transition
              into early motherhood far more complex than I expected. It was beautiful and joyful, yes, but also
              overwhelming, isolating, and at times incredibly hard.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              I experienced postnatal anxiety and often felt as though I was constantly trying to keep my head above
              water.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200/30 bg-black/35 p-6 shadow-lg backdrop-blur-[2px] md:p-10">
            <h2 className="font-editorial text-3xl font-light text-[#FCFBF7] md:text-4xl">How Bloom & Baby began</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              In the middle of all of that, I discovered something surprisingly powerful: stepping outside, taking a
              breath, and spending time in nature.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              Gardening became a quiet anchor for me. Working with my hands, feeling the soil, and watching things
              grow helped me slow down and feel grounded again.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              Being outdoors had a real impact on my mental wellbeing and gave me moments of calm within the chaos of
              motherhood - moments where I could reconnect with myself, not just my role as a mum.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200/30 bg-black/35 p-6 shadow-lg backdrop-blur-[2px] md:p-10">
            <h2 className="font-editorial text-3xl font-light text-[#FCFBF7] md:text-4xl">Why I Created Bloom & Baby</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              When I looked around Bath for mum-and-baby groups, I noticed that many were focused almost entirely on
              the baby - often busy, noisy, or centred around milestones and stimulation. What I could not find much
              of was a space that truly centred mothers&apos; wellbeing (aside from some lovely postnatal yoga classes).
              Even then, it could be hard to fully focus. Juggling the class while tending to your baby often meant
              missing out on the experience.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">Bloom & Baby was created to fill that gap.</p>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              I wanted to offer a calm, nature-based mum and baby group in Bath where:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-stone-100 marker:text-stone-300">
              <li>mothers could slow down</li>
              <li>overwhelm could soften</li>
              <li>connection could happen naturally</li>
              <li>small, achievable moments could restore confidence</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              If your baby needs feeding, settling, or just a cuddle, they will not miss out. Activities are designed
              to be flexible and can be enjoyed at the mother&apos;s own pace, without a strict routine.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-100">
              Bloom & Baby brings together gentle gardening, mindful moments, and baby-friendly nature sensory play in
              a way that supports postnatal wellbeing, reduces isolation, and helps mums feel more grounded and
              supported during early motherhood.
            </p>
          </article>

          <div className="rounded-2xl border border-stone-200/30 bg-[#a78f67]/20 p-6 text-stone-100 shadow-lg backdrop-blur-[2px] md:p-8">
            <p className="font-editorial text-2xl italic leading-relaxed md:text-3xl">
              Bloom & Baby was created from that lived experience: a place where mothers can exhale, feel supported,
              and grow alongside their babies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
