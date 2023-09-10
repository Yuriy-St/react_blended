import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  ModalPhotoOverlay,
  ModalPhotoWindow,
  ModalPhotoBigImage,
} from './modal.styled';

export default function Modal({ dataModal: { large, alt }, handleModal }) {
  const handleEscape = event => {
    if (event.code === 'Escape') {
      handleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleModal();
    }
  };

  return createPortal(
    <ModalPhotoOverlay onClick={handleOverlayClick}>
      <ModalPhotoWindow>
        <ModalPhotoBigImage src={large} alt={alt}></ModalPhotoBigImage>
      </ModalPhotoWindow>
    </ModalPhotoOverlay>,
    document.querySelector('#modal_root')
  );
}
