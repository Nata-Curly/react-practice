import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const resp = await fetch(getUrl);
      const data = await resp.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setErrMsg(err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollProgress() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollProgress((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollProgress);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollProgress);

  if (errMsg) {
    return <div>Error ! {errMsg}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
