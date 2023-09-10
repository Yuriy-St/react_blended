import styled from '@emotion/styled';

export const ModalPhotoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalPhotoWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1400px;
  height: 500px;
  overflow: hidden;
`;

export const ModalPhotoBigImage = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
`;
