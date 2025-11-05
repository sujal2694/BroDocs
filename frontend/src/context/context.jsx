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

    setInput("")
    setResultData("")
    setResult(true)
    setLoading(true)
    setRecentPrompt(input)
    setPrevPrompts(prev=>[...prev,input])
    const response = await main(input)
    let responseArray = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i]
      }
      else {
        newResponse += "<b>"+responseArray[i]+"</b>"
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let newResponseArray = newResponse2.split(" ");
    for (let i=0; i < newResponseArray.length; i++){
      const nextWord = newResponseArray[i]
      delayPara(i,nextWord+" ")
    }
    setLoading(false)
  }

  

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
