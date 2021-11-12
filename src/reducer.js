import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //remove after developing
  // token: "BQB5xOoicDvpzp-Y2gDFVXeRmKvESy1e_BXrHUkxt5RKzTMxbMvad_63dPZZ6gPZ2NRhkuurpSOlRCFeaVY-96zdKBisvNxM716rUAGSK9D-pktWvfMWJOhdWCPlHKugJE40CGBS6c0Q6sRYISz-Ae1dC8YU3N3qpUwNubs6urjJzdMmT9bW",
};

const reducer = (state, action) => {
  console.log(action);

   // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      
     case "SET_PLAYLISTS":
     return {
       ...state,
       playlists: action.playlists,
     }; 

      
        
      

    default:
      return state;
  }
};

export default reducer;