const procesos = {
  name: "Macroprocesos",
  children: [
    {
      name: "Gestión Estratégica",
      children: [
        {
          name: "Planificación Institucional",
          children: [
            {
              name: "Planificación Estratégica Institucional (PEI)",
              children: [
                { name: "PEI aprobado" },
                { name: "Matriz de indicadores del PEI" },
                { name: "Informe técnico del PEI" }
              ]
            },
            {
              name: "Planificación Operativa Institucional (POI)",
              children: [
                { name: "POI anual" },
                { name: "POI multianual" }
              ]
            }
          ]
        },
        {
          name: "Seguimiento y Evaluación Institucional",
          children: [
            {
              name: "Producción y Difusión de Información Estadística",
              children: [
                { name: "Boletín Estadístico Institucional" }
              ]
            },
            {
              name: "Evaluación Institucional",
              children: [
                { name: "Informe de evaluación institucional" }
              ]
            }
          ]
        }
      ]
    },

    {
      name: "Gestión de la Modernización",
      children: [
        {
          name: "Organización Institucional",
          children: [
            {
              name: "Documentos de Gestión Institucional",
              children: [
                { name: "Estatuto" },
                { name: "ROF" },
                { name: "TUPA" },
                { name: "TUSNE" }
              ]
            },
            {
              name: "Documentos de Gestión Interna",
              children: [
                { name: "SISADES actualizado" }
              ]
            }
          ]
        },
        {
          name: "Innovación y Mejora Institucional",
          children: [
            {
              name: "Monitoreo y Evaluación de Mejoras",
              children: [
                { name: "Informe de implementación de mejoras" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
