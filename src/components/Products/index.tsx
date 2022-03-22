

import styles from './styles.module.scss'

export function Products(){
    return(
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.titulo}> Nossos Productos</div>
            <div className={styles.subtitulo}>
            <p>Oleos 100% Naturais | Essenciais</p>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Omnis, aperiam dolore! Doloremque veritatis sint fugiat soluta eligendi magni cum deleniti nesciunt.
               Provident nulla, illo doloribus numquam quas eaque quaerat laudantium.</span>
            </div>
         
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