import React from 'react';

const Gif = (props) => {
  const { id, setSelectedGif } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  const handleClick = () => {
    setSelectedGif(id);
  };

  return (
    <img onClick={handleClick} src={url} alt="gif" className="gif" />
  );
};

export default Gif;
