import styles from './ProfileInfoItem.module.css';

export default function ProfileInfoItem({ icon: Icon, label, lines, href }) {
  return (
    <li className={styles.item}>
      <Icon className={styles.icon} size={22} aria-hidden="true" />
      <div>
        <strong className={styles.label}>{label}</strong>
        {lines.map((line) =>
          href ? (
            <a key={line} className={styles.line} href={href} target="_blank" rel="noreferrer">
              {line}
            </a>
          ) : (
            <span key={line} className={styles.line}>{line}</span>
          )
        )}
      </div>
    </li>
  );
}
