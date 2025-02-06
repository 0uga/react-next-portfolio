import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

  // JavaScriptの定数や式などを書くことができる
  //const name = "世界";


const data: {contents: News[] } = {
  contents:[
    {
      id:"1",
      title:"渋谷オフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
      name: "更新情報"
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

  // HTMLのようなマークアップを書くことができる
  //JavaScriptを書いたり、参照する際には{}で囲む
export default function Home() {
  const sliceDate = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image 
          className={styles.bgimg} 
          src="/ogp.png" 
          alt=""
          width={4000}
          height={1200} 
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceDate} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}