import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'
import Icon1 from '../../images/android.png';
import Icon2 from '../../images/Pathfinding.png';
import Icon3 from '../../images/soa.png';
import Icon4 from '../../images/Connect4.jpg';
import Icon5 from '../../images/QLearning.png';

const Projects = () => {
    const urlBookStore = 'https://github.com/HarshalBhalerao/BookStore-App'
    const urlPathFinding = 'https://harshalbhalerao.github.io/PathVisualizerV2/'
    const urlWebsite = 'https://soaexhibitions.ca/'
    const urlConnect4 = 'https://github.com/HarshalBhalerao/Connect4-AI'
    const urlQLearning = 'https://github.com/HarshalBhalerao/QLearning-ML'
    const urlAStarVisualizer = 'https://github.com/HarshalBhalerao/Astar-Pathfinding-Visualizer'

    return (
        <ProjectsContainer id = "projects">
            <ProjectsH1>Personal and Group Projects</ProjectsH1>
            <ProjectsWrapper>
                <a href = {urlBookStore} style = {{textDecoration: "none", color: "black"}}>
                    <ProjectsCard>
                        <ProjectsIcon src = {Icon1} style = {{height: "140px"}} />
                        <ProjectsH2>Bookstore App</ProjectsH2>
                        <ProjectsP>Developed an Android App with my group in one of my Software Engineering Courses.</ProjectsP>
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
                        <ProjectsP>Developed an exhibition website for School of Arts of University of Manitoba.</ProjectsP>
                    </ProjectsCard>
                </a>
                <a href = {urlConnect4} style = {{textDecoration: "none", color: "black"}}>
                    <ProjectsCard>
                        <ProjectsIcon src = {Icon4} style = {{height: "250px"}}/>
                        <ProjectsH2>Connect4-AI</ProjectsH2>
                        <ProjectsP>Created a game in Java where you play against an intelligent AI. Can you win?</ProjectsP>
                    </ProjectsCard>
                </a>
                <a href = {urlQLearning} style = {{textDecoration: "none", color: "black"}}>
                    <ProjectsCard>
                        <ProjectsIcon src = {Icon5} style = {{width: "200px"}}/>
                        <ProjectsH2>QLearning-ML</ProjectsH2>
                        <ProjectsP>A Machine Learning project where the AI agent learns from its surroundings to find the best possible path.</ProjectsP>
                    </ProjectsCard>
                </a>
                <a href = {urlAStarVisualizer} style = {{textDecoration: "none", color: "black"}}>
                    <ProjectsCard>
                        <ProjectsIcon src = {Icon2} style = {{width: "200px"}}/>
                        <ProjectsH2>A* Pathfinding Visualizer</ProjectsH2>
                        <ProjectsP>Created a game in Java which implements A* Algorithm considering various different types of real-life terrains.</ProjectsP>
                    </ProjectsCard>
                </a>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
