import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  // const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];
  const { gifIds, setSelectedGif } = props;
  return (
    <div className="gif-list">
      { gifIds.map((gifId) => <Gif id={gifId} setSelectedGif={setSelectedGif} key={gifId} className="gif" />)}
    </div>
  );
};

export default GifList;
