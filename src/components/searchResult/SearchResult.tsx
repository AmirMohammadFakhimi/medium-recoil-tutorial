import React from "react";
import './SearchResult.css'
import {selector, useRecoilState, useRecoilValue} from "recoil";
import {searchResultsState} from "../searchInput/SearchInput";

const getSearchResultsState = selector({
  key: 'getSearchResultsState',
  get: ({get}) => {
    const searchResults = get(searchResultsState)
    return searchResults
  }
})

const getNumberOfResultsState = selector({
  key: 'getNumberOfResultsState',
  get: ({get}) => {
    const searchResults = get(searchResultsState)
    return searchResults.length
  }
})

export function SearchResult() {
  const searchResults = useRecoilValue(getSearchResultsState)
  // const [searchResults, setSearchResults] = useRecoilState(searchResultsState)
  // const searchResults = useRecoilValue(searchResultsState)

  const numberOfResults = useRecoilValue(getNumberOfResultsState)
  // const numberOfResults = useRecoilValue(searchResultsState).length

  return (
    <div id={'search-result-div'}>
      <h2>{numberOfResults} results found</h2>
      <table>
        <thead>
        <tr>
          <th>Bus Id</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Day</th>
        </tr>
        </thead>
        <tbody>
        {searchResults.map((result, index) => {
          return (
            <tr key={index}>
              <td>{result.busId}</td>
              <td>{result.origin}</td>
              <td>{result.destination}</td>
              <td>{result.day}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}