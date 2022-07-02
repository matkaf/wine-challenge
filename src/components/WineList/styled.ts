import styled from "styled-components";

export const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 90%; */ // não especificar tamanho porque varia conforme resposta da API
  padding: 4rem 8rem;
`
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  gap: 2rem;

  h1 {
    color: #000000;
    font-size: 1.25rem;
  }

  h4 {
    color: #333333;
    font-size: 1.125rem;
  }
`

export const RadioSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #1D1D1B;

  input {
    margin-right: 1rem;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  h1 {
    font-size: 1.125rem;
    color: #262626;
  }
`
export const WinesContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;
`