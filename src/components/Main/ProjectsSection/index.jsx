import { Project } from "../ProjectsSection/Project"
import styles from "./styles.module.scss"

export const ProjectsSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfos}>
          <h1 className="textH1">Planejamentos</h1>
          <div className={styles.containerProjects}>
            <Project name="Projeto 1" />
            <Project name="Projeto 2" />
            <Project name="Projeto 3" />
            <Project name="Projeto 4" />
            <Project name="Projeto 5" />
            <Project name="Projeto 6" />
          </div>
        </div>
      </div>
    </>
  )
}
