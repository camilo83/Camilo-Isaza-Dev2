import { useSelector } from 'react-redux';
import './projects.scss';
import { RootState } from '../../store/store';

export default function MyProjects() {
  const { language } = useSelector((state: RootState) => state.languageState);

  return (
    <div className="project-container">
      {language === 'english' ? (
        <>
          <h1>My Projects</h1>
          <div className="project">
            <h2>ECOMMERCE BOT</h2>
            <span className="red">In Development</span>
            <p>
              Together with Onest Vision, a company that provides personalized
              development services, we created a Bot for WhatsApp that,
              depending on the client's information, filters the products and
              shows the most likely ones to be purchased by the user. So far,
              the bot is activated for the company Tierra Agro; however, the
              intention is to scale this service.
            </p>
            <p>
              For the development of this Bot, C# was used, and the Front End
              was created with React. Currently, the product database is in
              Strapi and is replicable and reusable for any company that wants
              to start selling directly through WhatsApp. We are still in the
              development stage, and soon it will be available for any company
              that wants to hire us. Aspects like the user interface or the
              payment gateway are still pending; however, here’s a preview.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_bot.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>ICONO MEDIA</h2>
            <a href="https://www.iconomedia.co/" target="_blank">
              Visit Website
            </a>
            <span className="orange">Final steps</span>
            <p>
              We had the opportunity to create the first website for a
              university group from the Politécnico Grancolombiano. The group
              aims to generate communication projects with the entire community
              through interviews, photographic series, and podcasts. They chose
              us as the best option because they wanted a unique 100%
              personalized experience, more than just a website.
            </p>
            <p>
              For the development of this website, we had to create a total of
              seven dynamic entities in the back-end with their respective
              relationships, and on the front-end, we had to create a unique and
              personalized experience for the user. The page was developed in
              React JS and consumes the WordPress API, using it as a Headless
              CMS.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_iconomedia.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>SM TRANSPORTES</h2>
            <a href="https://smtransportes.com/" target="_blank">
              Visit Website
            </a>
            <span className="orange">Final steps</span>
            <p>
              SM Transportes is a logistics solutions company with more than 53
              years of experience, over 1,200 clients, and more than 115
              employees. They trusted Fresh Estudio Creativo and me to change
              the company's image. First, a major rebranding job was done,
              changing its colors, logos, language, and of course, its online
              presence.
            </p>
            <p>
              The website uses React Redux technology to improve performance. It
              only makes one call to the server to retrieve the data and then
              reuses it to make the website much more dynamic and faster for
              users.
            </p>
            <div className="video-container">
              <video controls>
                <source
                  src="/videos/video_smtransportes.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>RENOVISTA</h2>
            <a href="https://renovista.com.co/" target="_blank">
              Visit Website
            </a>
            <span className="orange">Final steps</span>
            <p>
              Renovista is an engineering and architecture company from
              Medellin. We took inspiration from the https://bat.archi/ website
              to replicate the menu design, where the color is not fixed and
              changes to the opposite color of the background it's on.
              Similarly, this site employs a wide variety of animations, aiming
              to make the site 100% unique.
            </p>
            <p>
              This website was developed in React JS and consumes the WordPress
              API, using it as a Headless CMS. The page has three dynamic
              sections: projects, services, and team. The idea is that the
              owners can modify it at any time.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_renovista.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>FRESH ESTUDIO CREATIVO</h2>
            <a href="https://freshestudiocreativo.com/" target="_blank">
              Visit Website
            </a>
            <span className="green">Completed</span>
            <p>
              Fresh Estudio Creativo is the company that gave me the opportunity
              to join during its first month of life. Our value proposition is
              to make our clients' dreams possible through solutions that set
              them apart from their competition. As for me, with Web
              Development, each design is unique and personalized because we
              believe that our goal is not just to deliver but to be the best at
              what we do.
            </p>
            <p>
              The modern design of this website was created by my colleague, and
              I took care of the development part. The website was developed
              with Next JS and consumes the WordPress API, using it as a
              Headless CMS. The idea of the website was to focus all the
              attention on the homepage and block vertical scrolling, allowing
              for a more modern experience.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_fresh.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="project">
            <h2>SANTALMA</h2>
            <span className="orange">Final steps</span>
            <p>
              Santalma is a newly created company in Medellín, whose purpose is
              to take advantage of the boom in the city regarding new types of
              accessories. Since the products are relatively cheap, and there is
              no physical store, the website became their main need in terms of
              sales. With them, we did an excellent job to ensure that the
              website was not only functional but also that its design was
              related to the brand.
            </p>
            <p>
              The Santalma website represented one of the biggest and most
              rewarding challenges I have had so far as it was a 100% functional
              eCommerce, with all the features that an online store has:
              shopping cart, product filtering from the back end, individual
              product detail page, and even variable products. Doing this
              eCommerce opened up a great opportunity for clients, as with
              custom code they do not have to pay the commissions and monthly
              fees that eCommerce platforms like Shopify charge.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_santalma.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>BERSAN</h2>
            <a href="https://bersan.com.co/">Visit Website</a>

            <span className="green">Completed</span>
            <p>
              Bersan is another engineering sector company, particularly
              dedicated to the sale of construction products. It is a
              medium-sized company, and they already had a website, but it did
              not provide much information about their products and services.
              Therefore, the goal of this project was to completely revamp the
              product section (with more than 500 different products) and
              services, and add a news blog.
            </p>
            <p>
              Bersan was a real challenge and I am very grateful to have been
              able to contribute since it involved updating an existing site,
              which was also on Wordpress. It was a whole learning experience
              where I went from having a beginner level to an intermediate level
              in WordPress, and although the design and front-end possibilities
              were limited, we concluded with a very good result.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_bersan.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>GENUINAMENTE</h2>
            <a href="https://genuinamente.co/">Visit Website</a>
            <span className="green">Completed</span>
            <p>
              Genuinamente was one of the first projects I had as an independent
              Full Stack web developer. Like us at Fresh Estudio Creativo,
              Genuinamente is dedicated to brand creation nationwide. This not
              only represented an opportunity to create their website but also a
              strategic ally in terms of new clients, as branding and websites
              are two services that complement each other in the creation of a
              company.
            </p>
            <p>
              The creation of the Genuinamente website represented a challenge
              mainly in terms of design, as the site had to be very visual and
              attractive to the user. The site was developed in React JS and
              consumes the Wordpress API, using it as a Headless CMS. The site
              has a project gallery, a contact form, and a services section.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_genuinamente.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>SOLCONSTANTES</h2>
            <a href="https://solconstantes.com/">Visit Website</a>
            <span className="green">Completed</span>
            <p>
              Solconstantes is a traditional company in the engineering sector
              that has provided various services in electricity,
              telecommunications, maintenance, and even construction for
              decades. This project, being a company with many years of history,
              represented our first opportunity to contribute to the digital
              transformation of the country and motivates us to continue doing
              so.
            </p>
            <p>
              Unlike other projects, for the Solconstantes website, Strapi was
              used, serving as a headless CMS and React JS for the front end.
              The site has a blog, a project gallery, a contact form, and a
              services section.
            </p>
            <div className="video-container">
              <video controls>
                <source
                  src="/videos/video_solconstantes.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>FARNIENTE</h2>
            <a href="https://farniente.travel/">Visit Website</a>
            <span className="green">Completed</span>
            <p>
              Farniente is a travel agency focused on high-value trips. The
              value proposition is very interesting, as they propose to create
              an absolutely personalized itinerary focused on each client's
              preferences.
            </p>
            <p>
              I could say that this project is the only 100% front-end landing
              type I have done so far. The site was also developed in React and
              I took advantage of Redux to manage the state regarding language.
              In fact, it uses the IPInfo API which allows to know the
              geographic information of the connected user and according to
              this, change the language when entering the site. The UX/UI design
              is completely thought in the company's value proposition and ease
              of use for the user.
            </p>
            <p>
              Additionally, Fresh Estudio Creativo also took care of Farniente's
              branding.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_farniente.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>ALUS</h2>
            <a href="https://alus.com.co/">Visit Website</a>
            <span className="green">Completed</span>
            <p>
              ALUS is a real estate agency located in Medellín, focusing on the
              sale of real estate projects such as apartments, offices, or land.
              This was the first project that Fresh Estudio Creativo had, which
              makes it very special.
            </p>
            <p>
              The interface of this website was developed in React and consumes
              the Wordpress API, using it as a Headless CMS. Since the real
              estate agency has projects outside the country, mainly in the
              United States, the site has the option to change the language to
              English or Spanish, in fact, it uses the IPInfo API which allows
              knowing the geographic information of the connected user and
              according to this, change the language when entering the site. It
              is also integrated with the Google Maps API to show the location
              of the projects, all this is manageable and modifiable from the
              Wordpress admin portal.
            </p>
            <p>
              Additionally, Fresh Estudio Creativo also took care of ALUS'
              branding and site photography.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_alus.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>SISMARCO</h2>
            <a href="https://www.sismarco.com/">Visit Website</a>
            <span className="green">Completed</span>
            <p>
              Sismarco is a construction company in Medellín, Colombia. In this
              project, a corporate website was developed with information about
              the company, the products they market (including a detailed
              product view), the services they offer, and a contact form.
              Without a doubt, the site that took the most time, since the
              client wanted it 100% customized in each of its pages, as you can
              see in the video, there are not many design patterns.
            </p>
            <p>
              The site was developed with React JS and initially, the backend
              was made with Express JS. However, upon completing the site, I
              decided to remove the custom backend and migrate all the data to a
              headless CMS, in this case, using WordPress solely as a content
              manager. This decision was made due to the complexity that could
              arise in the future for the client to manage the site, and because
              it really made no sense to have a custom backend since the site
              did not manage users.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_sismarco.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          {/*   <div className="project">
            <h2>SUPERKASKOS</h2>
            <p>
              Superkaskos was the first company that gave me the opportunity to
              apply everything I learned during my intensive Full Stack Web
              Development course. Although it is the only one on this list that
              did not go into production, it was an excellent opportunity to
              apply everything I learned during the 4 months and more than 100
              hours of the course.
            </p>
            <p>
              In this project, an e-commerce site was developed up to the stage
              of adding to the cart. It has user and role management, and an
              admin panel for managing products and users. Additionally, the
              backend was custom-made with Express JS where I created more than
              10 endpoints to make the application more dynamic and efficient.
              Here is a short video of the result.
            </p>
            <div className="video-container">
              <video controls>
                <source src="./video/superkaskos_video.mp4" type="video/mp4" />
              </video>
            </div>
          </div> */}
        </>
      ) : (
        <>
          <h1>Mis Proyectos</h1>
          <div className="project">
            <h2>ECOMMERCE BOT</h2>
            <span className="red">En Desarrollo</span>
            <p>
              En conjunto con Onest Vision, empresa prestadora de servicios de
              desarrollo personalizados, creamos un Bot para WhatsApp en el que
              dependiendo de la información del cliente, filtraremos los
              productos y mostraremos lo más probable a comprar por dicho
              usuario. Hasta el momento el bot está activado para la empresa
              Tierra Agro, sin embargo, la intención es masificar este servicio.
            </p>
            <p>
              Para el desarrollo de este Bot, se utilizo c# y el Front End fue
              creado con React. Actualmente la base de datos de productos está
              en Strapi y es replicable y reutilizable para cualquier empresa
              que quiera comenzar a vender directamente por WhatsApp. Seguimos
              en etapa de desarrollo y próximanmente estará disponible para
              cualquier empresa que quiera contratarnos. Aspectos como la
              interfaz de usuario, o la pasarela de pagos, son cosas que siguen
              pendientes, sin embargo, aquí les dejo un preview.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_bot.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>ICONO MEDIA</h2>
            <a href="https://www.iconomedia.co/" target="_blank">
              Visitar Página
            </a>
            <span className="orange">Etapa Final</span>
            <p>
              Tuvimos la oportunidad de generar el primer sitio web propio de un
              semillero de la universidad Politécnico Grancolombiano. El
              semillero tiene como objetivo generar proyectos de comunicación
              con toda la comunidad por medio de entrevistas, series
              fotográficas y podcast. Nos escogieron como la mejor opción ya que
              más que un sitio web, querían una experiencia única 100$
              personalizada.
            </p>
            <p>
              Para el desarrollo de esta pagina web, debimos crear un total de
              siete entidades dinámicas en el back-end, con sus respectivas
              relaciones, y en el front-end, debimos crear una experiencia única
              y personalizada para el usuario. La página fue desarrollada en
              React JS y consume la API de Wordpress, utilizándolo como Headless
              CMS.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_iconomedia.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>SM TRANSPORTES</h2>
            <a href="https://smtransportes.com/" target="_blank">
              Visitar Página
            </a>
            <span className="orange">Etapa Final</span>
            <p>
              SM Transportes es una empresa de soluciones logisticas con mas de
              53 años de experiencia, mas 1.200 clientes y mas de 115 empleados
              que confió en Fresh Estudio Creativo y en mí para cambiar la
              imagen de la empresa. Pues primero se realizó un gran trabajo de
              rebranding, cambiando sus colores, logos, lenguaje y por supuesto,
              su presencia en Internet.
            </p>
            <p>
              La página utiliza la tecnología React Redux para mejorar el
              rendimiento. Pues solo hace una llamada al servidor para traer los
              datos y luego los reutiliza para hacerla mucho mas dinámica y
              rápida para los usuarios.
            </p>
            <div className="video-container">
              <video controls>
                <source
                  src="/videos/video_smtransportes.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>RENOVISTA</h2>
            <a href="https://renovista.com.co/" target="_blank">
              Visitar Página
            </a>
            <span className="orange">Etapa Final</span>
            <p>
              Renovista es una empresa de ingeniería y arquitectura de Medellin.
              Nos inspiramos en la página https://bat.archi/ para replicar el
              diseño del menú, en el que el color no está definido y va
              cambiando por el color opuesto al fondo en el que está.
              Igualmente, en esta página empleamos una gran variedad de
              animaciones, intentando que el sitio sea 100% único.
            </p>
            <p>
              Está página fue desarrollada en React JS y consume la API de
              Wordpress, utilizándolo como Headless CMS. La página cuenta con
              tres secciones dinámicas: proyectos, servicios y equipo. La idea
              es que los dueños puedan modificarla en cualquier momento.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_renovista.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>FRESH ESTUDIO CREATIVO</h2>
            <a href="https://freshestudiocreativo.com/">Visitar Página</a>
            <span className="green">Completado</span>
            <p>
              Fresh Estudio Creativo es la compañía que me dio la oportunidad de
              entrar apenas en su primer mes de vida. La propuesta de valor de
              nosotros es hacer los sueños de nuestros clientes posibles
              mediante soluciones que los diferencien de su competencia. Por mi
              parte, con el Desarrollo Web, cada diseño es único y
              personalizado, ya que consideramos que nuestra meta no es solo
              cumplir sino ser los mejores en lo que hacemos.
            </p>
            <p>
              El moderno diseño de esta página web fue realizado por mi
              compañero de trabajo, y yo me encargué de la parte de desarrollo.
              La página fue desarrollada con Next JS y consume la API de
              Wordpress, utilizándolo como Headless CMS. La idea de la página
              era concentrar toda la atención en la página de inicio y bloquear
              el scroll vertical, permitiendo una experiencia más moderna.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_fresh.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>SANTALMA</h2>
            <span className="orange">Etapa Final</span>
            <p>
              Santalma es una compañía recién creada en la ciudad de Medellín
              cuyo propósito es aprovechar el boom que existe en la ciudad en
              cuanto a nuevos tipos de accesorios. Al ser productos
              relativamente baratos, y al no tener una tienda física, la página
              web se convirtió en su principal necesidad en cuanto a ventas. Con
              ellos, hicimos un excelente trabajo para conseguir que la página
              web no solo fuera funcional, sino que su diseño también estuviera
              relacionado con la marca.
            </p>
            <p>
              La página web de Santalma representó uno de los retos más grandes
              y provechosos que he tenido hasta el momento ya que se trató de un
              eCommerce 100% funcional, con todas las características con las
              que cuenta una tienda en línea: carrito de compras, filtración de
              productos desde el back end, página individual de detalle e
              incluso productos variables. Haciendo este eCommerce se abrió una
              gran oportunidad de cara a los clientes, ya que al ser código
              propio no deben pagar las comisiones y mensualidades que cobran
              las plataformas de eCommerce como Shopify.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_santalma.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>BERSAN</h2>
            <a href="https://bersan.com.co/">Visitar Página</a>
            <span className="green">Completado</span>
            <p>
              Bersan es otra compañía del sector de la ingeniería, que se dedica
              particularmente a la venta de productos de construcción. Es una
              empresa mediana, y ya tenían su página web, sin embargo, era una
              página que no daba mayor información sobre sus productos y
              servicios. Por lo tanto, el objetivo de este proyecto fue
              modificar completamente la sección de productos (con más de 500
              diferentes productos) y servicios, y agregar un blog de noticias.
            </p>
            <p>
              Bersan representó un verdadero reto y estoy muy agradecido de
              haber podido aportar ya que se trató de una actualización de una
              página existente, que, además, estaba en Wordpress. Fue todo un
              aprendizaje en el cual pase de tener un nivel principiante a un
              nivel intermedio en WordPress, y aunque las posibilidades de
              diseño y front-end eran limitadas, concluimos con un muy buen
              resultado.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_bersan.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>GENUINAMENTE</h2>
            <a href="https://genuinamente.co/">Visitar Página</a>
            <span className="green">Completado</span>
            <p>
              Genuinamente fue uno de los primeros proyectos que tuve como
              desarrollador independiente de páginas web Full Stack. Al igual
              que nosotros en Fresh Estudio Creativo, Genuinamente se dedica a
              la creación de marcas a nivel nacional. Esto no solo representó
              una oportunidad para crear su sitio web, sino un aliado
              estratégico en cuanto a nuevos clientes, ya que el branding y las
              páginas web son dos servicios que se complementan en la creación
              de una empresa.
            </p>
            <p>
              La elaboración del sitio web de Genuinamente, representó un reto
              en cuanto al diseño principalmente, ya que la página debía ser muy
              visual y atractiva para el usuario. La página fue desarrollada en
              React JS y consume la API de Wordpress, utilizándolo como Headless
              CMS. La página cuenta con una galería de proyectos, un formulario
              de contacto y una sección de servicios.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_genuinamente.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>SOLCONSTANTES</h2>
            <a href="https://solconstantes.com/">Visitar Página</a>
            <span className="green">Completado</span>
            <p>
              Solconstantes es una compañía tradicional en el sector de la
              ingeniería, que durante décadas han prestado diferentes servicios
              en cuanto a electricidad, telecomunicaciones, mantenimiento e
              incluso construcciones. Este proyecto, al tratarse de una compañía
              con muchos años de antigüedad, representó nuestra primera
              oportunidad de aportar a la transformación digital del país y nos
              motiva a seguirlo haciendo.
            </p>
            <p>
              A diferencia de otros proyectos, para la página web de
              Solconstantes se utilizó Strapi, sirviéndonos como headless CMS y
              React JS para el front-end. La página cuenta con un blog, una
              galería de proyectos, un formulario de contacto y una sección de
              servicios.
            </p>
            <div className="video-container">
              <video controls>
                <source
                  src="/videos/video_solconstantes.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>FARNIENTE</h2>
            <a href="https://farniente.travel/">Visitar Página</a>
            <span className="green">Completado</span>
            <p>
              Farniente es una agencia de viajes cuyo enfoque está en viajes de
              alto valor. La propuesta de valor es muy interesante, ya que
              proponen armar un itinerario absolutamente personalizado y
              enfocado en las preferencias de cada cliente.
            </p>
            <p>
              Podría decir que este proyecto es el único de tipo landing, 100%
              front-end que he realizado hasta ahora. La página también fue
              desarrollada en React y aproveché las ventajas de Redux para
              manejar el estado en cuanto al idioma. De hecho, utiliza la API de
              IPInfo que permite conocer la información geográfica del usuario
              conectado y de acuerdo a esto, modificar el idioma al entrar en la
              página. El diseño UX/UI está completamente pensado en la propuesta
              de valor de la empresa, y en la facilidad de uso para el usuario.
            </p>
            <p>
              Como dato adicional, Fresh Estudio Creativo también se encargó del
              branding de Farniente.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_farniente.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>ALUS</h2>
            <a href="https://alus.com.co/">Visitar Página</a>
            <span className="green">Completado</span>
            <p>
              ALUS es una inmobiliaria ubicada en la ciudad de Medellín, cuyo
              enfoque es la venta de proyectos inmobiliarios como apartamentos,
              oficinas o terrenos. Este fue el primer proyecto que tuvo la firma
              de Fresh Estudio Creativo, lo cual lo hace muy especial.
            </p>
            <p>
              La interfaz de esta página web fue desarrollada en React y consume
              la API de Wordpress, utilizándolo como Headless CMS. Debido a que
              la inmobiliaria tiene proyectos por fuera del país, principalmente
              en Estados Unidos, la página tiene la opción de cambiar el idioma
              a inglés o español, de hecho, utiliza la API de IPInfo que permite
              conocer la información geográfica del usuario conectado y de
              acuerdo a esto, modificar el idioma al entrar en la página.
              También está integrada con la API de Google Maps para mostrar la
              ubicación de los proyectos, todo esto es administrable y
              modificable desde el portal de administrador de Wordpress.
            </p>
            <p>
              Como dato adicional, Fresh Estudio Creativo también se encargó del
              branding de ALUS y de las fotografías del sitio web.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_alus.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="project">
            <h2>SISMARCO</h2>
            <a href="https://www.sismarco.com/">Visitar Página</a>
            <span className="green">Completado</span>
            <p>
              Sismarco es una empresa de construcción de Medellín, Colombia. En
              este proyecto, se desarrolló una página web corporativa con
              información sobre la empresa, los productos que comercializan
              (incluyendo una vista detallada de producto), los servicios que
              ofrecen, y un formulario de contacto. Sin lugar a dudas, la página
              que más tiempo me ha tomado, ya que el cliente la quería 100%
              personalizada en cada una de sus páginas, como puedes ver en el
              video, no hay muchos patrones de diseño.
            </p>
            <p>
              La página fue desarrollada con React JS y en un primer instante el
              back-end fue hecho con Express JS. Sin embargo, al finalizar la
              página, tomé la decisión de eliminar el back-end propio y migrar
              todos los datos a un headless CMS, en este caso utilicé WordPress
              únicamente como gestor de contenido. Esta decisión fue tomada
              debido a la complejidad que podría tener a futuro el cliente para
              gestionar la página, y porque realmente al no manejar usuarios no
              le veía mayor sentido tener un back-end propio.
            </p>
            <div className="video-container">
              <video controls>
                <source src="/videos/video_sismarco.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          {/*  <div className="project">
            <h2>SUPERKASKOS</h2>
            <p>
              Superkaskos fue la primera empresa que me dio la oportunidad de
              aplicar todo lo aprendido durante mi curso intensivo de Desarrollo
              Web Full Stack. Aunque es la única en esta lista que no pasó
              finalmente a producción, fue una excelente oportunidad para
              aplicar todo lo aprendido durante los 4 meses y más de 100 horas
              que duró el curso.
            </p>
            <p>
              En este proyecto se desarrolló una página web de comercio, hasta
              la etapa de agregar al carrito, tiene manejo de usuarios y roles,
              y un panel de administración para la gestión de productos y
              usuarios. Además, el back-end fue hecho 100% a medida con Express
              JS en donde creé más de 10 endpoints para hacer la aplicación más
              dinámica y eficiente. A continuación, un pequeño video del
              resultado.
            </p>
            <div className="video-container">
              <video controls>
                <source src="./video/superkaskos_video.mp4" type="video/mp4" />
              </video>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}
