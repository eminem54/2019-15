import styled, { keyframes } from 'styled-components';
import { AlarmModalStyle } from '../globalComponents/Modal/Modal.style';

const slideDown = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-1.6rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

const MessagesStyle = styled(AlarmModalStyle)`
  transform: translate3d(0, 0, 0);
  animation: ${slideDown} 0.15s ease 1;
  position: absolute;
  top: 4rem;
  left: auto;
  right: 6rem;
  width: 27rem;
  padding: 1rem;
  padding-bottom: 0;
`;

export default MessagesStyle;
