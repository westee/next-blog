import React, {useCallback} from "react";
import Link from 'next/link'
import bing from 'assets/images/bing.jpeg'

console.log(bing)
export default function First() {
    //这种写法可以防止函数创建多次
    const clickMe = useCallback(()=>{
        console.log('click')
    }, [])
    return (
        <div>
            <img src={bing.src} alt=""/>
            <button onClick={clickMe}> click me</button>
            <Link href="/"><a >到首页</a></Link>
        </div>
    )
}