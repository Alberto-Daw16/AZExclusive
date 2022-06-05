import { Helmet } from "react-helmet-async";
import Image from "react-bootstrap/esm/Image";


function VPNScreen(){
return (<div>
        <Helmet>
            <title>Tutorial VPN-Compra</title>
        </Helmet>
        <h1 className="text-center hammer"><b>Cómo activar un juego con una key 'AZ Exclusive'</b></h1>
        <div>
            <p>&nbsp;</p>
            <p>En este tutorial vas a saber como activar un juego en la Microsoft Store , Steam y PlayStore</p>
            
            <p>El uso de VPN es obligatorio, ya que sino al canjearlo saldría un mensaje de error<br /></p>
            <p>&nbsp;</p>
            <h3 className="hammer"><strong>Ventajas:</strong></h3>
            <ul>
                <li>No hay problemas Xbox Live gift cards o similares porque ves el precio directamente</li>
                <li>Es más barato de lo habitual</li>
            </ul>
            <h3 className="hammer"><strong>Desventajas:</strong></h3>
            <ul>
            <li>El uso de VPN es obligatorio. Puedes comprar una key en AZExclusive!</li>
            </ul>
            <h3 className="hammer"><strong>Leyenda regiones:</strong></h3>
            <ul>
                <li>US: United States/Estados Unidos</li>
                <li>TR: Turkey/Turquía</li>
                <li>BR: Brazil/Brasil</li>
                <li>EU: Europe/Europa</li>
            </ul>
            <p>&nbsp;</p>
            <h1 className="hammer"><b>Paso 1: Busca tu juego</b></h1>
            <Image src="/images/step1.PNG"/>
            <p>&nbsp;</p>
            <h1 className="hammer"><b>Paso 2: AZExclusive &gt; Añadir a la cesta</b></h1>
            <p>Te recomendamos crear una cuenta antes de emprezar un pedido.😉</p>
            <Image src="/images/step2.png" style={{ maxWidth: '60rem' }}/>
            <p>Importante ver y recordar la región del juego seleccionado.</p>
            <p>&nbsp;</p>
            <h1 className="hammer"><b>Paso 3: AZExclusive &gt; Pago</b></h1>
            <p>Una vez rellenado los datos de facturación y elegido el método de pago solo queda tramitar el pedido.</p>
            <p>Recordar que habrá una comisión del 2 a 5%.</p>
            <p>&nbsp;</p>
            <h1 className="hammer"><b>Paso 4: Login en tu cuenta Microsoft - Steam - PlayStore</b> </h1>
            <p>Una vez con el código recibido entrar en esta página en el caso de Microsoft: <a href="https://redeem.microsoft.com">https://redeem.microsoft.com</a><br /></p>
            <p>Si el código recibido es de Playstation en esta página: <a href="https://www.playstation.com/en-us/support/store/redeem-ps-store-voucher-code/">https://www.playstation.com/en-us/support/store/redeem-ps-store-voucher-code/</a><br /></p>
            <p>Si el código recibido es de Steam en esta página: <a href="https://store.steampowered.com/account/redeemwalletcode?l=spanish">https://store.steampowered.com/account/redeemwalletcode?l=spanish</a><br /></p>
            <p>&nbsp;</p>
            <h1 className="hammer"><b>Paso 5: Activar VPN</b></h1>
            <p>Antes de añadir el código, debes activar tu vpn en la misma región que tú juego, en este caso US - United States</p>
            <p>VPNs que puedes usar, en nuestro caso vamos a usar NordVPN:</p>
            <ul>
                <li><a href="https://www.goldenfrog.com/vyprvpn/olympics-vpn?offer_id=201&amp;aff_id=2709">VyprVPN</a></li>
                <li><a href="https://go.nordvpn.net/aff_c?offer_id=15&amp;aff_id=35145&amp;url_id=902">NordVPN</a></li>
                <li><a href="https://www.linkev.com/?a_fid=xsc">ExpressVPN</a></li>
            </ul>
            <Image src="/images/vpn1.png"/>
            <Image src="/images/vpn2.png"/>
            <Image src="/images/vpn3.png"/>
            <p>&nbsp;</p>
            <h1 className="hammer"><b>Paso 6: Añadir el código</b></h1>
            <p>Una vez conectada la VPN, insertas el código en una de las páginas mencionadas en el paso 4 y sigues los pasos de esa propia página(En nuestro caso será la de Microsoft)</p>
            <Image src="/images/redeem1.png"/>
            <Image src="/images/redeem2.png"/>
            <Image src="/images/redeem3.png"/>
            <p>Y se acabó, el juego se descargará una introducido el código.😉</p>
        </div>      
</div>
);
}

export default VPNScreen;
