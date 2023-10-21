import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    axios
      .get("https://api.api-ninjas.com/v1/quotes?category=", {
        headers: {
          "X-Api-Key": "tDOUXP2eh9COQmnwZWr71g==u3GAMhiFxo1YgYhh",
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          setQuote(response.data[0].quote);
          setAuthor(response.data[0].author);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div id="quote-box">
        <h1 id="text">"{quote}"</h1>
        <p id="author">- {author}</p>
        <button onClick={fetchQuote} id="new-quote">
          Generate
        </button>
        <a
          style={{ paddingLeft: "20px" }}
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            '"' + quote + '" - ' + author
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </>
  );
}

export default App;
