import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_Key = 'AIzaSyCLljTklXfR4pYJGZzf-6uSiTmEMFL48aw';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
