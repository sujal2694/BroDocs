import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import main from "../config/gemini";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {

  const url = "https://brodocs-backend.onrender.com"
  const [currState, setCurrState] = useState("Sign Up");
  const [token, setToken] = useState("");
  const [docs, setDocs] = useState("docs");
  const [Data, setData] = useState([]);
  const [Files, setFiles] = useState([])

  const fetchUserData = async () => {
    const response = await axios.get(url + '/api/user/list')
    const userData = response.data.data;
    setData(userData)
  }

  const getData = async () => {
    const response = await axios.get(url + '/api/docs/listdocs')
    setFiles(response.data.data);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
    fetchUserData();
    getData();
  }, [])

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev=>prev+nextWord)
    }, 75*index);
  }


 const onSent = async (prompt) => {
  const finalPrompt = prompt || input;
  if (!finalPrompt.trim()) return;

  setInput("");
  setResultData("");
  setResult(true);
  setLoading(true);
  setRecentPrompt(finalPrompt);
  setPrevPrompts((prev) => [...prev, finalPrompt]);

  try {
    const response = await main(finalPrompt);
    if (!response) {
      setResultData("No response received.");
      setLoading(false);
      return;
    }

    let formattedResponse = response.trim();
   
    // Fix: Use .+? for non-greedy matching, handle nested bold/italic properly
    // Process bold first (double asterisks)
    formattedResponse = formattedResponse.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    
    // Then process italic (single asterisks)
    formattedResponse = formattedResponse.replace(/\*(.+?)\*/g, "<i>$1</i>");

    //numbers bold
    formattedResponse = formattedResponse.replace(/(\d+)/g, "<b>$1</b>");

    // Remove * from response
    // formattedResponse = formattedResponse.replace(/\*/g, " ")
 
    // Replace newlines with <br/>
    formattedResponse = formattedResponse.replace(/\n/g, "<br/>");
 
    // Add space after bullets
    formattedResponse = formattedResponse.replace(/\* /g, "<span style='font-size: 30px'>• </span>");

    // Animate word by word
    const words = formattedResponse.split(" ");
    for (let i = 0; i < words.length; i++) {
      await delayPara(i, words[i] + " ");
    }

  } catch (error) {
    console.error("Error during onSent:", error);
    setResultData("Something went wrong. Please try again.");
    setLoading(false); // Ensure loading is turned off on error
  } finally {
    setLoading(false); // This will run after animation completes
  }
};


  

  const contextValue = {
    currState,
    setCurrState,
    token,
    setToken,
    url,
    Data,
    docs,
    setDocs,
    Files,
    setFiles,
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    result,
    loading,
    resultData,
    input,
    setInput,
    setResult,
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
