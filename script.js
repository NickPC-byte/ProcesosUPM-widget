// Contenedor principal
const container = document.getElementById("tree-container");

// Render recursivo
function renderNode(node, parentElement, depth = 0) {

  const item = document.createElement("div");
  item.className = "accordion-item depth-" + depth;

  const header = document.createElement("div");
  header.className = "accordion-header depth-" + depth;
  header.textContent = node.name;

  const body = document.createElement("div");
  body.className = "accordion-body depth-" + depth;

  item.appendChild(header);
  item.appendChild(body);
  parentElement.appendChild(item);

  // Solo los productos NO llevan acordeón
  if (!node.children) {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.textContent = node.name;
    body.appendChild(productDiv);
    return;
  }

  // Evento para abrir/cerrar
  header.onclick = () => {
    header.classList.toggle("open");
    body.classList.toggle("open");
  };

  // Recursión para hijos
  node.children.forEach(child => {
    renderNode(child, body, depth + 1);
  });
}

// Inicio
container.innerHTML = "";
renderNode(procesos, container, 0);
