export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log('action', action)
      let band = { 
        id: Math.random(), 
        // name: action.band.name
        name: action.name.name
      }
        return { ...state, bands: [...state.bands, band] }
      

    case 'DELETE_BAND':
      const bands = state.bands.filter(band => band.id !== action.id);
        return { bands };
    default:
      return state;
  }
};
