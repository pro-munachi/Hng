import React from 'react'
import './bottom.css'

const Bottom = () => {
    return (
        <div className='bottom'>
            <div className='left'>
                <h3>Profile</h3>
                <div>
                    <p>
                        I am a Software developer with 3+ years of experience working on web applications.
                        I am ambitious and driven, I thrive on challenge and constantly set goals for myself,
                        so I have something to strive towards, and I have Interests in problem solving and community building.
                        I can fit into any of the phases of software development lifecycle.
                        I can also work solo as well as in a team.
                    </p>
                    <p> LANGUAGES:	JAVASCRIPT, HTML, CSS.
                        FRAMEWORKS/LIBRARIES:	REACT, REDUX, EXPRESS JS.
                        TOOLS AND TECHNOLOGIES:	GIT, GITHUB, STYLED COMPONENTS, NETLIFY, BOOTSTRAP, REST API, MATERIAL UI, MONGODB, NPM, POSTMAN.
                    </p>
                </div>
                <div className='details'>
                    <div>
                        <h3>Personal Details</h3>
                        <span><h4>Address</h4></span>
                        <p>Owerri, Imo State, Nigeria</p>
                    </div>
                    <div className='contact'>
                        <h3>Contacts</h3>
                        <p><span>Git:</span> <a href='https://github.com/pro-munachi' target='_blank' rel='noopener noreferrer' >
                        pro-munachi</a></p>
                        <p><span>Email:</span> <a href='https://madustanley1@gmail.com' target='_blank' rel='noopener noreferrer' >
                        madustanley1@gmail.com</a></p>
                        <p><span>Linkedin:</span> <a href='https://www.linkedin.com/in/munachiso' target='_blank' rel='noopener noreferrer' >
                        munachiso</a></p>
                        <p><span>Phone:</span><a href='(+234)8165998708' target='_blank' rel='noopener noreferrer' > +234 8165 9987 08</a></p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h3>Work Experience</h3>
                <ul>
                    <li>Frontend Web Developer</li>
                    <div className='line'>
                        <span>Freelance</span>
                        <p>Worked remotely with a senior web developer to create an eye clinic website. 
                        React was used for this project and github was used to Interact remotely during the project.
                        </p>
                    </div>
                </ul>
                <ul>
                    <li>Fullstack Web Developer</li>
                    <div className='line'>
                        <span>Freelance</span>
                        <p>Built an e-commerce website for buying and selling of electronic materials. 
                            React, Redux, Express js, Bootstrap were used for this project.
                        </p>
                    </div>
                </ul>
                <ul>
                    <li>Frontend Web Developer</li>
                    <div className='line'>
                        <span>Freelance</span>
                        <p>Built a meme generator that generates random memes. React was used for building the website
                            and styled components was used for styling it.
                        </p>
                    </div>
                </ul>
                <div className='education'>
                    <h3>Education</h3>
                    <ul>
                        <li>B.Tech, Urban and Regional Planning</li>
                        <p>Federal University Of Technology Owerri, 2015 - 2020</p>
                    </ul>
                </div>
                <div className='education'>
                    <ul>
                        <li>Responsive Web Design</li>
                        <p>Freecodecamp.org, 2019</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bottom
