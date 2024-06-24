import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(CurrentId) {
    // console.log(CurrentId);
    setSelected(CurrentId === selected ? null : CurrentId);
  }

  function handleMultipleSelection(CurrentId) {
    let copyMultiple = [...multiple];
    const findIdxOfCurrentId = copyMultiple.indexOf(CurrentId);
    console.log(findIdxOfCurrentId);

    if (findIdxOfCurrentId === -1) copyMultiple.push(CurrentId);
    else copyMultiple.splice(findIdxOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  // console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        type="button"
      >
        Enable Multiple Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="accordion-item">
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="accordion-title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="accordion-content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}
