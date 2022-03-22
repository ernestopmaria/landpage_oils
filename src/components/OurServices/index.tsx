
import styles from './styles.module.scss'

export function Services(){
    return(
        <div className={styles.main}>
          
          <div className={styles.content}>
           
            <h1>Hidratação</h1>
            <span>Toda mulher que não dispensa os cuidados com a beleza quer exibir uma pele hidratada 
              e sedosa, certo? Mas, ao contrário do que muita gente pensa, para conquistar essa aparência,
               não basta aplicar um creme hidratante e pronto: é preciso seguir algumas recomendações para que
                a cútis fique sempre saudável e com 
              o aspecto desejado - seja ela mista, ressecada ou oleosa. Confira quais são elas! </span>
              <p className={styles.price}> Apenas 4 000,00 AOA</p>
          

          </div>
          <div className={styles.services}>        
         <img src="/images/service.jpg" alt=""/>

          </div>      
   

        </div>
    )
}