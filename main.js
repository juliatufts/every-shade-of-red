function addShade(root, color, textContent) { 
    var newShade = document.createElement("div");
    var newHeader = document.createElement("h2");
    var newContent = document.createTextNode(textContent);
    newHeader.appendChild(newContent);
    newShade.appendChild(newHeader);
    newShade.style.backgroundColor = color;
    root.appendChild(newShade)
  }

fetch("red.json")
    .then(response => response.json())
    .then(json => {
        let redShades = json;
        console.log(redShades);
        const root = document.getElementById("root");

        redShades.forEach((shade) => {
            let backgroundColor = shade.hex;
            addShade(root, shade.hex, shade.name);
        });
    });
