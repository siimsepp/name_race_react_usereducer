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
    // Kui on kolm mängijat, siis teeb array: [0, 0, 0]
    let summad = new Array(arrNames.length + 1).join('0').split('').map(parseFloat)
    dispatch({
      type: 'FORM_SUBMIT_BTN_CLICKED',
      score: summad,
      names: arrNames,
      punktini: punktidNum,
      stats: summad,
      display: {
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
      let i = copyScore.indexOf(Math.max(...copyScore))
      winnerGame = state.names[i]
      // Lisa võit võitja statistikasse
      const statNow = [...state.stats]
      statNow[i] += 1
      dispatch({
        type: 'PICK_WINNER_BTN_CLICKED_WITH_GAME_WINNER',
        pickWinnerBtnDisabled: true,
        manguVoitja: winnerGame,
        stats: statNow
      })
    }
    dispatch({
      type: 'PICK_WINNER_BTN_CLICKED_NO_GAME_WINNER',
      score: copyScore,
      vooruVoitja: voitja,
      display: {
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
    dispatch({
      type: 'NEW_PLAYERS_BTN_CLICKED',
      stats: [],
      manguVoitja: '',
      pickWinnerBtnDisabled: false,
      lopetaMangBtnDisabled: false,
      display: {
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
    let summad = new Array(state.names.length + 1).join('0').split('').map(parseFloat)
    dispatch({
      type: 'PLAY_AGAIN_BTN_CLICKED',
      score: summad,
      manguVoitja: '',
      vooruVoitja: '',
      pickWinnerBtnDisabled: false,
      lopetaMangBtnDisabled: false,
      display: {
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
      type: 'STATISTICS_BTN_CLICKED',
      display: {
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
