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
        <div className={styles.container}>
            {posts.map(post => <div>{post.title}</div>)}
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