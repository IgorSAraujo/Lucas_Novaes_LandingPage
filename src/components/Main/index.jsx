import { AboutSection } from "./AboutSection"
import { BannerSection } from "./BannerSection"
import { ProjectsSection } from "./ProjectsSection"
import styles from "./styles.module.scss"

export const Main = () => {
  return <>
    <BannerSection />
    <AboutSection />
    <ProjectsSection />
  </>
}
