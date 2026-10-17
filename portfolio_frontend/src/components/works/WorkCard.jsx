import { useState } from 'react';
import { Calendar } from 'lucide-react';
import ImageLightbox from '../ui/ImageLightbox';
import { formatDate } from '../../utils/formatDate';
import styles from './WorkCard.module.css';

export default function WorkCard({ work }) {
  const { title, description, imageUrl, date } = work;
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.imageButton}
        onClick={() => setIsImageOpen(true)}
        aria-label={`Ampliar imagem: ${title}`}
      >
        <img className={styles.image} src={imageUrl} alt={title} loading="lazy" />
      </button>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <time className={styles.date} dateTime={date}>
          <Calendar size={16} aria-hidden="true" />
          {formatDate(date)}
        </time>
      </div>

      {isImageOpen && (
        <ImageLightbox src={imageUrl} alt={title} onClose={() => setIsImageOpen(false)} />
      )}
    </article>
  );
}
