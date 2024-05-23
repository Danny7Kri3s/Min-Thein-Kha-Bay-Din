import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import datas from '../data/MinTheinKha.json';
import {reducer} from '../context/Reducer'

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    setQuestions(datas.questions)
    setAnswers(datas.answers)
    setNumbers(datas.numberList)
  },[]);

  useEffect(() => {
    dispatch({type:"questionsList", payload: questions});
    const filteredQuestions = questions.filter(q=> q.questionName.includes(search))
    dispatch({type:"questionsList", payload: filteredQuestions});
  }, [questions, search]);

  useEffect(() => {
    dispatch({type: 'answerList', payload: answers})
  }, [answers]);

  useEffect(() => {
    dispatch({type: 'numberList', payload: numbers})
  }, [numbers]);

  const initialState = JSON.parse(localStorage.getItem('state')) || {
    questionsList: [],
    numberList:[],
    answerList: [],
    question: null,
    selectedNum: null
  };

 
  const [state, dispatch] = useReducer(reducer, initialState)
  const data = {state, dispatch, search, setSearch};

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  },[state])

  return (
    <StateContext.Provider value={data}>
      {children}
    </StateContext.Provider>
  )
}

export const StateContextCustom = () => useContext(StateContext)
