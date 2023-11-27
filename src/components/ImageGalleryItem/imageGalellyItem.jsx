import { useState } from 'react';
import { Modal } from 'components/Modal/modal';
import css from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };
  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal largeImageURL={image.largeImageURL} onClose={toggleModal} />
      )}
    </li>
  );
};
