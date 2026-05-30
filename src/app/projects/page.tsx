import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { projects } from '@/data/site';
import styles from './page.module.scss';

export const metadata = {
  title: 'Проекты - friend Lee',
  description:
    'Сайты, сервисы и порталы 2018-2025: от прямых клиентов до крупных интеграторов.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className="section">
          <div className="shell-wide">
            <a className={styles.back} href="/">
              &lt;_ на главную
            </a>
            <h1 className={styles.title}>Проекты</h1>
            <p className={styles.intro}>
              Сайты, сервисы и порталы 2018-2025 - от прямых клиентов до крупных
              интеграторов.
            </p>

            <div className={styles.grid}>
              {projects.map((project) => (
                <a
                  className={styles.card}
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${project.name} - открыть сайт`}
                >
                  <span className={styles.media}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
