import {NextApiRequest, NextApiResponse} from "next";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    res.write(JSON.stringify({name: '老王'}))
    res.end()
}

export default posts;