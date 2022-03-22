
import styles from './styles.module.scss'

export function Products(){
    return(
        <div className={styles.main}>
          <div className={styles.content}>
            <span>Nossos Productos</span>
            <h1>Oleos 100% Naturais | Essenciais</h1>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Omnis, aperiam dolore! Doloremque veritatis sint fugiat soluta eligendi magni cum deleniti nesciunt.
               Provident nulla, illo doloribus numquam quas eaque quaerat laudantium.</span>
          </div>
          <div className={styles.products}>  
          <ul>
            <li>
            <img src="./images/product.jpg" alt=""  />
            <p>Argan</p>
            <p>Oleo  100% Natural</p>
            <p className={styles.price}>4.000,00 AOA</p>
            <p>
              <button type='submit'>
              
                Encomendar</button>
            </p>
            </li>
       
            <li>
            <img src="./images/product.jpg" alt=""  />
            <p>Argan</p>
            <p>Oleo  100% Natural</p>
            <p className={styles.price}>4.000,00 AOA</p>
            <button type='submit'>Encomendar</button>
            </li>
            <li>
            <img src="./images/product.jpg" alt=""  />
            <p>Argan</p>
            <p>Oleo  100% Natural</p>
            <p className={styles.price}>4.000,00 AOA</p>
            <button type='submit'>Encomendar</button>
            </li>
            <li>
            <img src="./images/product.jpg" alt=""  />
            <p>Argan</p>
            <p>Oleo  100% Natural</p>
            <p className={styles.price}>4.000,00 AOA</p>
            <button type='submit'>Encomendar</button>
            </li>
            </ul>      
          

          </div>      
   

        </div>
    )
}