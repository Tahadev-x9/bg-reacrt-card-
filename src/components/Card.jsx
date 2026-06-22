import React from 'react'
import styles from "./Card.module.css";

const Card = (props) => {
    return (

    


           <div
  className={styles.card}
  style={{
    backgroundImage: `url(${props.image})`,
  }}
>

                <div className={styles.overlay}>

                    <div className={styles.top}>
                        <h1>{props.place}</h1>
                        <span className={styles.price}>{props.price}</span>
                    </div>

                    <p className={styles.desc}>
                       {props.description}
                    </p>

                    <div className={styles.tags}>
                        <span>{props.badge}</span>
                        <span>{props.vibesLeft}</span>
                    </div>

                    <button className={styles.btn}>Add to Cart</button>
                </div>

            </div>



    );
}

export default Card
