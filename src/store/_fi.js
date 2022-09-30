import { mapGetters, mapMutations } from "vuex";
export const storeFI = {
  state: {
    // ? has_estadoTestVocacional: sí|no terminó de consultar el estado de su test vocacional
    has_estadoTestVocacional: false,
    // ? has_resultadoTestVocacional: sí|no tiene un test vocacional
    has_resultadoTestVocacional: false,
    // ? has_resultadoLoadedTestVocacional: sí|no tiene el resultado cargado en el front-end
    has_resultadoLoadedTestVocacional: false,
    consultando_test: false,
    puntajeMaximoTestVocacional: 24,
    // ? resultadoTestVocacional: {} resultado del test vocacional
    resultadoTestVocacional: {

    },
    hobbies: [
      { label: "Deportes colectivos" },
      { label: "Trekking" },
      { label: "Carpintería" },
      { label: "Yoga" },
      { label: "Gastronomía" },
      { label: "Artes Marciales" },
      { label: "Ajedrez" },
      { label: "Cine" },
      { label: "Tecnología" },
      { label: "Moda" },
      { label: "Streamings" },
      { label: "Podcasts" },
      { label: "Activismo" },
      { label: "Cultura" },
      { label: "Música" },
      { label: "Anime" },
      { label: "Mindfulness" },
      { label: "Mascotas" },
      { label: "Lectura" },
      { label: "Mundo tuerca" },
      { label: "Escritura" },
      { label: "Sustentabilidad" },
      { label: "Documentales" },
      { label: "Futurismo" },
      { label: "Danza" },
      { label: "Fitness" },
      { label: "Fotografía" },
      { label: "Mitología" },
      { label: "Idiomas" },
      { label: "Debate" },
      { label: "Gadgets" },
      { label: "Artes plásticas" },
      { label: "Deportes extremos" },
      { label: "Espiritualidad" },
      { label: "Artes Visuales" },
      { label: "Reality shows" },
      { label: "Cocina" },
      { label: "Emprendimiento" },
      { label: "Ciencias" },
      { label: "Atletismo" },
      { label: "Competiciones y torneos" },
      { label: "Espionaje" },
      { label: "Astronomía" },
      { label: "Montañismo" },
      { label: "Manualidades" },
      { label: "Trabajo social" },
      { label: "Política" },
      { label: "Videojuegos" },
      { label: "Juegos de mesa" },
      { label: "Medio Ambiente" },
      { label: "Colecciones" },
      { label: "Jardinería" },
      { label: "Fantasía" },
      { label: "Reciclaje" },
      { label: "Voluntariados" },
      { label: "Maquillaje" },
      { label: "Viajes" },
      { label: "Ciclismo" },
    ],
    intereses: [
      { label: "Algoritmos" },
      { label: "Asistentes virtuales" },
      { label: "Automatización de procesos" },
      { label: "Bots" },
      { label: "Inteligencia Artificial" },
      { label: "Redes Neuronales" },
      { label: "Almacenamiento de datos" },
      { label: "Interfaces de Programación" },
      { label: "Programación" },
      { label: "Smart Cities (Ciudades Inteligentes)" },
      { label: "Redes Computacionales" },
      { label: "Genética" },
      { label: "Impresión 3D" },
      { label: "Mapeo Cerebral" },
      { label: "Materiales Inteligentes" },
      { label: "Medicina Personalizada" },
      { label: "Nanotecnología" },
      { label: "Recursos Hídricos" },
      { label: "Superalimentos" },
      { label: "Espacios Inteligentes" },
      { label: "Integración de Dispositivos al Cuerpo Humano" },
      { label: "Inteligencia Aumentada" },
      { label: "Blockchain" },
      { label: "Ciberseguridad" },
      { label: "Encriptación de Datos" },
      { label: "Sistemas Biométricos" },
      { label: "Web Profunda (Deep Web)" },
      { label: "Cambio Climático" },
      { label: "Gamificación" },
      { label: "Identidad Digital" },
      { label: "Marketing Digital" },
      { label: "Viajes al Espacio" },
      { label: "Internet de las Cosas" },
      { label: "Dispositivos Portátiles" },
      { label: "Electromovilidad" },
      { label: "Sensorización" },
      { label: "Transportes Ecoamigables" },
      { label: "Vehículos Autónomos" },
      { label: "Realidad Aumentada" },
      { label: "Realidad Mixta" },
      { label: "Realidad Virtual" },
      { label: "Renderización Realista" },
      { label: "Robótica" },
      { label: "Videojuegos" },
    ],
    carreras: [
      {
        title: "Plan común",
        icon: "book-heart",
        carrera: "Plan común",
        puntaje: 0,
        campoLaboral: false,
        orden: 0,
        empleabilidad: false,
        video: "j0M7YgA2mV0",
        videos: {
          y_egresado: 'KMlXLyIOPSg',
          y_profesor: '0lR1yVynsAQ',
          v_alumno: '656338618?h=96cd4aefea',
          y_recorrido: 'AgqOwezRB04',
          y_laboratorio: 'G1722X41PWY',
        },
        icono: "iconoplancomun.png",
        color: "#19AF9A",
        desc: `
        Ingeniería Civil Plan Común de la FI UdeC te permite postular a una de las siguientes ocho especialidades de Ingeniería Civil: Eléctrica, Electrónica, Industrial, Informática, de Materiales, Mecánica, Metalúrgica y Química.
        `,
      },
      {
        title: "Civil",
        carrera: "Ingeniería Civil",
        puntaje: 0,
        campoLaboral: `
        El Ingeniero Civil se desempeña en todos los servicios y empresas que se dedican a la gestión, diseño, construcción y operación de proyectos de obras de infraestructura del sector urbano, agrícola, forestal e industrial, específicamente en el análisis y diseño estructural, construcción, diseño de carreteras y gestión de tráfico, tratamiento y distribución del agua para la población, tratamiento y disposición de aguas servidas, obras hidráulicas de regadío y generación hidroeléctrica, y los problemas geotécnicos relacionados con todas las obras anteriores.
        `,
        orden: 1,
        empleabilidad: 93.4,
        icon: "file-chart-line",
        video: "zlEiZkCdeB4",
        videos: {
          y_egresado: 'KMlXLyIOPSg',
          y_profesor: '0lR1yVynsAQ',
          v_alumno: '656338618?h=96cd4aefea',
          y_recorrido: 'AgqOwezRB04',
          y_laboratorio: 'G1722X41PWY',
        },
        icono: "iconocivil.png",
        color: "#D0394A",
        admision: "https://admision.udec.cl/ingenieria-civil/",
        desc: `
        Formamos profesionales altamente competentes y éticamente responsables, capaces de dirigir, desarrollar y elaborar proyectos complejos de ingeniería. Integramos diversas dimensiones como geotecnia, diseño de estructuras, construcción, hidráulica, sanitaria, vialidad y transporte.
        `,
      },
      {
        title: "Industrial",
        carrera: "Ingeniería Civil Industrial",
        puntaje: 0,
        orden: 8,
        campoLaboral: `
        La formación interdisciplinaria de este profesional le permite desempeñar múltiples funciones en empresas de diversa índole. La presencia del Ingeniero Civil Industrial en los sectores industrial, comercial, financiero y de servicios es cada día más preponderante, especialmente en nuestra región en las áreas forestal, agrícola y pesquera. La tendencia actual lo sitúa cada vez con mayor presencia en funciones de participación en las áreas tradicionales de la especialidad, tales como la formulación, evaluación y dirección de proyectos de inversión, y la planificación, diseño y control de sistemas productivos. 
        `,
        empleabilidad: 94,
        icon: "industry-alt",
        video: "h2IbS4AO-ps",
        videos: {
          y_egresado: 'Q9Oejl56bck',
          y_profesor: 'x48braIRCkA',
          v_alumno: '656336859?h=13f47bc0b1',
          y_recorrido: 'aqlxTvlkD3o',
          y_laboratorio: 'WFfCzpj9blw',
        },
        icono: "iconoindustrial.png",
        color: "#6668CD",
        admision: "https://admision.udec.cl/ingenieria-civil-industrial/",
        desc: `
        Entregamos una formación interdisciplinaria en computación e informática, investigación de operaciones y ciencias de la ingeniería. Sólidos conocimientos en ingeniería económica, gestión y producción para abordar problemas complejos de la ingeniería industrial y de sistemas, considerando siempre la variable medioambiental.
        `,
      },
      {
        title: "Biomédica",
        carrera: "Ingeniería Civil Biomédica",
        puntaje: 'N/A',
        campoLaboral: `
        El campo ocupacional abarca desde las distintas áreas de la ingeniería hasta aplicaciones biomédicas propiamente tal. Nuestros profesionales pueden desempeñarse en empresas productivas o de servicios con alto grado de instrumentación y automatización, empresas de ingeniería, empresas de investigación y desarrollo en áreas de la salud. Además, están capacitados para trabajar junto con médicos en el desarrollo de nuevas técnicas, equipos e instrumentación de diagnóstico y terapia para compañías del área médica. También en hospitales y clínicas, son capaces de suplir la amplia necesidad de apoyo tecnológico requerido en la medicina moderna. 
        `,
        orden: 10,
        empleabilidad: 10,
        icon: "monitor-heart-rate",
        video: "S-_WDhz3LWM",
        videos: {
          y_egresado: 'LI4oQYrDApQ',
          y_profesor: 's6gJ1UbMGjg',
          v_alumno: '656339619?h=b7bef42824',
          y_recorrido: 'DNh3vWRPlvk',
          y_laboratorio: 'ruDWP2qe8jY',
        },
        icono: "iconobiomedica.png",
        color: "#2FAB65",
        admision: "https://admision.udec.cl/ingenieria-civil-biomedica/",
        desc: `
        Apuntamos a la formación de profesionales con profundo conocimiento de la ingeniería y la medicina, capaces de desarrollar e investigar sistemas de diagnóstico, cirugía, dispositivos de asistencia fisiológica, tratamientos y equipamientos, tanto eléctrico como electrónico biomédico. 
        `,
      },
      {
        title: "Minas",
        carrera: "Ingeniería Civil de Minas",
        puntaje: 0,
        campoLaboral: `
        Los Ingenieros Civiles de Minas UdeC son profesionales calificados para desempeñarse en compañías mineras metálica y no metálica, empresas de ingeniería y de mantenimiento de equipos; empresas de desarrollo y venta de tecnología y empresas de servicios para la minería. También posee competencias que le permiten desempeñarse con éxito en instituciones públicas y privadas dedicadas a estudios e investigación y desarrollo, tales como universidades y centros de investigación, tanto en nuestro país como fuera de él.
        `,
        orden: 4,
        empleabilidad: 83,
        icon: "diamond",
        video: "lggt2kiSDYk",
        videos: {
          y_egresado: 'YzXNLq58hlY',
          y_profesor: 'vScjUodSZdY',
          v_alumno: '656342590?h=595fa05eae',
          y_recorrido: 'qfM-ce6dDZw',
          y_laboratorio: 'LxAQYQGmjuA',
        },
        icono: "iconominas.png",
        color: "#9F9809",
        admision: "https://admision.udec.cl/ingenieria-civil-de-minas/",
        desc: `
        Formamos profesionales con bases sólidas en ciencias básicas e ingeniería, con una robusta formación técnica, flexibilidad y capacidad para trabajar en entornos multidisciplinarios y multiculturales, preparados para enfrentar los constantes cambios de la actividad minera, aplicando estándares de calidad y cuidado por el medio ambiente.
        `,
      },
      {
        title: "Eléctrica",
        carrera: "Ingeniería Civil Eléctrica",
        puntaje: 0,
        campoLaboral: `
        Nuestros profesionales están capacitados para desempeñarse en cualquier industria del sector productivo o empresa de distribución y transmisión de energía eléctrica. La excelencia de su formación profesional lo habilita para ejercer funciones de mantención de equipos y sistemas eléctricos, diseño y ejecución de proyectos eléctricos, ya sea a nivel de industrias o sistemas de transmisión y generación. Otra fuente laboral se encuentra en el área de la manufactura, de continuo desarrollo en nuestro país, en el diseño y en la construcción de equipos eléctricos de sofisticada tecnología.
        `,
        orden: 13,
        empleabilidad: 86,
        icon: "charging-station",
        video: "A1nCrfoe1o4",
        videos: {
          y_egresado: 'zYVUqv1SoMs',
          y_profesor: 'bX9fATBUvxc',
          v_alumno: '656343286?h=a7cf03e917',
          y_recorrido: 'dF-w_SNDx8s',
          y_laboratorio: 'PKam5SHNZho',
        },
        icono: "iconoelectrica.png",
        color: "#F7E500",
        admision: "https://admision.udec.cl/ingenieria-civil-electrica/",
        desc: `
        Preparamos profesionales para planificar y controlar sistemas electroenergéticos; concebir y diseñar equipos electromagnéticos. Entregamos las herramientas para abordar problemáticas de empresas privadas o públicas, tanto de servicios como productivas. Promovemos además la capacidad de innovación y creación de empresas propias.
        `,
      },
      {
        title: "Metalúrgica",
        carrera: "Ingeniería Civil Metalúrgica",
        puntaje: 0,
        campoLaboral: `
        Se encuentra principalmente en la minería metálica y no metálica del país, tanto en las empresas productivas como aquellas de tecnologías y servicios. Su rol se asocia al ámbito de procesos en las diferentes etapas de la metalurgia extractiva, como al campo de la administración y gestión. Un nicho interesante de trabajo es aquel de la investigación y desarrollo tecnológico, asociados principalmente a las universidades y centros de investigación.
        `,
        orden: 3,
        empleabilidad: 83,
        icon: "cubes",
        video: "JRd6aComMuI",
        videos: {
          y_egresado: 'eKW2PkfzIe4',
          y_profesor: 'Wm5OquFwX6Q',
          v_alumno: '656341009?h=1e3c82ec3f',
          y_recorrido: 'qAbI_nH-DTY',
          y_laboratorio: '0Qz5tbatCjM',
        },
        icono: "iconometalurgica.png",
        color: "#C38039",
        admision: "https://admision.udec.cl/ingenieria-civil-metalurgica/",
        desc: `
        Formados profesionales para enfrentar un mundo cambiante, caracterizado por una mineralogía cada día más compleja, la disminución de la ley de los minerales y regulaciones medioambientales avanzadas. Otorgamos especialización en metalurgia extractiva que los capacita para ser agentes innovadores y creativos al interior de las empresas.
        `,
      },
      {
        title: "Química",
        carrera: "Ingeniería Civil Quimica",
        puntaje: 0,
        campoLaboral: `
        Los Ingenieros Civiles Químicos están preparados para participar en la generación y diseño de procesos industriales. Su campo de trabajo abarca las empresas del sector productivo de la ingeniería de procesos, las oficinas de ingeniería y empresas consultoras prestadoras de servicio de la industria del sector químico, petroquímica, forestal, minero, agroindustrial y otras, además del desempeño profesional independiente en áreas relacionadas. 
        `,
        orden: 5,
        empleabilidad: 91,
        icon: "atom-alt",
        video: "l_N0WdK3V50",
        videos: {
          y_egresado: 'PiqBiVVv_cE',
          y_profesor: 'mopfMbBfGSU',
          v_alumno: '656341777?h=72b5b93038',
          y_recorrido: 'xo7YP90ksZU',
          y_laboratorio: 'CD0jNezir0c',
        },
        icono: "iconoquimica.png",
        color: "#E61C72",
        admision: "https://admision.udec.cl/ingenieria-civil-quimica/",
        desc: `
          Formamos profesionales altamente competentes para tomar decisiones que optimicen el diseño y funcionamiento de procesos operacionales y de gestión. Que se desenvuelvan con autonomía e iniciativa propia, siendo capaces de liderar equipos multidisciplinarios y de adaptarse rápidamente para impulsar cambios en todas las áreas.
        `,
      },
      {
        title: "Materiales",
        carrera: "Ingeniería Civil de Materiales",
        puntaje: 0,
        campoLaboral: `
        Industrias del acero, metalmecánica, manufacturera y de materiales. Centros de investigación, instituciones de educación superior, consultorías. Además, gracias a su formación integral, el Ingeniero Civil de Materiales de la UdeC puede desarrollar de manera independiente la profesión.
        `,
        orden: 2,
        empleabilidad: 74,
        icon: "dice-d8",
        video: "tDT3jzaXkNw",
        videos: {
          y_egresado: '9knjX_gcrjY',
          y_profesor: 'xLJdk6Izc-I',
          v_alumno: '656342250?h=b777463874',
          y_recorrido: 'GoawqsQjCHQ',
          y_laboratorio: 'iKrXDgJdTfc',
        },
        icono: "iconomateriales.png",
        color: "#E61C72",
        admision: "https://admision.udec.cl/ingenieria-civil-de-materiales/",
        desc: `
        Formamos profesionales con alta preparación en el campo de la metalurgia, los materiales y las tecnologías emergentes, capaces de gestionar todas las etapas de creación y operación de industrias metalúrgicas y procesadoras de materiales. Lo anterior, en armonía con el medio ambiente, pudiendo además seleccionar y adquirir nuevos materiales y aleaciones.
        `,
      },
      {
        title: "Telecomunicaciones",
        carrera: "Ingeniería Civil en Telecomunicaciones",
        puntaje: 0,
        campoLaboral: `
        El mayor campo ocupacional se encuentra en las múltiples empresas de servicios de telecomunicaciones cumpliendo las labores propias de su condición de ingeniero civil en los campos de telefonía fija y celular; redes de computadoras; sistemas de transmisión de alta capacidad (multicarrier), vía microondas, fibras ópticas y satélites, servicios de Internet y banda ancha. Le sigue en importancia, el campo relacionado con la integración de las telecomunicaciones con las redes de procesamiento de datos, desde los soportes de transmisión para redes locales (LAN), metropolitanas (MAN) y de área amplia (WAN) hasta los backbone ATM asociados a los transportes de gran cantidad de datos. 
        `,
        orden: 11,
        empleabilidad: 94,
        icon: "satellite",
        video: "uV02QZFlfVY",
        videos: {
          y_egresado: 'JZVJiyCxpI4',
          y_profesor: '6wiXrSHE21g',
          v_alumno: '651664744?h=c62e70de05',
          y_recorrido: 'hTgSP4tHk5M',
          y_laboratorio: 'GPFRAxqOrmU',
        },
        icono: "iconotelecomunicaciones.png",
        color: "#DAED33",
        admision: "https://admision.udec.cl/ingenieria-civil-en-telecomunicaciones/",
        desc: `
        Formamos profesionales capaces de solucionar problemáticas, tanto del área de las tecnologías de la información, como para servicios y aplicaciones científicas e industriales. Les entregamos herramientas para concebir, diseñar, implementar y operar sistemas; redes y servicios de generación, transmisión, detección, manejo y gestión de la información.
        `,
      },
      {
        title: "Electrónica",
        carrera: "Ingeniería Civil Electrónica",
        puntaje: 0,
        campoLaboral: `
        Profesionales capacitados para trabajar en forma independiente o en las diversas empresas que operan en el país. Los egresados laboran en empresas como telecomunicaciones, computación, productivas, de servicios y asesorías, universidades en las áreas de control automático, electrónica de poder, sistemas digitales, computadores, redes de computación, telecomunicaciones, transmisión de datos, electro-medicina, docencia universitaria, proyectos industriales, instrumentación industrial y otras.
        `,
        orden: 12,
        empleabilidad: 86,
        icon: "drone-alt",
        video: "k5HzYPqfVUE",
        videos: {
          y_egresado: 'Z-xCYJ1kyiM',
          y_profesor: 'PsTlVc7PHdI',
          v_alumno: '656340063?h=bb8a8d1a9c',
          y_recorrido: 'epBPydn5ACU',
          y_laboratorio: 'lAaKbYsZb-c',
        },
        icono: "iconoelectronica.png",
        color: "#E84E1A",
        admision: "https://admision.udec.cl/ingenieria-civil-electronica/",
        desc: `
        Nuestros profesionales son capaces de aplicar los conocimientos de las ciencias básicas y las tecnologías para gestionar bienes y servicios. Entregamos sólidos conocimientos en electrónica de potencia, automatización, sistemas digitales y computación.
        `,
      },
      {
        title: "Mecánica",
        carrera: "Ingeniería Civil Mecánica",
        puntaje: 0,
        campoLaboral: `
        Cualquier empresa del sector productivo o de servicios, en las áreas de mantenimiento, ingeniería de desarrollo y administración. También pueden trabajar de manera independiente en oficinas de ingeniería y empresas de los sectores químico, minero, forestal, celulosa y papel, siderúrgico, eléctrico, construcción y servicios.
        `,
        orden: 6,
        empleabilidad: 90,
        icon: "cogs",
        video: "z9hvkxX_BJE",
        videos: {
          y_egresado: 'KkWLcBs_8l4',
          y_profesor: 'OLgxuPzbkMI',
          v_alumno: '656340388?h=77ab4d45e9',
          y_recorrido: 'Y6Kt6D0X_Cc',
          y_laboratorio: 'i88uJl1qiqg',
        },
        icono: "iconomecanica.png",
        color: "#005EE2",
        admision: "https://admision.udec.cl/ingenieria-civil-mecanica/",
        desc: `
        Entregamos las herramientas necesarias para solucionar problemas complejos, además de desarrollar investigaciones y estudios detallados. Potenciamos la formación de un liderazgo proactivo en equipos multidisciplinarios, como también la comunicación efectiva y el inglés como segundo idioma.
        `,
      },
      {
        title: "Informática",
        carrera: "Ingeniería Civil Informática",
        puntaje: 0,
        campoLaboral: `
        Abarca la más amplia variedad de pequeñas, medianas y grandes empresas o instituciones del área en el medio regional y nacional, que requieren planificar, proyectar, evaluar, diseñar, construir, mantener, operar, organizar, controlar y dirigir sistemas informáticos.
        `,
        orden: 9,
        empleabilidad: 93,
        icon: "th",
        video: "3lf28_vgwtc",
        videos: {
          y_egresado: '0kmgeDMb17Q',
          y_profesor: '0m_-KE486uk',
          v_alumno: '656343468?h=94fb37bbd2',
          y_recorrido: 'AhwiQlyWysE',
          y_laboratorio: '1KQWEGVEtSg',
        },
        icono: "iconoinformatica.png",
        color: "#28235D",
        admision: "https://admision.udec.cl/ingenieria-civil-informatica/",
        desc: `
        Preparamos profesionales para identificar, abordar y solucionar problemas que requieren procesamiento automático de información, aplicando principios de matemáticas, ciencias de la ingeniería y computación. Entregamos conocimientos para reconocer necesidades de usuarios, analizar e interpretar grandes volúmenes de datos, además de diseñar experimentos para evaluar, caracterizar y modelar sistemas informáticos complejos.
        `,
      },
      {
        title: "Aeroespacial",
        carrera: "Ingeniería Civil Aeroespacial",
        puntaje: 0,
        campoLaboral: `
        Hoy, nuestros titulados se encuentran trabajando en empresas nacionales aeronáuticas, de la aviación comercial, ingeniería, academia, emprendimientos propios y empresas extranjeras. Un porcentaje significativo cuenta con estudios de postgrado y un 60% declara trabajar en el área aeroespacial. Además, el rápido desarrollo de los Sistemas Aéreos Piloteados Remotamente, o RPAS por sus siglas en inglés, presenta un mercado con gran potencial de crecimiento y con numerosas nuevas oportunidades.
        `,
        orden: 7,
        empleabilidad: 83,
        icon: "solar-system",
        video: "wYUtnbFr7mg",
        videos: {
          y_egresado: 'XfYeMoHwASc',
          y_profesor: 'GDoA3mojCNo',
          v_alumno: '656337067?h=a8b0e498fd',
          y_recorrido: '4ZBG9txfPg0',
          y_laboratorio: 'VrxiB5dLYEU',
        },
        icono: "iconoaeroespacial.png",
        color: "#009DE0",
        admision: "https://admision.udec.cl/ingenieria-civil-aeroespacial/",
        desc: `
        Formamos profesionales capaces de concebir, diseñar, implementar y operar sistemas, productos y procesos relacionados con la tecnología aeronáutica y espacial. Entregamos herramientas para solucionar problemas complejos en el ámbito de la aeronáutica y el espacio, así como desarrollar investigaciones en el área.
        `,
      },
    ],
  },
  getters: {
    hobbies(state) {
      return state.hobbies
    },
    intereses(state) {
      return state.intereses
    },
    carreras(state) {
      return state.carreras
    },
    has_resultadoTestVocacional(state) {
      return state.has_resultadoTestVocacional
    },
    has_resultadoLoadedTestVocacional(state) {
      return state.has_resultadoLoadedTestVocacional
    },
    has_estadoTestVocacional(state) {
      return state.has_estadoTestVocacional
    },
    resultadoTestVocacional(state) {
      return state.resultadoTestVocacional
    },
    consultando_test(state) {
      return state.consultando_test
    },

  },
  mutations: {
    consultado_testVocacional(state) {
      state.has_estadoTestVocacional = true;
    },
    no_consultado_testVocacional(state) {
      state.has_estadoTestVocacional = false;
    },
    si_testVocacional(state) {
      state.has_resultadoTestVocacional = true;
    },
    no_testVocacional(state) {
      state.has_resultadoTestVocacional = false;
    },
    si_testVocacionalLoaded(state) {
      state.has_resultadoLoadedTestVocacional = true;
    },
    no_testVocacionalLoaded(state) {
      state.has_resultadoLoadedTestVocacional = false;
    },
    post_resultadoTestVocacional(state, { data }) {
      state.resultadoTestVocacional = data;
    },
    clear_resultadoTestVocacional(state) {
      state.resultadoTestVocacional = {};
    },
    si_consultando_test(state) {
      state.consultando_test = true;
    },
    no_consultando_test(state) {
      state.consultando_test = false;
    },
  },
  actions: {

  },
  modules: {

  }
}

export const mixinFI = {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'hobbies',
      'intereses',
      'carreras',
      'has_resultadoTestVocacional',
      'has_estadoTestVocacional',
      'resultadoTestVocacional',
      'has_resultadoLoadedTestVocacional',
      'consultando_test'
    ]),
    hobbiesUsuario() {
      let res = []
      if (this.has_datosUsuario && typeof (this.datosUsuario.data.meta['wpcf-intereses-hobbies']) !== 'undefined') {


        res = this.hobbies.filter((el, index) => {
          let indexStr = index.toString();
          return this.datosUsuario.data.meta['wpcf-intereses-hobbies'].includes(indexStr);
        });

      }

      return res

    },
    interesesUsuario() {
      let res = []


      if (this.has_datosUsuario && typeof (this.datosUsuario.data.meta['wpcf-intereses-tecnologicos']) !== 'undefined') {
        res = this.intereses.filter((el, index) => {
          let indexStr = index.toString();
          return this.datosUsuario.data.meta['wpcf-intereses-tecnologicos'].includes(indexStr);
        });
      }

      return res
    },
    resultadoCarreras() {

      let carreras = this.carreras

      if (this.has_resultadoLoadedTestVocacional) {

        let resultadoTest = this.resultadoTestVocacional
        let keysRes = Object.keys(resultadoTest)
        // console.log(resultadoTest)
        // console.log(keysRes)

        keysRes.forEach((keyRes) => {

          carreras.forEach((carrera, keyCarrera) => {
            if (carrera.carrera == keyRes) {
              carreras[keyCarrera].puntaje = resultadoTest[keyRes].puntaje
            }
          })

        })
      }


      carreras = this.carreras.filter(el => el.title !== 'Plan común')
      // carreras.sort((a, b) => (a.puntaje < b.puntaje) ? 1 : ((b.puntaje < a.puntaje) ? -1 : 0))
      carreras.sort((a, b) => (a.orden > b.orden) ? 1 : ((b.orden > a.orden) ? -1 : 0))


      let res = {
        data: carreras,
        labels: carreras.map(el => el.title),
        puntajes: carreras.map(el => el.puntaje),
        pors: carreras.map(el => el.puntaje / 24),
      }

      return res.data.sort((a, b) => (a.puntaje < b.puntaje) ? 1 : ((b.puntaje < a.puntaje) ? -1 : 0));
    },
    resultadoCarreras_ranking() {
      let res = this.resultadoCarreras
      res.data.sort((a, b) => (a.puntaje < b.puntaje) ? 1 : ((b.puntaje < a.puntaje) ? -1 : 0))

      return res
    }
  },
  methods: {
    ...mapMutations([
      'consultado_testVocacional',
      'no_consultado_testVocacional',
      'si_testVocacional',
      'no_testVocacional',
      'si_testVocacionalLoaded',
      'no_testVocacionalLoaded',
      'post_resultadoTestVocacional',
      'clear_resultadoTestVocacional',
      'si_consultando_test',
      'no_consultando_test',
    ]),
    neutralizarTest() {
      this.$store.commit('no_testVocacional')
      this.$store.commit('no_testVocacionalLoaded')
      this.$store.commit('no_consultado_testVocacional')
      this.$store.commit('no_consultando_test')
      this.$store.commit('clear_resultadoTestVocacional')
    },
    consultarEstadoTest() {
      this.axios.get('', {
        params: {
          endpoint: 'cliente/udec.has_respuestaTestVocacional_rut',
          rut: this.getRut
        }
      })
        .then(response => {
          if (response.data == true) {
            this.$store.commit('si_testVocacional')
            this.$store.commit('consultado_testVocacional')
          }
          if (response.data == false) {
            this.$store.commit('no_testVocacional')
            this.$store.commit('consultado_testVocacional')
          }
          // this.$store.commit('updateUserData', { data: response.data })
          // this.$store.commit('activarUserData')
        })
        .catch(() => {

        })
    },
    consultarRespuestaTest() {
      this.$store.commit('no_consultado_testVocacional')
      this.$store.commit('si_consultando_test')

      console.log('consultando');

      this.axios.get('', {
        params: {
          endpoint: 'cliente/udec.resultado_usuario_rut',
          rut: this.getRut
        }
      })
        .then(response => {
          if (response.data == false) {
            this.$store.commit('consultado_testVocacional')
            this.$store.commit('no_testVocacional')
            this.$store.commit('no_testVocacionalLoaded')
          } else {
            this.$store.commit('consultado_testVocacional')
            this.$store.commit('post_resultadoTestVocacional', { data: response.data })
            this.$store.commit('si_testVocacional')
            this.$store.commit('si_testVocacionalLoaded')
          }

          this.$store.commit('no_consultando_test')
        })
        .catch(() => {

        })
    }
  }
}