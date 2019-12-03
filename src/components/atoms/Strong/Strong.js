import styled from 'styled-components';
import withPageContext from 'hoc/withPageContext';

const Strong = styled.strong`
  font-size: ${({ theme, pageContext }) => theme.fontSize.r[pageContext]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default withPageContext(Strong);
