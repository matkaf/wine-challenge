import styled from "styled-components";

export const EmptyCart = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  color: #1d1d1b;

  a {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background-color: ${props => props.theme.colors.navHover};
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }
`

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`
export const WinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  padding-top: 2rem;

  h1 {
    color: #1d1d1b;
  }
`

export const ColumnNames = styled.div`
  padding: 4rem 4rem 2rem;
  color: ${props => props.theme.card.name};
`

export const WineInfo = styled.div`
  display: flex;
  padding: 1rem 0;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  width: 10%;
  height: 2rem;
`

export const NameContainer = styled.div`
  display: flex;
  width: 70%;
  color: ${props => props.theme.colors.title};
`

export const BuyButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  height: 3rem;
  width: 60%;

  background-color: ${props => props.theme.colors.button};
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 1.125rem;
  cursor: pointer;
`
export const DeleteCart = styled(BuyButton)`
  background-color: #ff3f47;
`
