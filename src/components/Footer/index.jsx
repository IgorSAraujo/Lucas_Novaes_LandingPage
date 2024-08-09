import { Input } from "./Input"
import styles from "./styles.module.scss"

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfos}>
          <h1 className="textH1">Contate-nos</h1>
          <form className={styles.containerContacts}>
            <Input
              label={"Nome"}
              type="text"
              placeholder="Digite aqui seu nome"
            />
            <Input
              label={"E-Mail"}
              type="email"
              placeholder="Digite aqui seu e-mail"
            />
            <Input
              label={"Telefone"}
              type="tel"
              required
              placeholder="(00) 90000-0000"
            />
            <button className="textPb" type="submit">
              Saiba Mais
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
