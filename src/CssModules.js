import styles from './css/modules/CssModules.module.css';

export default function CssModules () {
   return (
       <div className={styles.container}>
           <h1 className={styles.title}>Produto</h1>
           <p className={styles.paragraph}>R$2900,00</p>
           <button className={styles.button}>Comprar</button>
       </div>
   ) 
}