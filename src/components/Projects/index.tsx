import Reveal from '@/components/Reveal';
import { projects } from '@/data/site';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section
      className={`section ${styles.projects}`}
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <h2 className={styles.title} id="projects-title">
              Проекты <span className={styles.accent}>2018 - 2025</span>
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal as="div" key={project.name} delay={(i % 3) * 80}>
              <a
                className={styles.card}
                href={project.url}
                target="_blank"
                rel="noopener"
                aria-label={`${project.name} - открыть сайт`}
              >
                <span className={styles.media}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export, images pre-sized in /public */}
                  <img
                    src={project.image}
                    alt={`Превью сайта ${project.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className={styles.body}>
                  <h3 className={styles.cardName}>{project.name}</h3>
                  <p className={styles.cardSummary}>{project.summary}</p>
                  <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                      <li className={styles.tag} key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
