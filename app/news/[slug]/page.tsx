import { getNewsDetail } from "@/app/_libs/microcms";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    // return <div>{JSON.stringify(props)}</div>
    const data = await getNewsDetail(params.slug);
    
    return <div>{data.title}</div>;
}