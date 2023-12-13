import React from "react";
// import "./style.css";
import { Container, Wrapper, HeaderType } from "./styled";

const Section = ({
  title,
  extraHeaderContent,
  bodyContent,
  id,
  headerType,
}) => (
  <Wrapper>
    <Container {id}>
      <HeaderType headerType>{title}</HeaderType>
      {extraHeaderContent}
    </Container>
    {bodyContent}
  </Wrapper>
);

export default Section;
