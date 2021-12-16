import path from "path";
import * as fs from "fs";
import matter from 'gray-matter';
export const getPosts =async ()=>{
    const dir = path.join(process.cwd(), 'markdown');
    const paths = await fs.promises.readdir(dir)
    const files = paths.map(i => {
        return matter(fs.readFileSync(path.join(dir, i), 'utf-8'))
    })
    return files
}

