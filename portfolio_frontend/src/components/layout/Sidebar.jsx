import { GraduationCap, MapPin, Mail, Linkedin } from 'lucide-react';
import ProfileInfoItem from './ProfileInfoItem';
import styles from './Sidebar.module.css';

export default function Sidebar({ profile }) {
  const { name, role, photoUrl, location, email, bio } = profile;

  return (
    <div className={styles.sidebar}>
      <img className={styles.photo} src={photoUrl} alt={`Foto de ${name}`} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.role}>{role}</p>

      <hr className={styles.divider} />

      <ul className={styles.info}>
        <ProfileInfoItem icon={MapPin} label="Localização" lines={[location]} />
        <ProfileInfoItem icon={Mail} label="E-mail" lines={[email]} href={`mailto:${email}`} />
      </ul>

      <hr className={styles.divider} />

      <p className={styles.bio}>{bio}</p>
    </div>
  );
}
