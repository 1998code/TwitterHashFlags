import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  Stats,
  PoweredBy,
  SortBy,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch('Application_ID', 'Search-Only_API_Key');

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">Twitter's HashFlags</a>
          </h1>
          <p className="header-subtitle">
            <a href="https://github.com/algolia/react-instantsearch">
              InstantSearch
            </a>
          </p>
          <hr/>
          <a href="https://www.producthunt.com/posts/hashflags-discovery?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hashflags-discovery" target="_blank">
            <img id="PHL" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=286620&theme=light" alt="HashFlags : Discovery - An open source React project w/ using Algolia Search Engine. | Product Hunt" />
            <img id="PHD" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=286620&theme=dark" alt="HashFlags : Discovery - An open source React project w/ using Algolia Search Engine. | Product Hunt" />
          </a>
        </header>

        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="test_HASHFLAGS">
            <div className="search-panel">
              <div className="search-panel__results">
                
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                />
                <PoweredBy />

                {/* <SortBy
                  defaultRefinement="startsAt"
                  items={[
                    { value: 'startsAt', label: 'startsAt' },
                  ]}
                /> */}

                <Stats />

                <p>Right-click to save the image.</p>
                <br/>
                
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
          <center>
            <a href="https://vercel.com/?utm_source=1998code&utm_campaign=oss">
              <img id="vercel" src="https://raw.githubusercontent.com/1998code/LaunchScreen/main/powered-by-vercel.svg"/>
            </a>
          </center>
        </div>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <a id="link" href={props.hit.hashtags}>
      <article>
        <center>
            <img id="hfImg" src={props.hit.img}/>
            <h1><Highlight attribute="hashtags" hit={props.hit} /></h1>
        </center>
      </article>
    </a>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
