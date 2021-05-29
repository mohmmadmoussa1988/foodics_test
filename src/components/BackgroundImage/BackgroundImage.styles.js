import styled from "styled-components";
import BackgroundImage from "../../assets/background.jpg";
export const BackgroundImageWrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat;
  background-size: cover;
  background-position: center -25em;
  height: 87%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 0,
    100% 35%,
    100% 49%,
    100% 75%,
    49% 85%,
    0 75%,
    0 46%,
    0 20%,
    0 0
  );
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 35%,
    100% 49%,
    100% 75%,
    49% 85%,
    0 75%,
    0 46%,
    0 20%,
    0 0
  );
`;
export const OverlayWrapper = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(23, 55, 83, 0.1),
    rgba(4, 21, 35, 0.87)
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;
