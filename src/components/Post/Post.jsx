import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/brunoemferreira.png"
          />
          <div className={styles.authorInfo}>
            <strong>Bruno</strong>
            <span>teste testes</span>
          </div>
        </div>
        <time title="29 de julho às 00:02" dateTime="2024-07-29 00:02:00">
          Publicado há 1h{" "}
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p><a href=""> 👉 bruno.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}
