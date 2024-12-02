import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import './index.less'
interface SearchBarProps {
    onSearch: (query: string) => void
  }
  
  export function SearchBar({ onSearch }: SearchBarProps) {
    return (
      <div className="searchBar">
        <FontAwesomeIcon className="searchBar__icon" icon={faMagnifyingGlass} />        
        <input
          type="search"
          placeholder="Buscar productos..."
          className="searchBar__input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    )
  }
  
  