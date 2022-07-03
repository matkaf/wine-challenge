import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 4rem 6rem;
  justify-content: flex-start;
`

export const PreviousWrapper = styled.div`
  
  width: 6rem;
  height: 10%;
  cursor: pointer;

  span {
    color: #111111;
    font-size: 1.25rem;
    margin-left: 1rem;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
  }
`

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  padding: 2rem;
`

export const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
  width: 40%;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  width: 60%;

  h1 {
    color: #111111
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
  height: 2rem;
`

export const FlagWrapper = styled.span`
  position: relative;
  height: 1rem;
  width: 1rem;
`

export const PriceContainer = styled.div`
  padding: 2rem 0;

  h1 {
    color: ${props => props.theme.card.priceMember};
    font-size: 2rem;
    font-weight: 900;

    span {
      font-size: 1rem;
    }
  }

  h3 {
    color: ${props => props.theme.card.price};
    font-size: 1rem;
    font-weight: 700;
  }
`

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    color: #111111;
  }

  article {
    color: #666666;
    font-size: 0.875rem;
  }
`

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 2rem;
  width: 20rem;
  height: 3.5rem;
  background-color: ${props => props.theme.colors.button};
  box-shadow: rgba(0,0,0,.15) 0 0.25rem 0.5rem 0;
  border-radius: 0.25rem;
  color: white;

`
export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  width: 40%;
  height: 80%;

  h2 {
    font-weight: 400;
  }
`

export const SetQuantityBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1.5rem;
  height: 2rem;
  width: 2rem;

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
  }
`

export const AddButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 700;
  color: white;

`