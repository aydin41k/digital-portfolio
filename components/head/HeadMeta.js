import Head from 'next/head';
import {useEffect, useState} from "react";

function HeadMeta({data}) {
    const [pageUrl, setPageUrl] = useState('');

    useEffect(() => {
        setPageUrl(window.location.origin)
    },[]);

    const title = `Portfolio - ${data.first_name} ${data.last_name}`;
    const author = `${data.first_name} ${data.last_name}`;
    const description = data.biography;
    const keywords = `digital portfolio resume cv ${data.first_name} ${data.middle_names} ${data.last_name} ${data.title}`;
    const profile_picture = data.profile_picture;

    return (
        <Head>
            <title>{title}</title>
            <meta name="author" content={author}/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="Digital Porfolio" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={profile_picture} />
        </Head>
    )
}

export default HeadMeta;