import React, {useCallback} from "react";
import Link from 'next/link'


console.log('zhixing')
export default function First() {
    //这种写法可以防止函数创建多次
    const clickMe = useCallback(()=>{
        console.log('click')
    }, [])
    return (
        <div>
            <button onClick={clickMe}> click me</button>
            <Link href="/"><a >到首页</a></Link>
        </div>
    )
}