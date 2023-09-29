import React, {useState} from "react";
import './SearchInput.css'
import {results, resultsType} from "../searchResult/results";
import {useRecoilState, useSetRecoilState} from "recoil";
import {searchResultsState} from "../searchResult/SearchResult";

export function SearchInput() {
  const [originInput, setOriginInput] = useState<string>('')
  const [destinationInput, setDestinationInput] = useState<string>('')
  const [dayInput, setDayInput] = useState<number>(1)

  const setSearchResults = useSetRecoilState(searchResultsState)

  function search(originInput: string, destinationInput: string, dayInput: number): resultsType {
    return results.filter(result => result.origin.toLowerCase() === originInput.toLowerCase() &&
      result.destination.toLowerCase() === destinationInput.toLowerCase() && result.day === dayInput)
  }

  return (
    <div id={'search-input-div'}>
      <label htmlFor='origin'>Origin</label>
      <input type='text' id='origin' value={originInput} onChange={e => setOriginInput(e.target.value)}/>

      <label htmlFor='destination'>Destination</label>
      <input type='text' id='destination' value={destinationInput} onChange={e => setDestinationInput(e.target.value)}/>

      <label htmlFor='day'>Day</label>
      <input type='number' min={1} max={30} step={1} id={'day'} value={dayInput} onChange={e =>
        setDayInput(Number(e.target.value))}/>

      <button id={'search-button'} onClick={() => setSearchResults(search(originInput, destinationInput, dayInput))}>
        Search
      </button>
    </div>
  )
}