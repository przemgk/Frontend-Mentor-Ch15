import styled from 'styled-components';
import withPageType from 'hoc/withPageType';

const Paragraph = styled.p`
  display: inline-block;
  font-size: ${({ theme, pageType }) => theme.fontSize.r[pageType]};
  line-height: 1.6;
  margin: 0;
`;

export default withPageType(Paragraph);
