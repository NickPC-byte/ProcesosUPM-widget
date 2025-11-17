// Contenedor principal
const container = document.getElementById("tree-container");

// HISTORIAL PARA RETROCEDER
let stack = [];

// FUNCIÓN PRINCIPAL QUE DIBUJA LAS TARJETAS
function renderLevel(node) {
  
  // Guardar historial para regresar
  stack.push(node);

  container.innerHTML = ""; // Limpiar pantalla

  const title = document.createElement("h2");
  title.textContent = node.name;
  title.className = "level-title";
  container.appendChild(title);

  const wrapper = document.createElement("div");
  wrapper.className = "card-wrapper organigrama-wrapper";
  container.appendChild(wrapper);

  // Dibujar tarjetas de los hijos
  (node.children || []).forEach(child => {
    const card = document.createElement("div");
    card.className = "card organigrama-card";

    card.innerHTML = `
      <div class="card-title">${child.name}</div>
    `;

    wrapper.appendChild(card);

    // Si tiene hijos → clic para abrir
    if (child.children) {
      card.addEventListener("click", () => renderLevel(child));
    }
  });

  // Botón "Regresar"
  if (stack.length > 1) {
    const back = document.createElement("button");
    back.textContent = "← Regresar";
    back.className = "btn-back";

    back.onclick = () => {
      stack.pop();
      renderLevel(stack.pop());
    };

    container.appendChild(back);
  }
}

// Inicializar widget
renderLevel(procesos);
