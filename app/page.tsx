import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

  // JavaScriptの定数や式などを書くことができる
  //const name = "世界";




  // HTMLのようなマークアップを書くことができる
  //JavaScriptを書いたり、参照する際には{}で囲む
export default async function Home() {

const data = await getNewsList({
  limit: TOP_NEWS_LIMIT,
});

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>React-Next-Portfolio</h1>
          <p className={styles.description}>
            自己紹介サイト
          </p>
        </div>
        <Image 
          className={styles.bgimg} 
          src="/background2.jpg" 
          alt=""
          width={4000}
          height={1200} 
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}