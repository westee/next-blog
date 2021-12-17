import {NextApiRequest, NextApiResponse} from "next";
import {getPosts} from "lib/posts";

const Posts = async (req: NextApiRequest, res: NextApiResponse) => {
    const filesText = await getPosts()
    // console.log(filesText)
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    res.write(JSON.stringify(filesText))
    res.end()
}

export default Posts;