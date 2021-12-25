import {getPost, getPostIds} from "../../lib/posts";
import exp from "constants";
import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import {getDatabaseConnection} from "../../lib/getDatabaseConnection";
import {Post} from "../../src/entity/Post";

type Props = {
    post: Post
}
const postShow: NextPage<Props> = (props) => {
    const post = props.post
    return (
        <div>
            <h1>{post.title}</h1>
            <article dangerouslySetInnerHTML={ {__html:post.content }  }></article>
        </div>
    )
}

export default postShow;


export const getServerSideProps:GetServerSideProps<any, {id: string}> = async (content) => {
    const id = content.params.id
    // const post = await getPost(id);
    const connection = await getDatabaseConnection();
    const post = await connection.manager.findOne(Post, id);

    console.log(post);
    return {
        props: {
            post: JSON.parse(JSON.stringify(post))
        }
    }
}

