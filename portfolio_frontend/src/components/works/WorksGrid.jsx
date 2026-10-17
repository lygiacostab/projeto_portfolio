import WorkCard from './WorkCard';
import styles from './WorksGrid.module.css';

export default function WorksGrid({ works }) {
  return (
    <section className={styles.grid}>
      {works.map((work) => (
        <WorkCard key={work.id} work={work} />
      ))}
    </section>
  );
}
