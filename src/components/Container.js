import styled, { css } from "react-emotion";
import spacing from "../css/spacing";
import media from "../css/mediaQueries";

const Container = styled("div")`
  margin: 0 auto;
  position: relative;
  padding: 0 ${spacing.space2};
  max-width: 1300px;

  ${media.lg(
    css`
      padding: 0 ${spacing.space4};
    `
  )}
`;

export default Container;
