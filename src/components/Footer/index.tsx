import { SocialIcon } from 'react-social-icons';
import styles from './styles.module.scss'

export function Footer(){
    return(
        
        <footer className={styles.footerContainer}>
          <div className={styles.content}>
          <span>Nosso espaço: MORRO BENTO Rua do kikagil | Luanda, Angola <br />
             Contacto: (+244) 924 046 900 | 939 620 501 <br />
            Horário de atendimento: Segunda à Sexta - Feira: 8:00H - 18:00H
            </span>
            <div className={styles.socialmedias}>
              <span>Siga-nos:</span>
              <div className={styles.icons}>
              <SocialIcon url="https://facebook.com/jaketrent" />
              <SocialIcon url="https://instagram.com/jaketrent" />
              </div>

            </div>
            </div>
        </footer>
        

    
    )
}