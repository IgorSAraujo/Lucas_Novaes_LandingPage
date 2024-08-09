import styles from "./styles.module.scss"
import projetoImg from "../../../../../src/assets/projeto_null.png"

export const Project = ({ name }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfos}>
          <img src={projetoImg} alt="Projeto" />
          <div className={styles.projectInfos}>
            <h2 className="textH2">{name}</h2>
            <span className="textP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
