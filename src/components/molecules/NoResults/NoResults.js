import React from 'react';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Strong from 'components/atoms/Strong/Strong';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 4px;
`;

const StyledIcon = styled.img.attrs(({ theme }) => ({ src: theme.icons.noResults }))`
  display: inline-block;
  width: 64px;
  height: auto;
  margin-right: 18px;
`;

const StyledStrong = styled(Strong)`
  text-decoration: underline;
`;

const NoResults = ({ searchQuery }) => (
  <StyledWrapper>
    <StyledIcon />
    <div>
      <StyledHeading small>No matching serach results</StyledHeading>
      <Paragraph>
        We couldn&rsquo;t find any country named <StyledStrong>{searchQuery}</StyledStrong>
      </Paragraph>
    </div>
  </StyledWrapper>
);

NoResults.propTypes = {
  searchQuery: PropTypes.string
};

NoResults.defaultProps = { searchQuery: '' };

export default NoResults;
