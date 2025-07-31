import "./OptionBoxStyle.css";
import { useEffect, useState } from "react";
import { OPTIONS_URL } from "../../services/url";

const OPTION_LIMIT = 5;
const API_KEY = process.env.REACT_APP_API_KEY;

interface OptionBoxProps {
  search: string;
  selectOption: (input: string) => void;
}

const OptionBox = ({ search, selectOption }: OptionBoxProps) => {
  const [options, setOptions] = useState<[]>([]);

  const getSearchOptions = (input: string) => {
    fetch(`/.netlify/functions/cities?input=${input}&limit=${OPTION_LIMIT}`)
      .then((response) => response.json())
      .then((data) => setOptions(data));
  };

  useEffect(() => {
    if (search === "") {
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
