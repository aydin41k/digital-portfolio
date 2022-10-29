import Landing from '../components/landing/Container';
import Intro from '../components/intro/Container';
import Educations from '../components/education/Container';
import Employments from '../components/employment/Container';
import Projects from "../components/projects/Container";
import Abilities from "../components/abilities/Container";
import Social from "../components/social/Container";
import Footer from "../components/footer/Footer";

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
            <Intro data={props.data.profile} contact={props.data.contact_details} bgcolor="bg-light"/>
            <Educations data={props.data.educations} bgcolor="bg-white"/>
            <Employments data={props.data.careers} bgcolor="bg-light"/>
            <Projects data={props.data.projects} bgcolor="bg-white"/>
            <Abilities
                bgcolor="bg-light"
                computer_languages={props.data.computer_languages}
                skills={props.data.skills}
                languages={props.data.languages}
                tools={props.data.tools}
            />
            <Social
                bgcolor="bg-white"
                active_citizenship={props.data.active_citizenship}
                interests={props.data.interests}
            />
            <Footer/>
        </Fragment>
    )
}

export default Home;