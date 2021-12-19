import {NextPage} from "next";
import Link from "next/link";
import {getPosts} from "../../lib/posts";

type Props = {
    posts: Post[]
}

const PostIndex:NextPage<Props> = (props) => {
    const {posts} = props;
    console.log(posts);
    return (
        <div>
            <h1>文章列表</h1>
            {
                posts.map(p => <div key={p.id}>
                    <Link href={`/posts/${p.id}`}>
                        <a>{p.id}</a>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default  PostIndex;

export const getStaticProps = async () => {
   const posts = await getPosts();
   return {
       props: {
           posts
       }
   }
}