import styled from 'styled-components';
import withPageType from 'hoc/withPageType';

const Strong = styled.strong`
  font-size: ${({ theme, pageType }) => theme.fontSize.r[pageType]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default withPageType(Strong);
