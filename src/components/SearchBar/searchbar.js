import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

 class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

   some_method(e) {
     //this will do something later
   }

   render() {
      return(
        <div id="search-field">
          <form id="term-search-form">
            <div class="search-grouping">
              <input type="text" placeholder="Search for your term here" />
              <button class="btn-action" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
          </form>
         </div>
      );
   }
}

export default SearchBar;
