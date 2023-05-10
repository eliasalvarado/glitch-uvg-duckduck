import React from 'react'
import InformationBlock from './infoBlocks'

function MainInfoBlocks() {
    let text1 = "Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador,"
    text1 += "bloqueador de rastreadores y mejora de encriptación todo en una"

    let text2 = "Busca de forma privada con nuestra app o extension, añade búsqueda web privada"
    text2 += "a tu navegador preferido o busca en"

    let text3 = "Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda,"
    text3 += "bloqueador de rastreadores, mejora de encriptación y más. Disponible para"

    return(
        <div>
            <InformationBlock 
            img = "https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg" 
            title = "Privacidad para Chrome"
            text = {text1}
            link= "https://duckduckgo.com/app"
            text2="extensión de Chrome."/>

            <InformationBlock img = "https://duckduckgo.com/assets/home/landing/icons/search.svg" 
            title = "Motor de Búsqueda de Privacidad"
            text = {text2}
            link= "https://duckduckgo.com/"
            text2="duckduckgo.com."/>

            <InformationBlock img = "https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg" 
            title = "Navegador Primario"
            text = {text3}
            link= "https://duckduckgo.com/app"
            text2="iOS & Android"/>
        </div>
    )
}

export default MainInfoBlocks

