import React from 'react'
import * as S from './style'

export function Main({
    title,
    subtitle,
    start,
    divtitle,
    imagemain,
    gifmain,
    orgtitle,
    orgsubtitle,
    dmimage,
    titlemain,
    subtitlemain,
    divsubtitle,
    dmtitle,
    dmsubtitle,
    titledt,
    imagedt,
    subtitleo,
    subtitles,
    subtitlet,
    titleuser,
    subtitleuser,
    ivtitle,
    ivsubtitle,
    ivstart
}) {
    return(
        <>
        <S.Container>
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Paragraph>{subtitle}</S.Paragraph>
            <S.BtnStart height="3.625rem">{start}</S.BtnStart>
        </S.Wrapper>
            <S.Image src={imagemain} alt="image"/>
        </S.Container>
                <S.BottomWrapper>
                    <S.DivTitle>{divtitle}</S.DivTitle>
                    <S.DivParagraph>{divsubtitle}</S.DivParagraph>
                </S.BottomWrapper>
                <S.BoxGif>
                <figure>
                    <S.ImageMain src={gifmain} alt="gifmain" />
                </figure>
                <div>
                    <S.TitleGif>{titlemain}</S.TitleGif>
                    <S.ParagraphGif>{subtitlemain}</S.ParagraphGif>
                </div>
            </S.BoxGif>
            <S.BoxImgMain>
                <figure>
                    <S.ImageMain src={dmimage} alt="oi" />
                </figure>
                <div>
                    <S.TitleBoxMain>{dmtitle}</S.TitleBoxMain>
                    <S.ParagraphBoxMain>{dmsubtitle}</S.ParagraphBoxMain>
                </div>
            </S.BoxImgMain>
            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>{orgtitle}</S.TitleMain>
                    <S.ParagraphMain>{orgsubtitle}</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>
            <S.ContainerMainDate>
                <S.TitleMainDate>{titledt}</S.TitleMainDate>
                <S.ImageMainDate src={imagedt} alt=""/>
                <S.BoxMainDate>
                    <S.SubtitleMainDate>• {subtitleo}</S.SubtitleMainDate>
                    <S.SubtitleMainDate>• {subtitles}</S.SubtitleMainDate>
                    <S.SubtitleMainDate>• {subtitlet}</S.SubtitleMainDate>
                </S.BoxMainDate>
            </S.ContainerMainDate>
            <S.BoxUsers>
                <S.TitleUsers>{titleuser}</S.TitleUsers>
                <S.SubtitleUsers>{subtitleuser}</S.SubtitleUsers>
            </S.BoxUsers>
            <S.BoxCollaborate>
                <S.TitleCollaborate>{ivtitle}</S.TitleCollaborate>
                <S.SubtitleCollaborate>{ivsubtitle}</S.SubtitleCollaborate>
                <S.ButtomCollaborate>{ivstart}</S.ButtomCollaborate>
            </S.BoxCollaborate>
        </>
    )

} 