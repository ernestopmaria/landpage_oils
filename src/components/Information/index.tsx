import styles from './styles.module.scss'

export function Information(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                Entregas grátis em Luanda para todas compras superiores á 10.000akz
            </div>

        </header>
    )
}