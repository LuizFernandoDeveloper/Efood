import styled from 'styled-components'
import { Colors } from '../../main-styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.overlay};
  opacity: 0.7;
`

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: none;
  justify-content: end;

  &.container--isactive {
    display: flex;
  }
`
export const Aside = styled.aside`
  max-width: 360px;
  width: 0px;
  height: 100vh;
  transition: width 1s ease;
  background-color: ${Colors.cartAsideBackgroundColor};
  padding-top: 32px;
  overflow: hidden;
  position: absolute;
  z-index: 1;

  &.aside--isActive {
    width: 100%;
    transition: width 2s ease;
  }

  ul {
    margin: 0 8px;
  }

  li {
    margin-bottom: 16px;
  }
`
export const Order = styled.div`
  display: flex;
  width: 344px;
  height: 100px;
  padding: 8px;
  padding-bottom: 12px;
  background-color: ${Colors.cartBackgroundColor};
  position: relative;
`
export const Figure = styled.figure`
  width: 80px;
  height: 80px;
  margin-right: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`
export const Content = styled.div`
  text-align: left;
  h2 {
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`
export const ButtonCard = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const FinalOrder = styled.div`
  width: 344px;
  display: block;
  margin: 0 8px;
  margin-top: 40px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    p {
      display: flex;
      font-weight: bold;
      font-size: 14px;
      color: ${Colors.textSecondary};
    }
  }
  button {
    width: 344px;
    width: 100%;
    height: 24px;
    color: ${Colors.textPrimary};
    font-size: 14px;
    font-weight: bold;
    border: none;
    background-color: ${Colors.backgroundButtonProduct};
  }
`
