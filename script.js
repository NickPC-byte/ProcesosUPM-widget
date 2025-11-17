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

  // Subtítulo automático
  const subtitle = document.createElement("p");
  subtitle.className = "level-subtitle";
  subtitle.textContent = getLevelName(depth);
  container.appendChild(subtitle);

  // Contenedor de acordeón
  const list = document.createElement("div");
  list.className = "accordion-list";
  container.appendChild(list);

  (node.children || []).forEach(child => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.textContent = child.name;

    const body = document.createElement("div");
    body.className = "accordion-body";

    // ----- NIVEL 1 → Muestra N2 -----
    if (child.children) {
      child.children.forEach(n2 => {

        // N2 tiene productos → acordeón
        if (n2.children && n2.children.length > 0) {
          const n2Header = document.createElement("div");
          n2Header.className = "accordion-header nested";
          n2Header.textContent = n2.name;

          const n2Body = document.createElement("div");
          n2Body.className = "accordion-body nested-body";

          // Añadir productos
          n2.children.forEach(product => {
            const prod = document.createElement("div");
            prod.className = "accordion-product";
            prod.textContent = product.name;
            n2Body.appendChild(prod);
          });

          // Insertar acordeón del N2
          body.appendChild(n2Header);
          body.appendChild(n2Body);

          // Evento de despliegue
          n2Header.onclick = () => {
            n2Header.classList.toggle("open");
            n2Body.classList.toggle("open");
          };

        } else {
          // N2 sin productos → solo texto
          const simpleN2 = document.createElement("div");
          simpleN2.className = "accordion-subitem";
          simpleN2.textContent = n2.name;
          body.appendChild(simpleN2);
        }
      });
    }

    // Evento para abrir/cerrar acordeón de N0 y N1
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
