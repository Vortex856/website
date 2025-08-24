document.addEventListener('DOMContentLoaded', () => {
  const projectsToggle = document.getElementById('projectsToggle');
  const profileMain = document.getElementById('profileMain');
  const projectsContainer = document.querySelector('.projectsContainer');
  const backBtn = document.querySelector('.backBtn');
  const projectsList = document.querySelector('.projectsList');

  const projects = [
    {
      title: 'Nothing here yet.',
      description: 'Maybe one day i will get my lazy ass to code something.',
      link: '/'
    }
  ];

  function createProjectsList() {
    projectsList.innerHTML = '';

    projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3 class="projectTitle">${project.title}</h3>
        <p class="projectDescription">${project.description}</p>
      `;  
      li.addEventListener('click', () => {
        window.location.href = project.link;
      });
      projectsList.appendChild(li);
    });

    profileMain.classList.add('hidden');
    projectsContainer.style.display = 'block';
  }

  function resetView() {
    profileMain.classList.remove('hidden');
    projectsContainer.style.display = 'none';
  }

  projectsToggle.addEventListener('click', createProjectsList);
  backBtn.addEventListener('click', resetView);
});