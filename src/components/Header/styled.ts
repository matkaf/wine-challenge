import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  gap: 0.5rem 1rem;
  height: 10%;
  width: 100%;
  padding: 0.5rem 6rem;
  box-shadow: rgba(0, 0, 0, 0.10) 0 0rem 0.5rem;
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 45px;
  gap: 2rem;
  padding-left: 2rem;

  &:nth-child(1) {
    img {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
    color: grey;
    font-size: 1.1rem;

    &:hover {
      color: ${props => props.theme.colors.navHover}
    }

    &:nth-child(3) {
      border-bottom: 1px solid ${props => props.theme.colors.navHover};
    }
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%;

  span {
    cursor: pointer;
  }
`

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 1.9rem;
  right: 1rem;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 50%;

  width: 1rem;
  height: 1rem;

  p {
    color: #4FBFA5;
    font-size: 1rem;
    font-weight: 700;
  }
`

export const Span = styled.span`
  display: flex;
  justify-content: center;
`