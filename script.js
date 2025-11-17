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

  // Si no tiene hijos → es un producto
  if (!node.children) {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";
    productDiv.textContent = node.name;
    body.appendChild(productDiv);
    return;
  }

  // Evento de apertura/cierre
  header.onclick = () => {
    header.classList.toggle("open");
    body.classList.toggle("open");
  };

  // Renderizar hijos
  node.children.forEach(child => {
    renderNode(child, body, depth + 1);
  });
}

// Renderizar directamente los N0 (macroprocesos)
container.innerHTML = "";

procesos.children.forEach(macro => {
  renderNode(macro, container, 0);
});
