import React from "react";
import Head from "next/head";
import A from "../A/A";

const MainContainer = ({ children, keywords, title }) => {
    return (
        <div>
            <Head>
                <meta keywords={keywords}></meta>
                <title>{title}</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Home" />
                <A href="/users" text="Users" />
            </div>
            {children}
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;

                    }
                    // Doesn't work because different class create between css-in-js and css styles class create
                    .navbar .link {
                        color: white;
                        background-color: red;
                    }

                `}
            </style>
        </div>


    );
};

export default MainContainer;
