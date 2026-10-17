import { MessageCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { WHATSAPP_NUMBER } from '../config';
import { buildWhatsappLink } from '../utils/whatsapp';
import styles from './ContactPage.module.css';

const DEFAULT_MESSAGE = 'Olá! Vi as publicações sobre os seus serviços e gostaria de fazer um orçamento.';

export default function ContactPage() {
  const whatsappLink = buildWhatsappLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE);

  return (
    <>
      <PageHeader
        title="Entrar em contato"
        subtitle="Quer fazer um orçamento ou tirar dúvidas? Me chame no WhatsApp."
      />

      <a className={styles.whatsappButton} href={whatsappLink} target="_blank" rel="noreferrer">
        <MessageCircle size={22} aria-hidden="true" />
        Chamar no WhatsApp
      </a>
    </>
  );
}