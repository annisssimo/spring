import { projects } from '../data/projects.js';

export function generateProjects() {
  const projectsContainer = document.querySelector('.projects__container');

  projects.forEach((proj) => {
    const project = document.createElement('div');
    project.classList.add('projects-card');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('project-card__image');
    const image = document.createElement('img');
    image.setAttribute('src', proj.image);
    image.setAttribute('alt', proj.title);

    const projectsInfo = document.createElement('div');
    projectsInfo.classList.add('projects__info');

    const title = document.createElement('h3');
    title.classList.add('projects__title');
    title.textContent = proj.title;

    const description = document.createElement('p');
    description.classList.add('projects__description');
    description.textContent = proj.description;

    projectsContainer.append(project);
    project.append(imageDiv);
    imageDiv.append(image);
    project.append(projectsInfo);
    projectsInfo.append(title);
    projectsInfo.append(description);
  });
}
