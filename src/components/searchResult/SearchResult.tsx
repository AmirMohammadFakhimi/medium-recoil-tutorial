import React from "react";
import './SearchResult.css'
import {resultsType} from "./results";
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";

export const searchResultsState = atom({
  key: 'searchResultsState',
  default: [] as resultsType
})

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
  const searchResults: resultsType = useRecoilValue(getSearchResultsState)
  // const searchResults: resultsType = useRecoilValue(searchResultsState)
  // const [searchResults, setSearchResults] = useRecoilState(searchResultsState)

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