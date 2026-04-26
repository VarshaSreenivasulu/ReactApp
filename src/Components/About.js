import AboutClass from "./AboutClass";

const About = (props)=>{
    const {name} = props;
    return (
        <>
            <h1>ABOUT US {name}</h1>
            <h2><strong>NV</strong> is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</h2>
            <AboutClass name = {"Varsha"} location ={"India"}/>
        </>
    );
}

export default About;