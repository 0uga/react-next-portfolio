import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    try {
        const data = await getNewsDetail(params.slug);
        return (
            <>
                <Article data={data} />
                <div className={styles.footer}>
                    <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
                </div>
            </>
        );
    } catch (error) {
        console.error("Error fetching news detail:", error);
        return <div>エラーが発生しました。詳細を取得できません。</div>;
    }
}