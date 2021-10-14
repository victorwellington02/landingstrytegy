import React from "react";
import * as S from './style'

export function Header({
    logo,
    blog,
    faq,
    enter,
    lang
}) {
    return(
            <S.ContainerHeader>
                <S.ContainerLogo>
                <S.ImageLogo src={logo} alt="logo"/>
                </S.ContainerLogo>
                <S.ContainerOptions>
                <S.BtnsInfo>{blog}</S.BtnsInfo>
                <S.BtnsInfo>{faq}</S.BtnsInfo>
                <S.BtnsInfo>{enter}</S.BtnsInfo>
                <S.BtnsInfo>{lang}</S.BtnsInfo>
                </S.ContainerOptions>
            </S.ContainerHeader>
    )
}