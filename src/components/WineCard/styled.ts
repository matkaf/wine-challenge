import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  background-color: white;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 20rem;
  width: 15rem;
  padding: 1rem;
`

export const WineName = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  color: ${props => props.theme.card.name};
  text-align: center;
`

export const ImageWrapper = styled.div`
  height: 50%;
  width: 100%;
  min-height: 50%;
  position: relative;
  margin-bottom: 0.5rem;
`

export const FlagWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    background-color: ${props => props.theme.card.discount};
    border-radius: 0.1rem;

    color: white;
    font-weight: 700;
    font-size: 10px;

    padding: 0rem 0.2rem;
    margin-left: 0.5rem;
  }
`

export const Price = styled.h5`
  color: ${props => props.theme.card.price};
  font-size: 0.688rem;
  text-decoration: line-through;
`

export const MemberPriceContainer = styled(PriceContainer)`
  align-items: baseline;

  h4 {
    color: ${props => props.theme.card.name};
  }

  p {
    background-color: transparent;
    color: ${props => props.theme.card.priceMember};
    font-size: 1.25rem;

    span {
      font-size: 0.6rem;
    }
  }
`

export const NonMemberContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 0.5rem;

  color: ${props => props.theme.card.price};
  font-size: 0.75rem;
`

export const AddToCartBtn = styled.button`
  height: 2.5rem;
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  background-color: ${props => props.theme.colors.button};
  color: white;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;

`
