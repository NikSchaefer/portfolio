import React from 'react'
import umbrella from '../Images/Projects/Umbrella.PNG'
import portfolio from '../Images/Projects/Portfolio.PNG'
import Box from '../Images/Projects/Box.PNG'
import Project from '../Components/Project'
import Title from '../Components/SectionTitle'
import { ArrowSvg } from './Footer'

const Projects = () => {
    return (
        <div className='project-primary-div'>
            <ArrowSvg id='project-arrow' height='90' color='var(--color-accent)' />
            <Title titleId='title-project' hr='hr-project' title='Projects' />
            <div id='projects'>
                <Project
                    title='Umbrella'
                    description='Umbrella is a Mobile Weather App that makes calls to an API.
                    Website + Mobile Development'
                    image={umbrella}
                    github='https://github.com/NikSchaefer/umbrella_website'
                    link='https://theumbrella.vercel.app/'
                    skills={['React', 'HTML', 'CSS', 'React Native', "Javascript"]}
                />
                <Project
                    title='Portfolio'
                    description='This Very Portfolio Before you'
                    image={portfolio}
                    github='https://github.com/NikSchaefer/portfolio'
                    link="https://nikschaefer.vercel.app/"
                    skills={['React', 'HTML', 'CSS', "Javascript"]}
                />
                <Project
                    title='Box Shadow Creator'
                    description='A Simple Website to Quickly and Easily Develop CSS Box Shadows'
                    image={Box}
                    github='https://github.com/NikSchaefer/box-shadow-maker'
                    link='https://box-shadow.vercel.app/'
                    skills={['React', 'HTML', 'CSS', "Javascript"]}
                />
            </div>
        </div>
    )
}

export default Projects;
