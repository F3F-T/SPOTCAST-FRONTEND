import styled from "@emotion/styled";
import LabeledAnchor from "../../../common/LabeledAnchor";

const Container = styled.div`
  width: 100%;
  /* height: 70rem; */
  display: flex;
  justify-content: center;
  margin-top: 8rem;
`;

const ArticleWrapper = styled.div`
  width: 108rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: start;
`;

const SubTitle = styled.div`
  margin-top: 1.3rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: start;
`;

const Anchor = styled(LabeledAnchor)`
  position: absolute;
  right: 0;
  font-size: 1.8rem;
  font-weight: 700;
  border: none;
  background-color: white;
  margin-top: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5rem;
`;

const Preview = styled.div`
  border-radius: 2rem;
  width: 49rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  /* padding: 4.3rem 3rem; */
  padding: 4.3rem 0 0 0;
  position: relative;
`;

const PreviewTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  font-size: 1.7rem;
  font-weight: 700;
`;
export {
  Container,
  ArticleWrapper,
  Title,
  SubTitle,
  Anchor,
  CardContainer,
  Preview,
  PreviewTitle,
};
