import React from "react";
import {UAParser} from 'ua-parser-js'
import {GetServerSideProps, NextPage} from "next";

type Props = {
    browser: {
        name: string
    }
}

const First: NextPage<Props> = (props) => {
    const {browser} = props
    return (
        <div>
            <h1>文章列表</h1>
            <div>{browser.name}</div>
            <div>123</div>
        </div>
    )
}

export default First;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const a = context.req.headers["user-agent"]
    const browser = new UAParser(a).getBrowser()
    console.log();
    return {
        props: {browser}
    }
}