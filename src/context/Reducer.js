const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        alertNimed: action.value
      }
    case 'SET_SCORE':
      return {
        ...state,
        score: action.payload
      }
    case 'SET_NAMES':
      return {
        ...state,
        names: action.payload
      }
    case 'SET_PUNKTINI':
      return {
        ...state,
        punktini: action.value
      }
    case 'SET_STATS':
      return {
        ...state,
        stats: action.payload
      }
    case 'SET_MANGU_VOITJA':
      return {
        ...state,
        manguVoitja: action.value
      }
    case 'SET_VOORU_VOITJA':
      return {
        ...state,
        vooruVoitja: action.value
      }
    case 'SET_PICKWINNERBTN_DISABLED':
      return {
        ...state,
        pickWinnerBtnDisabled: action.value
      }
    case 'SET_LOPETAMANGBTN_DISABLED':
      return {
        ...state,
        lopetaMangBtnDisabled: action.value
      }
    case 'SET_DISPLAY':
      return {
        ...state,
        display: {
          sisendForm: action.payload.sisendForm,
          pickWinnerBtn: action.payload.pickWinnerBtn,
          vooruVoitja: action.payload.vooruVoitja,
          resultsTable: action.payload.resultsTable,
          manguVoitja: action.payload.manguVoitja,
          mangiUuestiBtn: action.payload.mangiUuestiBtn,
          statistika: action.payload.statistika
        }
      }
    default:
      return state
  }
}

export default Reducer
