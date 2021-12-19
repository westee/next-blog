import path from "path";
import fs, {promises as fsPromise} from "fs";
import matter from 'gray-matter';

import {marked} from 'marked'

const dir = path.join(process.cwd(), 'markdown');

export const getPosts = async () => {
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

export const getPost = async (id: string) => {
    const {data: {title, date}, content} = matter(fs.readFileSync(path.join(dir, id + '.md'), 'utf-8'))
    console.log(title);
    return {
        id: title,
        title,
        content,
        html: marked.parse(content),
        date
    }
}

export const getPostIds = async () => {
    const paths = await fsPromise.readdir(dir)

    const files = paths.map(i => {
        const {data: {title}} = matter(fs.readFileSync(path.join(dir, i), 'utf-8'))
        return {
            id: title.replace(/\.md$/, ''),
        }
    })
    return files
}
