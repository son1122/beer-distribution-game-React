import "./About.css"

const About = () => {
    return (
        <div className="about-container">
            <h1>ABOUT</h1>
            <img style={{width: "60%"}} src={require('../../image/pineTree.jpeg')}/>
            <h3>This Project is part of SEI program from GA And <a
                target="_blank"
                href="https://github.com/son1122/beer-distribution-game-React" rel="noreferrer"
            >HERE IS Source</a></h3>

        </div>
    );
}

export default About;
