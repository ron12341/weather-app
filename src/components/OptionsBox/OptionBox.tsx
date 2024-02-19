import './OptionBoxStyle.css';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../services/api';
import { OPTIONS_URL } from '../../services/url';

const OPTION_LIMIT = 5;

interface OptionBoxProps {
  search: string;
  selectOption: (input: string) => void;
}

const OptionBox = ({ search, selectOption }: OptionBoxProps) => {
  const [options, setOptions] = useState<[]>([]);

  const getSearchOptions = (input: string) => {
    fetch(`${OPTIONS_URL}${input}&limit=${OPTION_LIMIT}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => setOptions(data));
  };

  useEffect(() => {
    if (search === '') {
      setOptions([]);
      return;
    }

    getSearchOptions(search);
  }, [search]);

  return (
    <>
      {options.length > 0 && (
        <div id="options-container">
          {options.map((option: { name: string; country: string }, index) => {
            return (
              <p
                key={index}
                className="d-flex justify-content-start options"
                role="button"
                onClick={() => {
                  selectOption(`${option.name},${option.country}`);
                }}
              >
                {option.name},{option.country}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default OptionBox;
