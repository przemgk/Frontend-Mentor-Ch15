import styled from 'styled-components';
import withPageContext from 'hoc/withPageContext';

const Paragraph = styled.p`
  display: inline-block;
  font-size: ${({ theme, pageContext }) => theme.fontSize.r[pageContext]};
  line-height: 1.6;
  margin: 0;
`;

export default withPageContext(Paragraph);
