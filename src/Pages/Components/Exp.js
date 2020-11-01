import React from 'react'
import GoTo from '../Images/GoTo.svg'

const SkillsExp = (props) => {
    let out = []
    for (let i = 0; i < props.skills.length; i++) {
        out.push(<p className='exp-skill'>#{props.skills[i]}</p>)
    }
    return out;
}
const Content = (props) => {
    return (
        <div className='exp-content-div' id={props.theID}>
            <div className='exp-content'>
                <p className='exp-content-title'>@{props.title} <a href={props.link} style={{ visibility: `${props.linkVisibility}` }} className='exp-link'><img alt='' className='project-link-img' src={GoTo} /></a></p>

                <p className='exp-content-sub-title'>{props.typeOfWork} | {props.begin} - {props.end}</p>
                <ul>
                    <li>{props.description1}</li>
                    <br />
                    <li>{props.description2}</li>
                    <br />
                    <SkillsExp skills={props.skills} />
                </ul>
            </div>
        </div>
    )
}

export default Content;