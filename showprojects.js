projects = [
  {
    name: "rubik's cube timer",
    photo: "images/cubetimer600x300.png",
    outsideLink: false,
    link: "cubeTimer/",
    github:
      "https://github.com/alexthehaszard/alexthehaszard.github.io/tree/master/cubeTimer",
  },
  {
    name: "fortnite poi generator",
    photo: "images/poigen600x300.png",
    outsideLink: false,
    link: "poiGen/",
    github:
      "https://github.com/alexthehaszard/alexthehaszard.github.io/tree/master/poiGen",
  },
  {
    name: "tictactoe",
    photo: "images/tictactoe600x300.png",
    outsideLink: false,
    link: "tictactoe/",
    github:
      "https://github.com/alexthehaszard/alexthehaszard.github.io/tree/master/ticTacToe",
  },
  {
    name: "pathfinding visualizer",
    photo: "images/pathfinding600x300.png",
    outsideLink: false,
    link: "pathfindingVisualizer/",
    github:
      "https://github.com/alexthehaszard/pathfindingAlgorithm/tree/master",
  },
  {
    name: "jacks (card game)",
    photo: "images/jacks600x300.png",
    outsideLink: false,
    link: "jacks/",
    github: "https://github.com/alexthehaszard/jacks",
  },
  {
    name: "connect 4 arena",
    photo: "images/c4-600x300.png",
    outsideLink: true,
    link: "https://c4.bigstoneaudio.com",
    github: "https://github.com/alexthehaszard/connect-4-arena",
  },
];

function showProject(number, dot) {
  for (let i = 0; i < number; i++) {
    let card = document.createElement("div");
    let p = document.createElement("p");
    let a = document.createElement("a");
    let img = document.createElement("img");
    let projectButtons = document.createElement("div");
    let openProject = document.createElement("a");
    let viewCode = document.createElement("a");
    let openProjectText = document.createElement("p");
    let viewCodeText = document.createElement("p");

    card.classList = "project-card";
    document.getElementById("projects").appendChild(card);

    p.innerHTML = projects[i].name;
    p.classList = "project-title";
    card.appendChild(p);

    a.setAttribute("href", dot + projects[i].link);
    card.appendChild(a);

    img.setAttribute("src", dot + projects[i].photo);
    img.classList = "project-image";
    a.appendChild(img);

    projectButtons.classList = "project-buttons";
    card.appendChild(projectButtons);

    openProject.classList = "buttons";
    if (projects[i].outsideLink === false) {
      openProject.setAttribute("href", dot + projects[i].link);
    } else {
      openProject.setAttribute("href", projects[i].link);
    }
    projectButtons.appendChild(openProject);

    viewCode.classList = "buttons";
    viewCode.setAttribute("href", projects[i].github);
    projectButtons.appendChild(viewCode);

    openProjectText.innerHTML = "open project";
    openProject.appendChild(openProjectText);

    viewCodeText.innerHTML = "view code";
    viewCode.appendChild(viewCodeText);
  }
}
