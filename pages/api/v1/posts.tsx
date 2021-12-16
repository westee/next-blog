import {NextApiRequest, NextApiResponse} from "next";
import {getPosts} from "../../../lib/posts";

const posts = async (req: NextApiRequest, res: NextApiResponse) => {
    const filesText = await getPosts()
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    res.write(JSON.stringify(filesText))
    res.end()
}

export default posts;