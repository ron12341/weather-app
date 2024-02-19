import './InputStyle.css';
import OptionBox from '../OptionsBox/OptionBox';
import { ChangeEvent, useState } from 'react';
import { EmptyInputModel, InputModel } from '../../models/InputModel';

interface SearchProps {
  onSearch: (input: InputModel) => void;
  changeUnit: (unit: string) => void;
}

function Input({ onSearch, changeUnit }: SearchProps) {
  const [search, setSearch] = useState<string>('');
  const [unit, setUnit] = useState<string>('metric');
  const [input, setInput] = useState<InputModel>(EmptyInputModel);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    setInput({ city: value, unit: unit });
  };

  const selectOption = (city: string) => {
    setSearch('');
    setInput({ city: city, unit: unit });
    onSearch({ city: city, unit: unit });
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div id="searchbar-container" className="col d-flex">
          <div className="input-group input-group-md">
            <input
              className="form-control"
              placeholder="Search"
              onChange={handleOnChange}
              value={input.city}
              onKeyUp={event => {
                if (event.key === 'Enter') {
                  onSearch(input);
                  setSearch('');
                }
              }}
            ></input>
            <button
              id="search-btn"
              className="btn btn-outline-secondary"
              onClick={() => {
                onSearch(input);
                setSearch('');
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M15,15 L22,22 L15,15 Z M9.5,17 C13.6421356,17 17,13.6421356 17,9.5 C17,5.35786438 13.6421356,2 9.5,2 C5.35786438,2 2,5.35786438 2,9.5 C2,13.6421356 5.35786438,17 9.5,17 Z"
                ></path>
              </svg>
            </button>
          </div>

          <div id="option-box-container">
            <OptionBox search={search} selectOption={selectOption} />
          </div>
        </div>

        <div id="btn-group" className="btn-group">
          <button
            id="celcius-btn"
            className={unit === 'metric' ? 'btn curr-unit' : 'btn'}
            onClick={() => {
              setUnit('metric');
              changeUnit('metric');
            }}
          >
            °C
          </button>
          <button
            id="faren-btn"
            className={unit === 'imperial' ? 'btn curr-unit' : 'btn'}
            onClick={() => {
              setUnit('imperial');
              changeUnit('imperial');
            }}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
