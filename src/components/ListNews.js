import React from 'react';
import New from './New';

const ListNews = ({news}) => (
  <div className="row">
    {news.map(aNew => (
      <New
        key={aNew.url}
        new={aNew}
      />
    ))}
  </div>
);

export default ListNews;
