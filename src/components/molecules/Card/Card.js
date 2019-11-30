import React from 'react';
import styled from 'styled-components';
import FlagBox from 'components/atoms/FlagBox/FlagBox';
import Heading from 'components/atoms/Heading/Heading';
import DataSet from 'components/molecules/DataSet/DataSet';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: repeat(2, 1fr);
  border-radius: 6px;
  box-shadow: 0 4px 12px -4px ${({ theme }) => theme.shadowColor};
  cursor: pointer;

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 0 4px 12px -2px ${({ theme }) => theme.shadowColor};
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }
`;

const StyledContentWrapper = styled.div`
  padding: 24px 24px 32px;
`;

const StyledFlagBox = styled(FlagBox)`
  border-radius: 6px 6px 0 0;
`;

const StyledHeading = styled(Heading)`
  display: inline-block;
  margin-bottom: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const StyledDataGrid = styled.div`
  display: grid;
  grid-gap: 8px;
`;

const Card = ({ title, desc, flagUrl }) => (
  <StyledWrapper>
    <StyledFlagBox url={flagUrl} />
    <StyledContentWrapper>
      <StyledHeading as="h3" small>
        {title}
      </StyledHeading>
      <StyledDataGrid>
        {desc.map(({ label, value }) => (
          <DataSet pageType="home" type="text" label={label} value={value} key={label} />
        ))}
      </StyledDataGrid>
    </StyledContentWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  flagUrl: PropTypes.string.isRequired
};

export default Card;
