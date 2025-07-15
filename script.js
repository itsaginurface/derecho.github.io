document.addEventListener("DOMContentLoaded", () => {
  // Datos
  const semestres = [
    {
      titulo: 'Primer Semestre',
      ramos: [
        { id: 'TGNJ', nombre: 'Teoría general de la norma jurídica' },
        { id: 'SD', nombre: 'Sociedad y derecho' },
        { id: 'IRR', nombre: 'Instituciones de derecho romano' },
        { id: 'EOE', nombre: 'Expresión oral y escrita' },
        { id: 'TEI', nombre: 'Técnicas de estudio e investigación' },
        { id: 'HDO', nombre: 'Historia del derecho occidental' },
      ]
    },
    {
      titulo: 'Segundo Semestre',
      ramos: [
        { id: 'TGOLJ', nombre: 'Teoría general del ordenamiento jurídico y de la ley', prereq: ['TGNJ'] },
        { id: 'TE', nombre: 'Teoría del estado' },
        { id: 'RAJ', nombre: 'Razonamiento y argumentación jurídica' },
        { id: 'CD', nombre: 'Comunicación y discurso' },
        { id: 'TPE', nombre: 'Teoría y política económica' },
        { id: 'HDCh', nombre: 'Historia del derecho en Chile' },
      ]
    },
    {
      titulo: 'Tercer Semestre',
      ramos: [
        { id: 'TGSAD', nombre: 'Teoría general del sujeto de derecho y del acto jurídico' },
        { id: 'SCCh', nombre: 'Sistema constitucional chileno' },
        { id: 'IDP', nombre: 'Introducción al derecho procesal' },
        { id: 'RJE', nombre: 'Régimen jurídico de la economía y de la competencia', prereq: ['TPE'] },
        { id: 'PC', nombre: 'Pensamiento crítico', prereq: ['TGNJ','SD','EOE','TEI'] },
        { id: 'EL1', nombre: 'Electivo I', prereq: ['TPE'] },
      ]
    },
    {
      titulo: 'Cuarto Semestre',
      ramos: [
        { id: 'TB', nombre: 'Teoría de los bienes' },
        { id: 'TDH', nombre: 'Teoría jurídica de los derechos humanos' },
        { id: 'DCPT', nombre: 'Disposiciones comunes a todo procedimiento', prereq: ['IDP'] },
        { id: 'BDP', nombre: 'Bases del derecho penal' },
        { id: 'DAE', nombre: 'Derecho y actividad económica', prereq: ['TPE'] },
        { id: 'PN', nombre: 'Pensamiento complejo', prereq: ['PC'] },
      ]
    },
    {
      titulo: 'Quinto Semestre',
      ramos: [
        { id: 'TO', nombre: 'Teoría de las obligaciones', prereq: ['TGSAD'] },
        { id: 'BDAdm', nombre: 'Bases del derecho administrativo' },
        { id: 'PCO', nombre: 'Proceso civil ordinario', prereq: ['DCPT'] },
        { id: 'TD', nombre: 'Teoría del delito', prereq: ['BDP'] },
        { id: 'DIT', nombre: 'Derecho individual del trabajo' },
        { id: 'EN1', nombre: 'Inglés I' },
        { id: 'CD', nombre: 'Complejidad y derecho', prereq: ['PN'] },
      ]
    },
    {
      titulo: 'Sexto Semestre',
      ramos: [
        { id: 'CC', nombre: 'Contratación civil', prereq: ['TO'] },
        { id: 'CRPA', nombre: 'Control y responsabilidad patrimonial de la administración', prereq: ['BDAdm'] },
        { id: 'PCS', nombre: 'Procedimientos civiles especiales', prereq: ['PCO'] },
        { id: 'DCBJ', nombre: 'Delitos contra bienes jurídicos fundamentales', prereq: ['TD'] },
        { id: 'DColT', nombre: 'Derecho colectivo del trabajo', prereq: ['DIT'] },
        { id: 'EN2', nombre: 'Inglés II', prereq: ['EN1'] },
        { id: 'EL2', nombre: 'Electivo II', prereq: ['TDH','BDAdm','TD'] },
      ]
    },
    {
      titulo: 'Séptimo Semestre',
      ramos: [
        { id: 'EPF', nombre: 'Estatuto personal de la familia' },
        { id: 'MNA', nombre: 'Marco normativo del medio ambiente' },
        { id: 'PP', nombre: 'Proceso penal', prereq: ['DCPT','DCBJ'] },
        { id: 'DDJ', nombre: 'Del comerciante y su régimen jurídico' },
        { id: 'DAg', nombre: 'Derecho de aguas' },
        { id: 'DMin', nombre: 'Derecho minero' },
        { id: 'EN3', nombre: 'Inglés III', prereq: ['EN2'] },
        { id: 'CLJ', nombre: 'Clínica jurídica', prereq: ['CC'] },
      ]
    },
    {
      titulo: 'Octavo Semestre',
      ramos: [
        { id: 'TRC', nombre: 'Teoría de la responsabilidad civil', prereq: ['CC'] },
        { id: 'EPatrF', nombre: 'Estatuto patrimonial de la familia', prereq: ['EPF'] },
        { id: 'RP', nombre: 'Recursos procesales', prereq: ['PCS','PP'] },
        { id: 'OETC', nombre: 'Organización de la empresa y títulos de crédito', prereq: ['DDJ'] },
        { id: 'FD', nombre: 'Filosofía del derecho' },
        { id: 'DT', nombre: 'Derecho tributario' },
        { id: 'EN4', nombre: 'Inglés IV', prereq: ['EN3'] },
        { id: 'Pasantias', nombre: 'Pasantías', prereq: ['CLJ'] },
      ]
    },
    {
      titulo: 'Noveno Semestre',
      ramos: [
        { id: 'EP', nombre: 'Ética profesional' },
        { id: 'NJ', nombre: 'Negociación jurídica' },
        { id: 'LG', nombre: 'Litigación general' },
        { id: 'CCo', nombre: 'Clínica comunitaria', prereq: ['Pasantias'] },
        { id: 'PT', nombre: 'Proyecto de tesis', prereq: ['CC','CRPA','PCS','DCBJ','DColT','EL2','EPF','MNA','PP','DDJ','DAg','DMin','EN3','CLJ','TRC','EPatrF','RP','OETC','FD','DT','EN4','Pasantias'] },
        { id: 'O1', nombre: 'Optativo I' }
      ]
    },
    {
      titulo: 'Décimo Semestre',
      ramos: [
        { id: 'CPE', nombre: 'Curso preparación examen de grado' },
        { id: 'LP', nombre: 'Litigación penal', prereq: ['LG'] },
        { id: 'LCL', nombre: 'Litigación civil y laboral', prereq: ['LG'] },
        { id: 'ET', nombre: 'Elaboración de tesis', prereq: ['PT'] },
        { id: 'O2', nombre: 'Optativo II' },
      ]
    }
  ];

  // Montar malla
  const cont = document.querySelector('.malla');
  semestres.forEach(s => {
    const divS = document.createElement('div');
    divS.className = 'semestre';
    divS.innerHTML = `<h2>${s.titulo}</h2><div class="ramos"></div>`;
    s.ramos.forEach(r => {
      const dr = document.createElement('div');
      dr.className = 'ramo locked';
      dr.id = r.id;
      dr.textContent = r.nombre;
      if (!r.prereq) dr.classList.remove('locked');
      else dr.dataset.prereq = r.prereq.join(',');
      divS.querySelector('.ramos').appendChild(dr);
    });
    cont.appendChild(divS);
  });

  // Interactividad
  document.querySelectorAll('.ramo:not(.locked)').forEach(ramo => {
    ramo.addEventListener('click', () => {
      ramo.classList.toggle('aprobado');
      checkPrereqs();
    });
  });

  function checkPrereqs() {
    document.querySelectorAll('.ramo').forEach(ramo => {
      if (ramo.dataset.prereq) {
        const reqs = ramo.dataset.prereq.split(',');
        const ok = reqs.every(id => document.getElementById(id).classList.contains('aprobado'));
        if (ok) {
          ramo.classList.remove('locked');
          ramo.addEventListener('click', () => {
            ramo.classList.toggle('aprobado');
            checkPrereqs();
          });
        } else {
          ramo.classList.add('locked');
          ramo.classList.remove('aprobado');
        }
      }
    });
  }

  checkPrereqs(); // inicial
});
