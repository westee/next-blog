import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {getDatabaseConnection} from "../lib/getDatabaseConnection";
import {GetServerSideProps} from "next";
import {Post} from "../src/entity/Post";

type Props = {
    posts: Post[]
}

export default function Home(props: Props ) {
    const {posts} = props;
    console.log(posts);
    return (
        <div>
            <h1>文章列表</h1>
            {
                posts.map(p => <div key={p.id}>
                    <Link href={`/posts/${p.id}`}>
                        <a>{p.title}</a>
                    </Link>
                </div>)
            }
        </div>
    )
}

export const getServerSideProps:GetServerSideProps = async () => {
    var connection = await getDatabaseConnection();
    const posts = await connection.manager.find(Post);
    console.log(posts);
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    }
}