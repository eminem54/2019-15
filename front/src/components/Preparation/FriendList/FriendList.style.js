import styled from 'styled-components';

export const FriendListStyle = styled.div`
  width: 20rem;
  height: 40rem;
  background-color: ${({ theme }) => theme.paleRose};
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  :hover {
    overflow-y: scroll;
  }
`;
