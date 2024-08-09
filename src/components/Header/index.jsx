import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <span className="textPb">Sobre Nós</span>
          <span className="textPb">Planejamentos</span>
          <span className="textPb">Contato</span>
        </nav>
      </div>
    </>
  )
}
