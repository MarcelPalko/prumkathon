const drobMenuDiv = document.getElementById("drob-menu");

if (drobMenuDiv) {
  path = window.location.pathname.split("/");
  let pathSlice = path.slice(1, -1);
  let currentPathName = "";
  pathSlice.forEach((element) => {
    currentPathName += element + "/";
    if (element !== "pages") {
        if (element === "obory") {
            drobMenuDiv.innerHTML += `<a href =/${path[1]}/#${element}>${element.charAt(0).toUpperCase() + element.slice(1)}</a>`
        } else {
            drobMenuDiv.innerHTML += `<a href =/${currentPathName}>${element.charAt(0).toUpperCase() + element.slice(1)}</a>`
        }
        if (element !== pathSlice[pathSlice.length - 1]) {
            drobMenuDiv.innerHTML += "<span> &gt </span>";
        }
    }
  });

  const n = new URL(window.location.href);
  if (n.searchParams.get("subject")) {
    const param = n.searchParams.get("subject");
    drobMenuDiv.innerHTML += "<span> &gt </span>";
    drobMenuDiv.innerHTML += "<span>" + param + "</span>";
  }
}
