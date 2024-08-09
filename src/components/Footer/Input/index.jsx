import styles from "./styles.module.scss"

export const Input = ({ label, ...rest }) => {
  return (
    <div className={styles.container}>
      <label className="textP">{label}</label>
      <input className="textPh" {...rest} />
    </div>
  )
}
