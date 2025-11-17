// Contenedor principal
const container = document.getElementById("tree-container");

// Función para detectar el nivel según profundidad
function getLevelName(depth) {
  if (depth === 0) return "Nivel 0: Macroprocesos";
  if (depth === 1) return "Nivel 1: Procesos";
  if (depth === 2) return "Nivel 2: Subprocesos";
  if (depth === 3) return "Productos";
  return "";
}

// Render principal con acordeón
function renderTree(node, depth = 0) {
  container.innerHTML = "";

  // Título principal
  const title = document.createElement("h2");
  title.textContent = node.name;
  title.className = "level-title";
  container.appendChild(title);

  // SUBTÍTULO AUTOMÁTICO
  const subtitle = document.createElement("p");
  subtitle.className = "level-subtitle";
  subtitle.textContent = getLevelName(depth);
  container.appendChild(subtitle);

  // Contenedor de acordeón
  const list = document.createElement("div");
  list.className = "accordion-list";
  container.appendChild(list);

  // Crear acordeones
  (node.children || []).forEach(child => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.textContent = child.name;

    const body = document.createElement("div");
    body.className = "accordion-body";

    // Si tiene hijos, se renderizan dentro
    if (child.children) {
      child.children.forEach(grandchild => {
        const sub = document.createElement("div");
        sub.className = "accordion-subitem";
        sub.textContent = grandchild.name;
        body.appendChild(sub);

        // SI EL SUBITEM TAMBIÉN TIENE HIJOS → anidamos otro acordeón
        if (grandchild.children) {
          const nestedHeader = document.createElement("div");
          nestedHeader.className = "accordion-header nested";
          nestedHeader.textContent = grandchild.name;

          const nestedBody = document.createElement("div");
          nestedBody.className = "accordion-body";

          grandchild.children.forEach(product => {
            const p = document.createElement("div");
            p.className = "accordion-product";
            p.textContent = product.name;
            nestedBody.appendChild(p);
          });

          body.appendChild(nestedHeader);
          body.appendChild(nestedBody);

          // Evento abrir/cerrar
          nestedHeader.onclick = () => {
            nestedHeader.classList.toggle("open");
            nestedBody.classList.toggle("open");
          };
        }
      });
    }

    // Evento abrir/cerrar acordeón principal
    header.onclick = () => {
      header.classList.toggle("open");
      body.classList.toggle("open");
    };

    item.appendChild(header);
    item.appendChild(body);
    list.appendChild(item);
  });
}

// Inicializar
renderTree(procesos, 0);
