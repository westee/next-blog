import {getPost, getPostIds} from "../../lib/posts";
import exp from "constants";
import {GetStaticProps, NextPage} from "next";

type Props = {
    post: Post
}
const postShow: NextPage<Props> = (props) => {
    const post = props.post
    return (
        <div>
            <h1>{post.title}</h1>
            <article dangerouslySetInnerHTML={ {__html:post.html }  }></article>
        </div>
    )
}

export default postShow;

export const getStaticPaths = async () => {
    const ids = await getPostIds();

    return {
        paths: ids.map(i => ({
            params: {
                id: i.id
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (x: any) => {
    const id = x.params.id
    const post = await getPost(id);
    console.log(post);
    return {
        props: {
            post
        }
    }
}

