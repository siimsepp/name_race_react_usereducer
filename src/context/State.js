import React, { useReducer } from 'react'
import Context from './Context'
import Reducer from './Reducer'

const State = props => {
  const initialState = {
    names: [],
    score: [],
    vooruVoitja: '',
    punktini: 0,
    manguVoitja: '',
    pickWinnerBtnDisabled: false,
    lopetaMangBtnDisabled: false,
    alertNimed: '',
    stats: [],
    display: {
      sisendForm: true,
      pickWinnerBtn: false,
      vooruVoitja: false,
      resultsTable: false,
      manguVoitja: false,
      mangiUuestiBtn: false,
      statistika: false
    }
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  const andmedSisse = ({ arrNames, punktini }) => {
    const punktidNum = +punktini
    let summad = new Array(arrNames.length + 1).join('0').split('').map(parseFloat)
    dispatch({ type: 'SET_SCORE', payload: [...summad] })
    dispatch({ type: 'SET_NAMES', payload: [...arrNames] })
    dispatch({ type: 'SET_PUNKTINI', value: punktidNum })
    dispatch({ type: 'SET_STATS', payload: [...summad] })
    dispatch({
      type: 'SET_DISPLAY',
      payload: {
        sisendForm: false,
        pickWinnerBtn: true,
        vooruVoitja: false,
        resultsTable: false,
        manguVoitja: false,
        mangiUuestiBtn: false,
        statistika: false
      }
    })
  }

  const setAlert = msg => {
    dispatch({ type: 'SET_ALERT', value: msg })
    setTimeout(() => {
      dispatch({ type: 'SET_ALERT', value: '' })
    }, 4000)
  }

  const pickWinner = () => {
    const randNum = Math.floor(Math.random() * state.names.length + 1) - 1
    const voitja = state.names[randNum]
    const copyScore = [...state.score]
    copyScore[randNum] += 1
    // Kui max skoor on võrdne punktini mängitava skooriga, siis on meil olemas võitja
    let winnerGame

    if (Math.max(...copyScore) === state.punktini) {
      dispatch({ type: 'SET_PICKWINNERBTN_DISABLED', value: true })
      let i = copyScore.indexOf(Math.max(...copyScore))
      winnerGame = state.names[i]
      dispatch({ type: 'SET_MANGU_VOITJA', value: winnerGame })
      // Lisa võit võitja statistikasse
      const statNow = [...state.stats]
      statNow[i] += 1
      dispatch({ type: 'SET_STATS', payload: [...statNow] })
    }
    dispatch({ type: 'SET_SCORE', payload: copyScore })
    dispatch({ type: 'SET_VOORU_VOITJA', value: voitja })
    dispatch({
      type: 'SET_DISPLAY',
      payload: {
        sisendForm: false,
        pickWinnerBtn: winnerGame ? false : true,
        vooruVoitja: true,
        resultsTable: true,
        manguVoitja: winnerGame ? true : false,
        mangiUuestiBtn: winnerGame ? true : false,
        statistika: false
      }
    })
  }

  const sisestaUuedMangijad = () => {
    dispatch({ type: 'SET_STATS', payload: [] })
    dispatch({ type: 'SET_MANGU_VOITJA', value: '' })
    dispatch({ type: 'SET_PICKWINNERBTN_DISABLED', value: false })
    dispatch({ type: 'SET_LOPETAMANGBTN_DISABLED', value: false })
    dispatch({
      type: 'SET_DISPLAY',
      payload: {
        sisendForm: true,
        pickWinnerBtn: false,
        vooruVoitja: false,
        resultsTable: false,
        manguVoitja: false,
        mangiUuestiBtn: false,
        statistika: false
      }
    })
  }

  const mangiUuesti = () => {
    dispatch({ type: 'SET_MANGU_VOITJA', value: '' })
    dispatch({ type: 'SET_VOORU_VOITJA', value: '' })
    dispatch({ type: 'SET_PICKWINNERBTN_DISABLED', value: false })
    dispatch({ type: 'SET_LOPETAMANGBTN_DISABLED', value: false })
    let summad = new Array(state.names.length + 1).join('0').split('').map(parseFloat)
    dispatch({ type: 'SET_SCORE', payload: summad })
    dispatch({
      type: 'SET_DISPLAY',
      payload: {
        sisendForm: false,
        pickWinnerBtn: true,
        vooruVoitja: false,
        resultsTable: false,
        manguVoitja: false,
        mangiUuestiBtn: false,
        statistika: false
      }
    })
  }

  const vaataStatistikat = () => {
    dispatch({
      type: 'SET_DISPLAY',
      payload: {
        sisendForm: false,
        pickWinnerBtn: false,
        vooruVoitja: false,
        resultsTable: false,
        manguVoitja: false,
        mangiUuestiBtn: false,
        statistika: true
      }
    })
  }

  return (
    <Context.Provider
      value={{
        names: state.names,
        score: state.score,
        vooruVoitja: state.vooruVoitja,
        punktini: state.punktini,
        manguVoitja: state.manguVoitja,
        pickWinnerBtnDisabled: state.pickWinnerBtnDisabled,
        lopetaMangBtnDisabled: state.lopetaMangBtnDisabled,
        alertNimed: state.alertNimed,
        stats: state.stats,
        display: state.display,
        setAlert,
        andmedSisse,
        pickWinner,
        sisestaUuedMangijad,
        mangiUuesti,
        vaataStatistikat
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default State
