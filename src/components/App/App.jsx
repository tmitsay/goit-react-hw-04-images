import { useState, useEffect } from 'react';
import { Button } from 'components/Button/button';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/imageGallery';
import { Searchbar } from 'components/Searchbar/searchbar';
import { getImages } from 'components/API/api';
import css from './app.module.css';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    const addImages = async () => {
      try {
        setIsLoading(true);
        const data = await getImages(searchName, currentPage);

        setImages(prevImages => [...prevImages, ...data.hits]);
        setIsLoading(false);
        setTotalPage(Math.ceil(data.totalHits / 12));
        setError('');
      } catch (error) {
        setError('Sorry image not found...');
      } finally {
        setIsLoading(false);
      }
    };

    addImages();
  }, [searchName, currentPage]);

  const onSubmit = query => {
    setSearchName(query);
    setImages([]);
    setCurrentPage(1);
  };

  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}

      {error && <h2>{error}</h2>}

      <ImageGallery images={images} />

      {images.length > 0 && totalPage !== currentPage && !isLoading && (
        <Button onClick={onLoadMore} />
      )}
    </div>
  );
};
