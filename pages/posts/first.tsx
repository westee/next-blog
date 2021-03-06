import React from "react";

import {usePosts} from "../../hooks/usePosts";
import {NextPage} from "next";

const First:NextPage = () => {
    const {isEmpty,  isLoading,  posts} = usePosts()

    return (
        <div>
            <h1>文章列表</h1>
            {
                isLoading ? <div>加载中</div> :
                    isEmpty ? <div>暂无数据</div> :
                        posts.map(p => <div key={p.id}>{p.id}</div>)
            }
        </div>
    )
}

export default First;