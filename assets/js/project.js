const form = document.querySelector(".login");
const dataProjects = [];
const contentProject = document.querySelector(".wrapperProject");
const inputTitle = document.getElementById("title");
const inputTimeStart = document.getElementById("start");
const inputDec = document.getElementById("info");
const inputTimeEnd = document.getElementById("end");
const inputAddImg = document.querySelector(".container-upload");
const fileInputAddImg = document.getElementById("image");
const technologies = Array.from(
  document.querySelectorAll('input[type="checkbox"]')
);

const checkNext = document.getElementById("next");
const checkReact = document.getElementById("react");
const checkTypescript = document.getElementById("typescript");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let img = fileInputAddImg.files[0];
  img = URL.createObjectURL(img);
  let dataProject = {
    nameProject: inputTitle.value,
    starDate: inputTimeStart.value,
    endDate: inputTimeEnd.value,
    info: inputDec.value,
    img: img,
    technologies: technologies,
  };

  dataProjects.push(dataProject);
  addProject();
});

const addProject = () => {
  let wrapper = "";

  dataProjects.forEach((dataProject) => {
    wrapper += `<div class = "wrapper">
    <div class="card">
    <div class="content-card">
      <div class="card-img">
        <img
          src="${dataProject.img}"
          alt="${dataProject.nameProject}"
        />
      </div>
        <div class="name mt">
          <h2>${dataProject.nameProject}</h2>
          <p>durasi : ${duration(dataProject.starDate, dataProject.endDate)}</p>
        </div>
        <div class="text-info mt">
          <p class="mt">
          ${dataProject.info}
          </p>
        </div>
        <div class="tech-icons-card mt">
          ${getTech(dataProject.technologies)}
        </div>
      <div class="btn-card-group">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  </div>
    </div>`;
    contentProject.innerHTML = wrapper;
  });
};

const duration = (startDate, endDate) => {
  const dateStart = new Date(startDate).getTime();
  const dateEnd = new Date(endDate).getTime();
  const selisih = dateEnd - dateStart;

  let day = selisih / (1000 * 60 * 60 * 24);
  const month = Math.floor(selisih / (1000 * 60 * 60 * 24 * 30));

  const result =
    day < 30
      ? day === 1
        ? ` ${day} day`
        : ` ${day} days`
      : month === 1
      ? ` ${month} month`
      : ` ${month} months`;

  return result;
};

const getTech = (technologies) => {
  technologies[0].dataset.icon = "fa-brands fa-node";
  technologies[1].dataset.icon = "fa-brands fa-vuejs";
  technologies[2].dataset.icon = "fa-brands fa-react";
  technologies[3].dataset.icon = "fa-brands fa-java";

  let techIcons = "";
  technologies.forEach((s) => {
    techIcons += s.checked ? `<i class='${s.dataset.icon}'></i>` : "";
  });

  return techIcons;
};
