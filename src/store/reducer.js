export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove token to be null after finish developing
  // token: 'BQAtQRNR4Viorze3DSfMgalyms3a4_MfYv2zbUin8w3746WWtFy_xPEHPd6azn_oTIwLJZyRw5kBj4g0bAyCzSRPKRMzAkZuDa9sFW8pGJnRM8PnVt0P-y33lc-gVobHKVr6BqbOpq3rCiYMRVmK4LhcyNR_DJBOGYV-MEoYLZCLPIGBfJ_tLffMBNpZYXjyB9piWvGDl0pLBh4wyOwE-o8ccw9KkHiVJk59AY-hOeE0dfhBcGLURvjhG0m3daMKtxkUewdL_A6NJSN_eyP5XsBRznZ1LNtQYXs',
};

const reducer = (state, action) => {
  console.log('ini masuk reducer', action)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state, 
        token: action.token,
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }

    case 'SET_CURRENT_TRACK':
      return {
        ...state,
        current_track: action.track,
      }
    default:
      return state;
  }
}

export default reducer;