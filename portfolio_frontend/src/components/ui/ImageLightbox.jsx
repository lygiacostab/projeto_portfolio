import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './ImageLightbox.module.css';

// Usa o <dialog> nativo: já traz Esc para fechar, foco preso e camada por cima da página.
export default function ImageLightbox({ src, alt, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
  }, []);

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog} onClose={onClose} onClick={handleBackdropClick}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar imagem">
        <X size={24} />
      </button>
      <img className={styles.image} src={src} alt={alt} />
    </dialog>
  );
}
