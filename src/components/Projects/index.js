import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'
import Icon1 from '../../images/android.jpeg';
import Icon2 from '../../images/react.png';
import Icon3 from '../../images/university.png';

const Projects = () => {
    const urlBookStore = 'https://github.com/HarshalBhalerao/BookStore-App'
    const urlPathFinding = 'https://harshalbhalerao.github.io/PathfindingVisualizer/'
    const urlWebsite = 'https://soaexhibitions.ca/'

    return (
        <ProjectsContainer id = "projects">
            <ProjectsH1>Personal and Group Projects</ProjectsH1>
            <ProjectsWrapper>
                <a href = {urlBookStore} style = {{textDecoration: "none", color: "black"}}>
                    <ProjectsCard>
                        <ProjectsIcon src = {Icon1} />
                        <ProjectsH2>Book Store App</ProjectsH2>
                        <ProjectsP>Developed an Android App with my group in COMP 3350.</ProjectsP>
                    </ProjectsCard>
                </a>
                <a href = {urlPathFinding} style = {{textDecoration: "none", color: "black"}}>
                    <ProjectsCard>
                        <ProjectsIcon src = {Icon2} style = {{width: "200px"}}/>
                        <ProjectsH2>Pathfinding Visualizer</ProjectsH2>
                        <ProjectsP>Developed a React App for visualizing Pathfinding Algorithms.</ProjectsP>
                    </ProjectsCard>
                </a>
                <a href = {urlWebsite} style = {{textDecoration: "none", color: "black"}}>
                    <ProjectsCard>
                        <ProjectsIcon src = {Icon3} style = {{width: "200px"}}/>
                        <ProjectsH2>Exhibition Website</ProjectsH2>
                        <ProjectsP>Developed a exhibition website for School of Arts of University of Manitoba.</ProjectsP>
                    </ProjectsCard>
                </a>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
