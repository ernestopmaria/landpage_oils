

import styles from './styles.module.scss'

export function Nav(){
    return(
        <header className={styles.headerContent}>
            <div >
                <nav>
                    <a href="">Home</a>
                    <a href=""> Produtos </a>
                    <a href=""> Serviços</a>
                    <a href="">Dicas  </a>
                    <a href="">Quem somos</a>
                </nav>
       
            </div>
        </header>
    )
}