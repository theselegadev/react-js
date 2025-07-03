import styles from "./CarDetails.module.css"

const CarDetails = ({brand, color, isNew}) => {
  return (
    <div className={isNew ? styles.green : styles.red}>
        <ul>
            <li>{brand}</li>
            <li>{color}</li>
        </ul>
        <p>{isNew ? "É novo" : "Não é novo"}</p>
    </div>
  )
}

export default CarDetails