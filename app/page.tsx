import { Download, Mail, MapPin, Github, Linkedin, ArrowDown, GraduationCap, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import ContactForm from "@/components/ContactForm";
import { Section, PlaceholderBadge } from "@/components/Section";
import { profile, about, education, skills, projects, experience, achievements, interests } from "@/data/content";

const btnPrimary = "inline-flex items-center gap-2 rounded bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark";
const btnGhost = "inline-flex items-center gap-2 rounded border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper";

export default function Home() {
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  return (
    <>
      <Nav name={profile.name} />
      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div className="hero-in">
            <p className="text-sm text-muted">Hello, I&apos;m</p>
            <h1 className="mt-1 font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">{profile.name}</h1>
            <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-brand md:text-3xl">{profile.headline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={btnPrimary}><ArrowDown size={16} aria-hidden /> Explore My Work</a>
              <a href={profile.resumeFile} download className={btnGhost}><Download size={16} aria-hidden /> Download Resume</a>
            </div>
          </div>

          {/* Passbook-style profile card: the one distinctive element */}
          <aside aria-label="Profile summary" className="hero-in-late relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-md border border-ink bg-white shadow-[6px_6px_0_#0E5A4A]">
              <div className="flex items-center gap-4 border-b border-ink bg-brand-soft p-5">
                {profile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-20 w-20 rounded object-cover" />
                ) : (
                  <div aria-hidden className="flex h-20 w-20 items-center justify-center rounded bg-brand font-serif text-3xl text-white">{initials}</div>
                )}
                <div>
                  <p className="font-serif text-lg font-semibold leading-tight">{profile.fullName}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted"><MapPin size={14} aria-hidden /> {profile.location}</p>
                </div>
              </div>
              <dl className="divide-y divide-line text-sm">
                {about.aim.map((a) => (
                  <div key={a.label} className="grid grid-cols-[6rem_1fr] gap-3 px-5 py-3">
                    <dt className="text-muted">{a.label}</dt>
                    <dd className="font-medium">{a.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </section>

        <Section id="about" title="About me">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="education" title="Education" intro="Most recent first.">
          <ol className="relative space-y-8 border-l-2 border-brand pl-6">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span aria-hidden className="absolute -left-[2.1rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white"><GraduationCap size={13} /></span>
                <p className="text-sm text-muted">{e.period}</p>
                <h3 className="font-serif text-xl font-semibold">{e.degree}</h3>
                <p>{e.school}</p>
                <p className="mt-1 text-sm font-medium text-brand">{e.result}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-8">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="font-medium">{g.group}{g.note && <span className="ml-2 text-sm font-normal text-muted">{g.note}</span>}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => <li key={s} className="rounded-full bg-brand-soft px-4 py-1.5 text-sm">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" intro="Practical work will appear here.">
          <div className="space-y-6">
            {projects.map((p) => (
              <article key={p.title} className="rounded-md border border-dashed border-ink p-6">
                <h3 className="font-serif text-xl font-semibold">{p.title}{p.placeholder && <PlaceholderBadge />}</h3>
                <p className="mt-2 text-muted">{p.summary}</p>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div><dt className="font-medium">My contribution</dt><dd className="text-muted">{p.role}</dd></div>
                  <div><dt className="font-medium">Outcome</dt><dd className="text-muted">{p.outcome}</dd></div>
                </dl>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs">{p.stack.map((t) => <li key={t} className="rounded bg-brand-soft px-2 py-1">{t}</li>)}</ul>
                <div className="mt-4 flex gap-4 text-sm">
                  {p.github && <a className="inline-flex items-center gap-1 text-brand underline" href={p.github}><Github size={14} aria-hidden /> Code</a>}
                  {p.live && <a className="inline-flex items-center gap-1 text-brand underline" href={p.live}><ExternalLink size={14} aria-hidden /> Live</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" intro="Internships, volunteering and leadership.">
          <ol className="space-y-8 border-l-2 border-line pl-6">
            {experience.map((x) => (
              <li key={x.role}>
                <p className="text-sm text-muted">{x.period}</p>
                <h3 className="font-serif text-xl font-semibold">{x.role}{x.placeholder && <PlaceholderBadge />}</h3>
                <p className="font-medium text-brand">{x.org}</p>
                <p className="mt-1 text-muted">{x.summary}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="achievements" title="Certifications">
          <ul className="grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <li key={a.title} className="rounded-md border border-line bg-white p-5">
                <h3 className="font-medium">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="interests" title="Interests">
          <ul className="flex flex-wrap gap-3 font-serif text-xl">
            {interests.map((i) => <li key={i} className="border-b-2 border-gold pb-1">{i}</li>)}
          </ul>
        </Section>

        <Section id="contact" title="Contact" intro="Open to entry-level IT opportunities.">
          <div className="grid gap-10 md:grid-cols-2">
            <ul className="space-y-4 text-sm">
              <li><a className="inline-flex items-center gap-2 hover:text-brand" href={`mailto:${profile.email}`}><Mail size={18} aria-hidden /> {profile.email}</a></li>
              <li className="flex items-center gap-2"><MapPin size={18} aria-hidden /> {profile.location}</li>
              <li>{profile.links.linkedin
                ? <a className="inline-flex items-center gap-2 hover:text-brand" href={profile.links.linkedin}><Linkedin size={18} aria-hidden /> LinkedIn</a>
                : <span className="inline-flex items-center gap-2 text-muted"><Linkedin size={18} aria-hidden /> LinkedIn link: add in data/content.ts</span>}</li>
              <li>{profile.links.github
                ? <a className="inline-flex items-center gap-2 hover:text-brand" href={profile.links.github}><Github size={18} aria-hidden /> GitHub</a>
                : <span className="inline-flex items-center gap-2 text-muted"><Github size={18} aria-hidden /> GitHub link: add in data/content.ts</span>}</li>
            </ul>
            <ContactForm email={profile.email} />
          </div>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.fullName}</footer>
    </>
  );
}
