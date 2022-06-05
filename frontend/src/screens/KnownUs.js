import { Helmet } from "react-helmet-async";
import Image from 'react-bootstrap/Image'

function Knownus(){
return (<div>
        <Helmet>
            <title>Conócenos</title>
        </Helmet>
        <p>&nbsp;</p>
        <h1 className="hammer text-center"><b>Sobre nosotros</b></h1>
        <p>&nbsp;</p>
        <div>En cuanto a las debilidades de nuestra empresa, por ejemplo sería la inexperiencia en el ámbito laboral, lo cual puede dificultar el comienzo en gran medida. Desconocimiento financiero para poder realizar la página web con todos estos servicios. Y poco capital disponible para invertir desde el inicio.
            También existen una serie de amenazas como puede ser la competencia con otras empresas, hacerse hueco en el mercado y sobretodo competir con la clientela que ya tienen ciertas tiendas. Sin embargo tenemos unas fortalezas que otras no tienen como una gran capacidad de trabajo y organización que ayuda sobretodo a no estancarse cuando surgen problemas, innovar el producto que ya existe, aprovechar el crecimiento del mercado online debido a la pandemia y ofrecer servicios siempre con garantía demostrando honestidad y puntualidad.
            Pero sobre todo oportunidades como aprovechar las nuevas tecnologías, capacidad de adaptabilidad al mercado y ofrecer el mismo producto a un mejor precio.
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <h2 className="hammer"><b>Nuestro Logo</b></h2>
        <p>&nbsp;</p>
        <div><Image src="/images/logo.png" className="logo"/></div>
        <p>&nbsp;</p>
        <div>Este es el logo de la empresa, porque este logo y no otro, pues bueno todo empieza con un boceto a mano de la marca que quería mostrar, pero no me convencía el diseño de las letras y no sabía qué darle para al verlo, sentir que es mío. Entonces decidí hacer algo simple. 
            Porque AZ, la A y la Z representan todos los juegos que existen desde la A hasta la Z, y el porqué del águila es que representa la libertad que nos dan los videojuegos cuando jugamos.
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <h2 className="hammer"><b>Nuestra posición</b></h2>
        <p>&nbsp;</p>
        <div><Image src="/images/posicionamiento.png"/></div>
        <p>&nbsp;</p>
        <div>
            <p>G2A→ Una página donde la calidad es horrorosa y el precio del producto es muy alto.</p>
            <p>GAME→ Pasa parecido con G2A, sin embargo la calidad es bastante mejor que la anterior.</p>
            <p>FNAC→ No es una tienda especializada en videojuegos por lo que tanto el stock como el catálogo es reducido, es una tienda que te puede salvar de algún apuro pero no es la panacea.</p>
            <p>CDKEYS→ Una página exclusiva online que ofrece un servicio decente con una calidad también normalita.</p>
            <p>AZ Exclusive→ Sería nuestra empresa, la cual ofreceremos productos de la calidad a un precio.</p>
            <p>INSTANT GAMING→ Es una página muy buena que hasta hace poco ofrecía productos de buena calidad a un precio bajo, pero debido a problemas legales ahora se han encarecido esos productos.</p>
        </div>
</div>
);
}

export default Knownus;
