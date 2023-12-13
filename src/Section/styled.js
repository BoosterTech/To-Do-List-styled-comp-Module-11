import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  margin: 10px 0;
`;

export const Container = styled.div`
  ${({ section__flex }) =>
    section__flex &&
    CSS`
      display: flex;
      flex-direction: row;
    `}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeaderType = styled.h2`
  ${(props) =>
    props.section__headerTop &&
    CSS`
      padding: 15px;
      font-weight: bold;
      font-size: large;
    `}

  ${(props) =>
    props.section__header &&
    CSS`
      padding: 15px;
      font-weight: bold;
      font-size: large;
    `}
`;

/* export const SectionFlex =styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
*/
