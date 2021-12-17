import React, {useCallback, useState} from "react";
import Link from 'next/link'
import bing from 'assets/images/bing.jpeg'

type Post = {
    id: string
}
console.log(bing)
export default function First() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    //这种写法可以防止函数创建多次
    const clickMe = useCallback(()=>{
        console.log('click')
    }, [])
    return (
        <div>
            <h1>文章列表</h1>
            {
                isLoading ? <div>加载中</div> :
                    isEmpty ? <div>暂无数据</div> :
                        posts.map(p => <div key={p.id}>{p.id}</div> )
            }
            <img src={bing.src} alt=""/>
            <button onClick={clickMe}> click me</button>
            <Link href="/"><a >到首页</a></Link>
        </div>
    )
}