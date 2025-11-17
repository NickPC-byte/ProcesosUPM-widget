const procesos = {
  name: "Macroprocesos",
  children: [
    {
      name: "N0: Gestión Estratégica",
      children: [
        {
          name: "N1: Planificación Institucional",
          children: [
            {
              name: "N2: Planificación Estratégica Institucional",
              children: [
                { name: "P1: PEI aprobado" }
              ]
            },
            {
              name: "N2: Planificación Operativa Institucional",
              children: [
                { name: "P1: POI anual actualizado" },
                { name: "P2: POI multianual" }
              ]
            }
          ]
        },
        {
          name: "N1: Seguimiento y Evaluación Institucional",
          children: [
            {
              name: "N2: Producción y Difusión de Información Estadística",
              children: [
                { name: "P1: Boletín Estadístico Institucional actualizado" }
              ]
            },
            {
              name: "N2: Evaluación Institucional",
              children: [
                { name: "P1: Informe de evaluación institucional" }
              ]
            }
          ]
        }
      ]
    },

    {
      name: "N0: Gestión de la Modernización",
      children: [
        {
          name: "N1: Organización Institucional",
          children: [
            {
              name: "N2: Elaboración y Actualización de Documentos de Gestión Institucional",
              children: [
                { name: "P1: Estatuto Actualizado" },
                { name: "P2: ROF Actualizado" },
                { name: "P3: TUPA Actualizado" },
                { name: "P4: TUSNE Actualizado" }
              ]
            },
            {
              name: "N2: Elaboración y Actualización de Documentos de Gestión Interna",
              children: [
                { name: "P1: SISADES actualizado" }
              ]
            }
          ]
        },
        {
          name: "N1: Innovación y Mejora Institucional",
          children: [
            {
              name: "N2: Monitoreo y Evaluación de Mejoras",
              children: [
                { name: "P1: Informe anual de implementación de mejoras" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
