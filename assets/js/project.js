let projectDatas = [];

const form = document.querySelector("form");
form.addEventListener("submit", addProject);

function addProject(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let technologies = document.querySelectorAll(
    'input[name="technology"]:checked'
  );
  let image = document.getElementById("add-img").value;

  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = URL.createObjectURL(image);
  cardImage.alt = title;
  card.appendChild(cardImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  card.appendChild(cardContent);

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;
  cardContent.appendChild(cardTitle);

  const cardDate = document.createElement("p");
  cardDate.textContent = `Tanggal: ${start} - ${end}`;
  cardContent.appendChild(cardDate);

  const cardTechnologies = document.createElement("p");
  technologies.forEach((technology, index) => {
    const technologyIcon = document.createElement("i");
    technologyIcon.classList.add("material-icons"); // Ubah sesuai dengan library icon yang Anda gunakan
    technologyIcon.textContent = getTechnologyIcon(technology.value);

    if (index > 0) {
      cardTechnologies.innerHTML += " ";
    }
    cardTechnologies.appendChild(technologyIcon);
  });
  cardContent.appendChild(cardTechnologies);

  const cardContainer = document.querySelector("#cardContainer");
  cardContainer.appendChild(card);
}

function getTechnologyIcon(technology) {
  switch (technology) {
    case "React JS":
      return "code";
    case "Node JS":
      return "dns";
    case "Next JS":
      return "next_plan";
    case "TypeScript":
      return "subject";
    default:
      return "code";
  }
}
