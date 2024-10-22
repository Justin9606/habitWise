import React from 'react';
import styled from 'styled-components/native';

interface PaginationProps {
  total: number;
  currentIndex: number;
}

const Pagination: React.FC<PaginationProps> = ({total, currentIndex}) => {
  return (
    <PaginationContainer>
      {[...Array(total)].map((_, index) => (
        <Dot key={index} isActive={index === currentIndex} />
      ))}
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

const Dot = styled.View<{isActive: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({isActive}) => (isActive ? '#fff' : '#ccc')};
  margin-horizontal: 4px;
`;
