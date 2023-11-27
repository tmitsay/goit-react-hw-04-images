import { useEffect } from 'react';
import css from './modal.module.css';

export const Modal = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const onEscClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', onEscClose);

    return () => {
      document.removeEventListener('keydown', onEscClose);
    };
  }, [onClose]);

  const backDropClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={backDropClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
