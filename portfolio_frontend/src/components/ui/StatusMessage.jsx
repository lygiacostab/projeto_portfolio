import styles from './StatusMessage.module.css';

export default function StatusMessage({ type = 'info', children }) {
  return (
    <p className={`${styles.message} ${styles[type]}`} role={type === 'error' ? 'alert' : 'status'}>
      {children}
    </p>
  );
}
