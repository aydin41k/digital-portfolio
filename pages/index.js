import Landing from '../components/landing/Container';
import Intro from '../components/intro/Container';
import Employments from '../components/employment/Container';

import {Fragment} from "react";
import fsPromises from 'fs/promises';

export async function getStaticProps() {
    const jsonData = await fsPromises.readFile('./data/resume.min.json');
    const data = JSON.parse(jsonData);

    return {
        props: {
            data,
        }
    }
}

function Home(props) {
    return (
        <Fragment>
            <Landing data={props.data.profile} layout={props.data.layout}/>
            <Intro data={props.data.profile} contact={props.data.contact_details}/>
            <Employments data={props.data.careers}/>
        </Fragment>
    )
}

export default Home;