import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [ selectedGif, setSelectedGif ] = useState("13HgwGsXF0aiGY");
  const [ gifIds, setGitIds ] = useState(["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"]);

  const fetchGiphyAPI = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGitIds(ids);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphyAPI={fetchGiphyAPI} />
        <div className="selected-gif">
          <Gif id={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
