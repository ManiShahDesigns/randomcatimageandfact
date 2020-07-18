import React, { useState } from "react";
import axios from 'axios';

// Components
import Header from './components/Header';
import Fact from "./components/Fact";

import "./App.css";

function App() {
  const [fact, setFact] = useState([]);
  const [catImage, setCatImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const factURL = 'https://cat-fact.herokuapp.com/facts/random';
  const imageURL = 'https://api.thecatapi.com/v1/images/search';

  const fetchFacts = async () => {
    setLoading(true);

    const factsResults = await axios.get(factURL);

    const imagesResult = await axios.get(imageURL);

    setFact(factsResults.data);
    setCatImage(imagesResult.data[0]);

    setLoading(false);
  }

  return <div className="container app">
    <Header />
    <Fact fact={fact} loading={loading} fetchFacts={fetchFacts} cat={catImage} />

  </div >
}

export default App;