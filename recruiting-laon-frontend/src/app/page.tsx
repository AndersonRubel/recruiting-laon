import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";
import Title from "@/components/title";
import SubTitle from "@/components/sub-title";
import Description from "@/components/description";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              className="w-100"
              height={400}
              src="https://preview.redd.it/algumas-capas-de-filmes-da-if-baseado-nos-%C3%BAltimos-dias-e-v0-ixbcv621k2ga1.jpg?width=640&crop=smart&auto=webp&s=50e5901ae5102fad9eec6328f80b8281d90d89d8"
            />
            <Button text="Assistir Trailer" loading={false} />
          </div>
          <div className="row col-9" style={{ marginLeft: "10px" }}>
            <div className="col-12 mb-5">
              <h1 className="text-white">Troll </h1>
            </div>
            <Description
              col="col-12"
              title={"Sinopse"}
              text={
                "Nada na vida de Cassie é o que parece ser. Ela é perversamente inteligente, tentadoramente astuta e ainda vive uma vida dupla secreta à noite. Agora, um encontro inesperado está prestes a dar a Cassie a chance de corrigir os erros do passado."
              }
            />
            <Description
              col="col-6"
              title={"Elenco"}
              text={
                "Carey Mulligan, Bo Burnham, Alison Brie, Laverne Cox, Jennifer Coolidge e outros."
              }
            />
            <Description
              col="col-6"
              title={"Prêmios"}
              text={
                "Oscar de Melhor Roteiro Original, Critics Choice Award de Melhor Atriz e outros."
              }
            />
            <Description
              col="col-6"
              title={"Diretor"}
              text={"Emerald Fennell"}
            />
            <Description col="col-6" title={"Avaliações"} text={"IMDb: 7.5"} />
          </div>
        </div>
      </div>
    </main>
  );
}
