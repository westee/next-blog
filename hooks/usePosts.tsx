import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    //这种写法可以防止函数创建多次
    const clickMe = useCallback(() => {
        console.log('click')
    }, [])
    useEffect(() => {
        axios.get("/api/v1/posts").then((res) => {
                console.log(res)
                setPosts(res.data)
            },
            (err) => {
                console.log(err)
            })
        console.log('click')
    }, [])
    return {posts, setPosts, isLoading, setIsLoading, isEmpty, setIsEmpty}
}