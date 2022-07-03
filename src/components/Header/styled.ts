import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 8vh;
  width: 100%;
  padding: 0.25rem 6rem;
  box-shadow: rgba(0, 0, 0, 0.10) 0 0rem 0.5rem;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 4rem;
  margin-left: 5rem;

  a {
    text-decoration: none;
    color: grey;
    font-size: 1.1rem;

    &:hover {
      color: ${props => props.theme.colors.navHover}
    }

    &:nth-child(2) {
      border-bottom: 1px solid ${props => props.theme.colors.navHover};
    }
  }


`
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%
`
