import React from 'react'
import * as S from './style'

export function Footer({
    titleabout,
    titlesocial,
    titlehelp,
    subtitleabout,
    logofooter,
    crfooter
}) {
    return(
        <>
        <S.ContainerFooter>
            <S.BoxAbout>
                <S.ParagraphOptions>{titleabout}</S.ParagraphOptions>
                <S.SubtitleAbout>{subtitleabout}</S.SubtitleAbout>
                <S.BoxSecond>
                <S.ImageFooter src={logofooter} alt=""/>
                <S.CrFooter>{crfooter}</S.CrFooter>
                </S.BoxSecond>
                <S.BoxTree>
                <S.SubtitleInfos>
                   ISTI Soluções em Tecnologia Ltda
                   CNPJ: 13.475.139/0001-33
                </S.SubtitleInfos>
                </S.BoxTree>
            </S.BoxAbout>
            <S.ContainerInfos>
                <S.BoxInfoOne>
                    <S.ParagraphOptions>{titlesocial}</S.ParagraphOptions>
                    <S.OptionsWeb>
                        <S.Options>Instagram</S.Options>
                        <S.Options>Facebook</S.Options>
                        <S.Options>Linkedin</S.Options>
                        <S.Options>Blog</S.Options>
                    </S.OptionsWeb>
                </S.BoxInfoOne>
                <S.BoxInfoSec>
                    <S.ParagraphOptions>{titlehelp}</S.ParagraphOptions>
                    <S.OptionsWeb>
                        <S.Options>FAQ</S.Options>
                        <S.Options>Terms of Use</S.Options>
                        <S.Options>Privacy Policy</S.Options>
                        <S.Options>Support</S.Options>
                    </S.OptionsWeb>
                </S.BoxInfoSec>
           </S.ContainerInfos>
        </S.ContainerFooter>
        </>
    )
}