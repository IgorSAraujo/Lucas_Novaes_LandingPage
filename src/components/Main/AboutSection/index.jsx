import styles from "./styles.module.scss"

export const AboutSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfos}>
          <h2 className="textH1">Sobre Nós</h2>
          <p className="textP">
            Dr.Lucas Novaes, um renomado cardiologista, é um nome de destaque em
            Cabrobó, Pernambuco, pertencente a uma família tradicional que há
            gerações constrói sua história na cidade. Dr. Ademy, cuja história
            começa ao lado de seu pai como feirante, seguiu seu caminho com
            determinação, formou-se em medicina no exterior e retornou ao Brasil
            para validar seu diploma. Hoje, é um pediatra dedicado. Ambos
            candidatos casados e provenientes de famílias evangélicas, estão
            empenhados em fazer a diferença no progresso de Cabrobó.
          </p>
        </div>
      </div>
    </>
  )
}
