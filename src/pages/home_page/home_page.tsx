import { useSelector } from 'react-redux';
import './home_page.scss';
import { RootState } from '../../store/store';

export default function HomePage() {
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <main>
      {language === 'english' ? (
        <>
          <div className="personal-info">
            <img
              src="/Foto_camilo.jpg"
              alt="Imágen of Camilo Isaza"
              className="foto-camilo"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <h2>Camilo Isaza Gómez</h2>
            <h3>Administrative Engineer</h3>
            <h3>Full Stack Developer</h3>
            <p>Telephone: 300 3361274</p>
            <p>Living in Medellín - Colombia, open to work Worldwide</p>
            <div className="personal-info-skills">
              <div>
                <p>JavaScript</p>
                <img
                  src="./JavaScript-Logo.png"
                  alt="JavaScript"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>TypeScript</p>
                <img
                  src="./TypeScript-Logo.png"
                  alt="TypeScript"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>React</p>
                <img
                  src="./react_Logo.png"
                  alt="React"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>Redux</p>
                <img
                  src="./redux_Logo.png"
                  alt="Redux"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>SCSS</p>
                <img src="./scss_Logo.png" alt="SCSS" width={15} height={15} />
              </div>
              <div>
                <p>MongoDB</p>
                <img
                  src="./mongoDB_Logo.png"
                  alt="MongoDB"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>NodeJS</p>
                <img
                  src="./node_Logo.png"
                  alt="NodeJS"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>SQL</p>
                <img src="./SQL_Logo.png" alt="SQL" width={15} height={15} />
              </div>
              <div>
                <p>HTML</p>
                <img src="./html_Logo.png" alt="HTML" width={15} height={15} />
              </div>
              <div>
                <p>Python</p>
                <img
                  src="./python_Logo.png"
                  alt="Python"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
          <div className="professional-profile">
            <p>
              My name is Camilo Isaza, a graduate in Administrative Engineering
              from the Universidad EIA. My professional journey began at Groupe
              Seb Andean, where, after more than two years, I discovered my
              passion for software development and programming. This passion led
              me to acquire technical skills through courses in Python, SQL, and
              HTML, culminating in my participation in a bootcamp in Spain
              recognized as the best in the world for full stack web development
              in 2021. This path not only solidified my passion for technology
              but also confirmed my dedication and ability to adapt and grow in
              new and challenging fields.
            </p>
            <p>
              In addition to my technical training in programming, my education
              in Administrative Engineering has endowed me with critical skills
              in management, finance, accounting, and advanced Excel
              proficiency.
            </p>
            <p>
              My characteristics include logical-mathematical ability,
              resilience, commitment, discipline, and a skill for teamwork,
              always striving to exceed expectations. Outside of the
              professional realm, I enjoy exploring new cultures and places, am
              a sports enthusiast, especially football, and have a passion for
              music.
            </p>
            <p>
              This combination of technical and administrative skills allows me
              to tackle complex challenges with a comprehensive perspective,
              promoting a balance between technological innovation and strategic
              management. Due to this, along with a partner, we founded Fresh
              Studio Creativo, a web development and digital marketing company
              where we see our clients as partners. We dreamed it, and now we
              want to make our clients' dreams come true.
            </p>
          </div>
          <div className="experiencie">
            Professional Experience:
            <ul>
              <li>
                <div>
                  <h4>CoFounder of Fresh Studio Creativo</h4>
                  <p>Full Stack Developer and financial manager.</p>
                  <p>April 2024 - present</p>
                  <ul>
                    <li>
                      More than 10 unique and 100% customized web pages oriented
                      to the specific brand.
                    </li>
                    <li>
                      Technologies used: React, ExpressJS, TS, HTML, SCSS,
                      Angular, Wordpress, Strapi.
                    </li>
                    <li>Landing Pages.</li>
                    <li>Blog Pages using headless CMS as Back End.</li>
                    <li>
                      eCommerce Pages. Fully integrated payment APIs, 100%
                      customized designs.
                    </li>
                    <li>All pages are 100% responsive.</li>
                    <li>SCRUM methodology.</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h4>Freelance Developer</h4>
                  <p>Independent Application Developer.</p>
                  <p>December 2023 - present</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Groupe Seb Andean</h4>
                  <p>Financial Controller</p>
                  <p>December 2021 - September 2023</p>
                  <ul>
                    <li>Budgeting and adjustments.</li>
                    <li>Analysis and control of expenses and costs.</li>
                    <li>
                      Training and support within the company to other areas.
                    </li>
                    <li>
                      Constant communication with all areas of the company.
                    </li>
                    <li>Expert use of Excel and PowerPoint.</li>
                    <li>
                      Professional use of Agile, SAP, QlikView, and Power BI.
                    </li>
                    <li>Working online with people from all over the world.</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h4>Internship in Groupe Seb Andean</h4>
                  <p>Financial Controller</p>
                  <p>July 2021 - December 2021</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="Education">
            Education:
            <ul>
              <li>
                <h4>ISDI CODERS</h4>
                <p>Full Stack Development</p>
                <p>
                  September 2023 - December 2023 (More than 1000 hours of
                  programming (13 face-to-face weeks + 8 weeks online).
                </p>
              </li>
              <li>
                <h4>Universidad EIA (escuela de ingeniería de Antioquia)</h4>
                <p>Bachelor in Administrative Engineering</p>
                <p>July 2017 - December 2022.</p>
              </li>
              <li>
                <h4>Universidad EAFIT</h4>
                <p>8 week python course</p>
                <p>April 2022 - June 2022</p>
              </li>
              <li>
                <h4>Colegio Cumbres Medellín</h4>
                <p>Primary and Secondary education</p>
                <p>July 2004 - June 2017</p>
              </li>
            </ul>
          </div>
          <div className="tools">
            Tools and Knowledge:
            <ul>
              <li>
                Intermediate React: More than 10 web pages developed with this
                technology.
              </li>
              <li>
                JavaScript, TypeScript, SCSS, HTML, GIT Actions, Angular,
                Python.
              </li>
              <li>
                Full Stack applications with headless CMS: Wordpress or Strapi.
              </li>
              <li>Integration of RESTful APIs</li>
              <li>Full Stack: MERN & MEAN.</li>
              <li>CRUD system - NODE (Express).</li>
              <li>
                Database management: SQL (SQL Server, PostgreSQL) and NoSQL
                (MongoDB).
              </li>
              <li>Jest, testing tool.</li>
              <li>Advanced level Excel.</li>
            </ul>
          </div>
          <div className="skills">
            Skills:
            <ul>
              <li>Logical Mathematical Ability</li>
              <li>Cognitive Agility and Execution Capacity</li>
              <li>Problem Solving</li>
              <li>Creativity and Resourcefulness</li>
              <li>Resilience and Perseverance</li>
              <li>Frustration Tolerance</li>
              <li>Effective Communication and Charisma</li>
            </ul>
          </div>
          <div className="languages">
            Languages:
            <ul>
              <li>Spanish: Native</li>
              <li>English: Advanced (B2-C1)</li>
              <li>French: Intermediate (B2)</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="personal-info">
            <img
              src="/Foto_camilo.jpg"
              alt="Imágen of Camilo Isaza"
              className="foto-camilo"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <h2>Camilo Isaza Gómez</h2>
            <h3>Ingeniero Administrativo</h3>
            <h3>Desarrollador Full Stack</h3>
            <p>Teléfono: 300 3361274</p>
            <p>
              Viviendo en Medellín - Colombia, abierto a trabajar en todo el
              mundo
            </p>
            <div className="personal-info-skills">
              <div>
                <p>JavaScript</p>
                <img
                  src="./JavaScript-Logo.png"
                  alt="JavaScript"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>TypeScript</p>
                <img
                  src="./TypeScript-Logo.png"
                  alt="TypeScript"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>React</p>
                <img
                  src="./react_Logo.png"
                  alt="React"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>Redux</p>
                <img
                  src="./redux_Logo.png"
                  alt="Redux"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>SCSS</p>
                <img src="./scss_Logo.png" alt="SCSS" width={15} height={15} />
              </div>
              <div>
                <p>MongoDB</p>
                <img
                  src="./mongoDB_Logo.png"
                  alt="MongoDB"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>NodeJS</p>
                <img
                  src="./node_Logo.png"
                  alt="NodeJS"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>SQL</p>
                <img src="./SQL_Logo.png" alt="SQL" width={15} height={15} />
              </div>
              <div>
                <p>HTML</p>
                <img src="./html_Logo.png" alt="HTML" width={15} height={15} />
              </div>
              <div>
                <p>Python</p>
                <img
                  src="./python_Logo.png"
                  alt="Python"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>Angular</p>
                <img
                  src="./logo_angular.webp"
                  alt="HTML"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>NextJS</p>
                <img src="./next_logo.png" alt="HTML" width={15} height={15} />
              </div>
              <div>
                <p>WordPress</p>
                <img
                  src="./logo_wordpress.png"
                  alt="HTML"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>Express</p>
                <img
                  src="./logo_express.webp"
                  alt="HTML"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p>Docker</p>
                <img
                  src="./docker_logo.png"
                  alt="HTML"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>

          <div className="professional-profile">
            <p>
              Mi nombre es Camilo Isaza, graduado en Ingeniería Administrativa
              de la Universidad EIA. Mi trayectoria profesional comenzó en
              Groupe Seb Andean, donde, después de más de dos años, descubrí mi
              pasión por el desarrollo de software y la programación. Esta
              pasión me llevó a adquirir habilidades técnicas a través de cursos
              en Python, SQL y HTML, culminando en mi participación en un
              bootcamp en España reconocido como el mejor del mundo para
              desarrollo web full stack en 2021. Este camino no solo consolidó
              mi pasión por la tecnología sino que también confirmó mi
              dedicación y capacidad para adaptarme y crecer en campos nuevos y
              desafiantes.
            </p>
            <p>
              Además de mi formación técnica en programación, mi educación en
              Ingeniería Administrativa me ha dotado de habilidades críticas en
              gestión, finanzas, contabilidad y dominio avanzado de Excel.
            </p>
            <p>
              Mis características incluyen capacidad lógico-matemática,
              resiliencia, compromiso y disciplina. Fuera del ámbito
              profesional, disfruto explorar nuevas culturas y lugares, soy un
              entusiasta del deporte, especialmente el fútbol, y tengo una
              pasión por la música.
            </p>
            <p>
              Esta combinación habilidades técnicas y administrativas me permite
              enfrentar desafíos complejos con una perspectiva integral,
              promoviendo un equilibrio entre la innovación tecnológica y la
              gestión estratégica. Debido a esto, junto con un socio, abrimos
              Fresh Estudio Creativo, una empresa de desarrollo web y marketing
              digital en donde vemos a nuestros clientes como socios. Nosotros
              lo soñamos y ahora queremos hacerlos realidad los sueños de
              nuestros clientes.
            </p>
          </div>
          <div className="experiencie">
            Experiencia Profesional:
            <ul>
              <li>
                <div>
                  <h4>CoFundador de Fresh Studio Creativo</h4>
                  <p>Desarrollador Full Stack y administrador financiero.</p>
                  <p>Abril 2024 - presente</p>
                  <ul>
                    <li>
                      Más de 10 páginas web únicas y 100% personalizadas y
                      orientadas a la marca en cuestión.
                    </li>
                    <li>
                      Tecnólogias utilizadas: React, ExpressJS, TS, HTML, SCSS,
                      Angular, Wordpress, Strapi.
                    </li>
                    <li>Landing Pages.</li>
                    <li>Blog Pages. Utilizamos headless CMS como Back End.</li>
                    <li>
                      Páginas de eCommerce. APIs de pago completamente
                      integradas, diseños 100% personalizados.{' '}
                    </li>
                    <li>Todas las páginas son 100% responsive.</li>
                    <li>Metodología SCRUM.</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h4>Desarrollador Freelance</h4>
                  <p>Desarrollador de Aplicaciones Independiente.</p>
                  <p>Diciembre 2023 - presente</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Groupe Seb Andean</h4>
                  <p>Controlador Financiero</p>
                  <p>Diciembre 2021 - Septiembre 2023</p>
                  <ul>
                    <li>Realización de presupuestos y ajustes.</li>
                    <li>Análisis y control de gastos y costos.</li>
                    <li>
                      Capacitación y soporte dentro de la empresa a otras áreas.
                    </li>
                    <li>
                      Comunicación constante con todas las áreas de la empresa.
                    </li>
                    <li>Uso experto de Excel y PowerPoint.</li>
                    <li>Uso profesional de Agile, SAP, QlikView y Power BI.</li>
                    <li>Trabajo en línea con personas de todo el mundo.</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h4>Pasantía en Groupe Seb Andean</h4>
                  <p>Controlador Financiero</p>
                  <p>Julio 2021 - Diciembre 2021</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="Education">
            Educación:
            <ul>
              <li>
                <h4>ISDI CODERS</h4>
                <p>Desarrollo Full Stack</p>
                <p>
                  Septiembre 2023 - Diciembre 2023 (Más de 1000 horas de
                  programación (13 semanas presenciales + 8 semanas en línea)
                </p>
              </li>
              <li>
                <h4>Universidad EIA (escuela de ingeniería de Antioquia)</h4>
                <p>Profesional en Ingeniería Administrativa</p>
                <p>Julio 2017 - Diciembre 2022.</p>
              </li>
              <li>
                <h4>Universidad EAFIT</h4>
                <p>Curso de python de 8 semanas</p>
                <p>Abril 2022 - Junio 2022</p>
              </li>
              <li>
                <h4>Colegio Cumbres Medellín</h4>
                <p>Educación primaria y secundaria</p>
                <p>Julio 2004 - Junio 2017</p>
              </li>
            </ul>
          </div>
          <div className="tools">
            Herramientas y Conocimientos:
            <ul>
              <li>
                React intermedio: Más de 10 páginas web realizadas con esta
                tecnología.
              </li>
              <li>
                JavaScript, TypeScript, SCSS, HTML, GIT Actions, Angular,
                Python.
              </li>
              <li>
                Aplicaciónes Full Stack con headless CMS: Wordpress o Strapi.
              </li>
              <li></li>
              <li>Integración de APIs RESTful </li>
              <li>Full Stack: MERN & MEAN.</li>
              <li>Sistema CRUD - NODE (Express).</li>
              <li>
                Gestión de bases de datos: Sql (SQL Server, PostgreSQL) y NoSql
                (MongoDB).
              </li>
              <li>Jest, herramienta de pruebas.</li>
              <li>Nivel avanzado de Excel.</li>
            </ul>
          </div>
          <div className="skills">
            Habilidades:
            <ul>
              <li>Capacidad Lógico Matemática</li>
              <li>Agilidad Cognitiva y Capacidad de Ejecución</li>
              <li>Resolución de Problemas</li>
              <li>Creatividad e Ingenio</li>
              <li>Resiliencia y Perseverancia</li>
              <li>Tolerancia a la Frustración</li>
              <li>Comunicación Efectiva y Carisma</li>
            </ul>
          </div>
          <div className="languages">
            Idiomas:
            <ul>
              <li>Español: Nativo</li>
              <li>Inglés: Avanzado (B2-C1)</li>
              <li>Francés: Intermedio (B2)</li>
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
