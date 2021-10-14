import styled from 'styled-components'

export const ContainerHeader = styled.div`
width: 100%;
height: 5rem;
background-color: #fff;
opacity: 0.9;
box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const ContainerOptions = styled.div`
margin-left: 30rem;
`

export const ContainerLogo = styled.div`
margin-left: 7.2rem;
`

export const ImageLogo = styled.img`
width: 150px;
`

export const BtnsInfo = styled.button`
background: transparent;
    font-size: 20px;
    border: 0;
    cursor: pointer;
    margin-right: 5rem;
    &:nth-child(3) {
        background: rgb(255, 235, 151);
        width: 150px;
        height: 45px;
      }
    &:nth-child(4) {
        border: solid 1px #000;
        border-radius: 50%;
        font-size: 15px;
        width: 38px;
        height: 38px;
      }
`