import styled from 'styled-components';

const UserRankingStyle = styled.div`
  height: 5rem;
  width: 15rem;
  display: flex;
  > * {
    margin-left: 2rem;
  }
  > div > p {
    font-size: 13px;
    width: 10rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media (max-width: 1100px) {
    width: 9rem;
    > * {
      margin-left: 0.6rem;
    }
    > div > h3 {
      width: 1rem;
    }
    > div > p {
      width: 6rem;
    }
  }
`;

export default UserRankingStyle;
