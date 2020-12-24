import React, { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";
import DropDown from "../dropdown/Dropdown";
import getSuggestions from "../../api/api";

const KEYBOARD_KEYS = {
  ENTER: 13,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
};

const Autocomplete = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedSuggestion, setHighlightedSuggestion] = useState(0);
  const inputRef = useRef();

  const getSuggestionsForWord = async (text) => {
    try {
      const suggestions = await getSuggestions(text);
      setSuggestions(suggestions);
      setHighlightedSuggestion(0);
    } catch (error) {
      console.error(error);
    }
  };

  const debouncedFunction = useCallback(debounce(getSuggestionsForWord, 1000), []);

  const onInput = (event) => {
    const lastText = text.split(" ").slice(-1)[0];
    const textToSearch = event.target.value.split(" ").slice(-1)[0];

    setText(event.target.value);

    // Checking if the last text is empty or the last word has changes
    if (!!textToSearch && lastText !== textToSearch) {
      debouncedFunction(textToSearch);
    } else {
      resetSuggestions();
    }
  };

  const handleSelection = (suggestion) => {
    const previousText = text.split(" ").slice(0, -1).join(" ");
    if (previousText.length > 1) {
      setText(`${previousText} ${suggestion} `);
    } else {
      setText(`${suggestion} `);
    }
    resetSuggestions();
    inputRef.current.focus();
  };

  const resetSuggestions = () => {
    setSuggestions([]);
    setHighlightedSuggestion(0);
  };

  const onKeyPressed = (e) => {
    if (suggestions.length === 0) {
      return;
    }

    const keyPressed = e.which;

    if (keyPressed === KEYBOARD_KEYS.UP_ARROW) {
      e.preventDefault()
      setHighlightedSuggestion(
        highlightedSuggestion === 0
          ? suggestions.length - 1
          : highlightedSuggestion - 1
      );
    } else if (keyPressed === KEYBOARD_KEYS.DOWN_ARROW) {
      e.preventDefault()
      setHighlightedSuggestion(
        highlightedSuggestion === suggestions.length - 1
          ? 0
          : highlightedSuggestion + 1
      );
    } else if (keyPressed === KEYBOARD_KEYS.ENTER) {
      e.preventDefault()
      handleSelection(suggestions[highlightedSuggestion]);
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        ref={inputRef}
        value={text}
        autoFocus
        onChange={onInput}
        onKeyDown={onKeyPressed}
        className="form-control"
      />
      <DropDown
        suggestions={suggestions}
        handleSelection={handleSelection}
        highlightedSuggestion={highlightedSuggestion}
        closeDropdown={resetSuggestions}
      />
    </div>
  );
};

export default Autocomplete;
