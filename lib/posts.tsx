import path from "path";
import fs,{promises as fsPromise} from "fs";
import matter from 'gray-matter';
export const getPosts = async ()=>{
    const dir = path.join(process.cwd(), 'markdown');
    const paths = await fsPromise.readdir(dir)
    const files = paths.map(i => {
        const {data: {title, date}, content} = matter(fs.readFileSync(path.join(dir, i), 'utf-8'))
        return {
            id: title,
            title,
            content,
            date
        }
    })
    return files
}

