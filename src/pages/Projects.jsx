import ProjectsSection from '../components/ProjectsSection'
import profileData from '../data/profileData'

function Projects() {
  return <ProjectsSection projects={profileData.projects} />
}

export default Projects
