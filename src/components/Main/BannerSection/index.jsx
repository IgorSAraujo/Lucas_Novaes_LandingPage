import styles from "./styles.module.scss"
import photo01 from "../../../../src/assets/lucas_ademy_banner.png"
import photo02 from "../../../../src/assets/lucas_banner.png"
export const BannerSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bannerContainer}>
          <div className={styles.containerImg}>
            <img
              className={`${styles.profilePhoto} ${styles.primary}`}
              src={photo01}
              alt="Foto do Candidato Lucas junto ao vice Ademy"
            />
            <img
              className={`${styles.profilePhoto} ${styles.secondary}`}
              src={photo02}
              alt="Foto do Candidato Lucas Novaes"
            />
            <span
              className={`${styles.profilePhoto} ${styles.background}`}
            ></span>
          </div>
          <div className={styles.containerInfos}>
            <div className={styles.containerNames}>
              <h1 className="textH1">
                Com Lucas e Ademy, a Nova Cabrobó começa agora!
              </h1>
              <h2 className="textH2">Saúde e Bem-Estar para todos.</h2>
            </div>
            <div className={styles.containerSpan}>
              <span className="textH3">
                "Precisamos ter políticos servindo o povo não o povo servindo os
                políticos."
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
