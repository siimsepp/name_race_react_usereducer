const Reducer = (state, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT_BTN_CLICKED':
      return {
        ...state,
        score: action.score,
        names: action.names,
        punktini: action.punktini,
        stats: action.stats,
        fairGame: action.fairGame,
        display: {
          sisendForm: action.display.sisendForm,
          pickWinnerBtn: action.display.pickWinnerBtn,
          vooruVoitja: action.display.vooruVoitja,
          resultsTable: action.display.resultsTable,
          manguVoitja: action.display.manguVoitja,
          mangiUuestiBtn: action.display.mangiUuestiBtn,
          statistika: action.display.statistika
        }
      }
    case 'NEW_PLAYERS_BTN_CLICKED':
      return {
        ...state,
        stats: action.stats,
        manguVoitja: action.manguVoitja,
        pickWinnerBtnDisabled: action.pickWinnerBtnDisabled,
        lopetaMangBtnDisabled: action.lopetaMangBtnDisabled,
        display: {
          sisendForm: action.display.sisendForm,
          pickWinnerBtn: action.display.pickWinnerBtn,
          vooruVoitja: action.display.vooruVoitja,
          resultsTable: action.display.resultsTable,
          manguVoitja: action.display.manguVoitja,
          mangiUuestiBtn: action.display.mangiUuestiBtn,
          statistika: action.display.statistika
        }
      }
    case 'PICK_WINNER_BTN_CLICKED_WITH_GAME_WINNER':
      return {
        ...state,
        pickWinnerBtnDisabled: action.pickWinnerBtnDisabled,
        manguVoitja: action.manguVoitja,
        stats: action.stats
      }
    case 'PICK_WINNER_BTN_CLICKED_NO_GAME_WINNER':
      return {
        ...state,
        score: action.score,
        vooruVoitja: action.vooruVoitja,
        display: {
          sisendForm: action.display.sisendForm,
          pickWinnerBtn: action.display.pickWinnerBtn,
          vooruVoitja: action.display.vooruVoitja,
          resultsTable: action.display.resultsTable,
          manguVoitja: action.display.manguVoitja,
          mangiUuestiBtn: action.display.mangiUuestiBtn,
          statistika: action.display.statistika
        }
      }
    case 'SET_ALERT':
      return {
        ...state,
        alertNimed: action.value
      }
    case 'STATISTICS_BTN_CLICKED':
      return {
        ...state,
        display: {
          sisendForm: action.display.sisendForm,
          pickWinnerBtn: action.display.pickWinnerBtn,
          vooruVoitja: action.display.vooruVoitja,
          resultsTable: action.display.resultsTable,
          manguVoitja: action.display.manguVoitja,
          mangiUuestiBtn: action.display.mangiUuestiBtn,
          statistika: action.display.statistika
        }
      }
    case 'PLAY_AGAIN_BTN_CLICKED':
      return {
        ...state,
        score: action.score,
        manguVoitja: action.manguVoitja,
        vooruVoitja: action.vooruVoitja,
        pickWinnerBtnDisabled: action.pickWinnerBtnDisabled,
        lopetaMangBtnDisabled: action.lopetaMangBtnDisabled,
        display: {
          sisendForm: action.display.sisendForm,
          pickWinnerBtn: action.display.pickWinnerBtn,
          vooruVoitja: action.display.vooruVoitja,
          resultsTable: action.display.resultsTable,
          manguVoitja: action.display.manguVoitja,
          mangiUuestiBtn: action.display.mangiUuestiBtn,
          statistika: action.display.statistika
        }
      }
    case 'SET_PROBS':
      return {
        ...state,
        protsMangijale: action.protsMangijale
      }

    default:
      return state
  }
}

export default Reducer
