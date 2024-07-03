import { useRef, useState } from "react";
import UseOutsideClick from ".";

export default function UseOnClickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutsideClick(ref, ()=>setShowContent(false))

  return (
    <div ref={ref}>
      {showContent ? (
        <div>
          <h1>This is a random content</h1>
          <p>
            Pleased clock outside this content, it won`t be closed until you
            click outside!
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
