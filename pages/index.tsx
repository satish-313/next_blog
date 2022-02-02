import Head from "next/head";
import styles from "../styles/Home.module.css";

// component
import Nav from "../component/Navbar";
import Articles from "../component/Articles";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="web development, coding ,blogging" />
      </Head>
      <div>
        <h1 className={styles.site}>SenoCode</h1>
        <Nav />
      </div>
      <div className={styles.articles}>
        <u>Article</u>
      </div>
      <Articles/>
      <Articles/>
    </div>
  );
}
