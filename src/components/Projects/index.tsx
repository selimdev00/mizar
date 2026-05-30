import Reveal from '@/components/Reveal';
import PixelDecor from '@/components/PixelDecor';
import { projects } from '@/data/site';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section
      className={`section ${styles.projects}`}
      id="projects"
      aria-labelledby="projects-title"
    >
      <PixelDecor shape="smiley" size={44} variant="spin" style={{ top: '8%', right: '7%' }} />
      <PixelDecor shape="smiley" size={30} style={{ bottom: '12%', left: '5%' }} />

      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <h2 className={styles.title} id="projects-title">
              Проекты <span className={styles.accent}>2018 — 2025</span>
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal as="div" key={project.name} delay={(i % 3) * 80}>
              <article className={styles.card}>
                <h3 className={styles.cardName}>{project.name}</h3>
                <p className={styles.cardSummary}>{project.summary}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li className={styles.tag} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
