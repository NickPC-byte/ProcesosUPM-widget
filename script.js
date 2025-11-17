// Contenedor principal
const container = document.getElementById("tree-container");

function renderNode(node, depth = 0, parentElement) {

  const item = document.createElement("div");
  item.className = depth === 0 ? "accordion-root" : "accordion-item";

  const header = document.createElement("div");
  header.className = depth === 0 ? "accordion-header root" : "accordion-header";
  header.textContent = node.name;

  const body = document.createElement("div");
  body.className = depth === 3 ? "product-list" : "accordion-body";

  item.appendChild(header);
  item.appendChild(body);
  parentElement.appendChild(item);

  // EVENTO PARA ABRIR/CERRAR
  if (depth < 3) {
    header.onclick = () => {
      header.classList.toggle("open");
      body.classList.toggle("open");
    };
  }

  // Si es producto (nivel 3)
  if (!node.children) return;

  // Render hijos
  node.children.forEach(child => {
    if (depth === 2) {
      // Nivel 2 → productos
      const productDiv = document.createElement("div");
      productDiv.className = "accordion-product";
      productDiv.textContent = child.name;
      body.appendChild(productDiv);
    } else {
      // N0, N1 → sigue el acordeón normal
      renderNode(child, depth + 1, body);
    }
  });
}

// Inicializa dibujando TODO el árbol
container.innerHTML = "";
renderNode(procesos, 0, container);
