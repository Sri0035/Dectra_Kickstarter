import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';

const Layout = (props) =>{
    return (
        <Container>
        <div>
        <Head>
            <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
            />
        </Head>
            <Header />
            {props.children}
        </div>
        
        </Container>
    );
};

export default Layout;