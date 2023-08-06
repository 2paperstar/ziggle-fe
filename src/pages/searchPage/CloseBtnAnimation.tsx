import styled, { keyframes } from "styled-components";

const fadeInWithGoRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-40px) rotate(-30deg);
    }
    100% {
        opacity: 1;
        transform: translateX(0px) rotate(0deg);
    }
`;

const AnimationWrapper = styled.div`
  animation: ${fadeInWithGoRight} 0.5s cubic-bezier(0, 0.51, 0.38, 1);
`;

const CloseBtnAnimation = {
  fadeInWithGoRight,
  AnimationWrapper,
};

export default CloseBtnAnimation;
