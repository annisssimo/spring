import { projects } from '../data/projects.js';

const searchInput = document.getElementById('projects-search');
const projectsContainer = document.querySelector('.projects__container');
const noResults = document.getElementById('no-results');

export function generateProjects(filteredProjects = projects) {
  projectsContainer.innerHTML = '';
  noResults.style.display = 'none';

  if (filteredProjects.length === 0) {
    noResults.style.display = 'block';
  } else {
    filteredProjects.forEach((proj) => {
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
}

function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

function filterProjects() {
  const query = searchInput.value.toLowerCase();
  const filteredProjects = projects.filter(
    (proj) =>
      proj.title.toLowerCase().includes(query) ||
      proj.description.toLowerCase().includes(query)
  );
  generateProjects(filteredProjects);
}

searchInput.addEventListener('input', debounce(filterProjects, 300));
