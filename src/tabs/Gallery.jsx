import { useState, useEffect } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import Modal from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader.styled';

export function Gallery() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(true);

  const handleSubmit = query => {
    setPage(1);
    setImages([]);
    setQuery(query);
  };

  useEffect(() => {
    if (!query) return;
    (async () => {
      setIsLoading(true);
      try {
        const {
          data: { photos, total_results },
        } = await ImageService.getImages(query, page);
        setImages(prevState => [...prevState, ...getNormalizedImages(photos)]);
        setIsLastPage(page >= Math.ceil(total_results / 15));
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, page]);

  const getNormalizedImages = images => {
    return images.map(({ id, avg_color, alt, src: { large, small } }) => ({
      id,
      avg_color,
      alt,
      large,
      small,
    }));
  };

  const handleCLickImage = ({ large, alt }) => {
    setIsOpenModal(true);
    setDataModal({ large, alt });
  };

  const handleModal = () => {
    setIsOpenModal(false);
  };

  const handlePageIncrease = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {images.length > 0 && (
        <>
          <Grid>
            {images.map(({ id, avg_color, alt, large, small }) => (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img
                    onClick={() => handleCLickImage({ large, alt })}
                    src={small}
                    alt={alt}
                  />
                </CardItem>
              </GridItem>
            ))}
          </Grid>
          {!isLoading && !isLastPage && (
            <Button onClick={handlePageIncrease}>Load more...</Button>
          )}
        </>
      )}

      {isLoading && <Loader>Loading...</Loader>}

      {images.length === 0 && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}

      {isOpenModal && <Modal dataModal={dataModal} handleModal={handleModal} />}
    </>
  );
}
