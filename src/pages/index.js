import React from "react"
import { graphql } from 'gatsby'

import { Header } from "../components/Header"
import {Main} from "../components/Main"
import {Footer} from "../components/Footer"
import "./style.css";

export const query = graphql`
query {
  alldata {
    projects {
      btnfaq
      btnblog
      btnenter
      btnstart
      btnlang
      subtitle
      title
      logoimg {
        url
      }
      image {
        url
      }
      gifmain {
        url
      }
      dmimage {
        url
      }
      imagedt {
        url
      }
      logofooter {
        url
      }
      dmtitle
      dmsubtitle
      orgtitle
      orgsubtitle
      divsubtitle
      divtitle
      titlemain
      subtitlemain
      titledt  
      subtitleo
      subtitles
      subtitlet
      titleuser
      subtitleuser
      ivtitle
      ivsubtitle
      ivstart
      titleabout
      titlesocial
      titlehelp
      subtitleabout
      crfooter
    }
}
}
`

export default function Index({ data }){ 
  const dataOptions = data.alldata.projects[0]
return (
  <div>
    {console.log( "to aqui", data )}
    <Header
      logo={dataOptions.logoimg.url}
      blog={dataOptions.btnblog}
      faq={dataOptions.btnfaq}
      enter={dataOptions.btnenter}
      lang={dataOptions.btnlang}
    />
    <Main 
      title={dataOptions.title}
      subtitle={dataOptions.subtitle}
      start={dataOptions.btnstart}
      divtitle={dataOptions.divtitle}
      imagemain={dataOptions.image.url}
      titlemain={dataOptions.titlemain}
      subtitlemain={dataOptions.subtitlemain}
      divsubtitle={dataOptions.divsubtitle}
      dmtitle={dataOptions.dmtitle}
      dmsubtitle={dataOptions.dmsubtitle}
      orgtitle={dataOptions.orgtitle}
      orgsubtitle={dataOptions.orgsubtitle}
      gifmain={dataOptions.gifmain.url}
      dmimage={dataOptions.dmimage.url}
      titledt={dataOptions.titledt}
      imagedt={dataOptions.imagedt.url}
      subtitleo={dataOptions.subtitleo}
      subtitles={dataOptions.subtitles}
      subtitlet={dataOptions.subtitlet}
      titleuser={dataOptions.titleuser}
      subtitleuser={dataOptions.subtitleuser}
      ivtitle={dataOptions.ivtitle}
      ivsubtitle={dataOptions.ivsubtitle}
      ivstart={dataOptions.ivstart}
    />
    <Footer 
      titleabout={dataOptions.titleabout}
      titlesocial={dataOptions.titlesocial}
      titlehelp={dataOptions.titlehelp}
      subtitleabout={dataOptions.subtitleabout}
      logofooter={dataOptions.logofooter.url}
      crfooter={dataOptions.crfooter}
    />
  </div>
  )
}