export const projects = [
  {
    image: 'https://spring.io/img/projects/spring-boot.svg',
    title: 'Spring Boot',
    description:
      'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
  },
  {
    image: 'https://spring.io/img/projects/spring-framework.svg?v=2',
    title: 'Spring Framework',
    description:
      'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
  },
  {
    image: 'https://spring.io/img/projects/spring-data.svg',
    title: 'Spring Data',
    description:
      'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
  },
  {
    image: 'https://spring.io/img/projects/spring-cloud.svg',
    title: 'Spring Cloud',
    description:
      'Provides a set of tools for common patterns in distributed systems.',
  },
];

export function generateProjects(projects) {
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
