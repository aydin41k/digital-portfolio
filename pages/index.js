import Employments from './employment/index';

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
        <Employments employments={props.data.careers}/>
    )
}

export default Home;