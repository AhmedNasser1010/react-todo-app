import styled from "styled-components";

const Container = ({ children }) => {
	const Container = styled.div`
    max-width: 425px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  `;

  return (
    <Container className="container">{ children }</Container>
  )
}

export default Container;