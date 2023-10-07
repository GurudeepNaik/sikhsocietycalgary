import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";
import { url } from "../../constants";
import { baseAxios } from "./utils/base_axios";
import axios from "axios";

const HANDLERS = {
  INITIALIZE: "INITIALIZE",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  LOADING_TRUE: "LOADING_TRUE",
  LOADING_FALSE: "LOADING_FALSE",
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;
    return {
      ...state,
      ...(user
        ? {
            isAuthenticated: true,
            isLoading: false,
            user,
          }
        : {
            isLoading: false,
          }),
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  },
  [HANDLERS.LOADING_TRUE]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [HANDLERS.LOADING_FALSE]: (state) => {
    return {
      ...state,
      isLoading: false,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState({});
  const [artists, setArtists] = useState({});
  const [venues, setVenues] = useState({});
  const [genre, setGenre] = useState([]);
  const [eventType, setEventType] = useState([]);
  const [gigs, setGigs] = useState({});
  const [data, setData] = useState([]);

  const initialize = async () => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    let isAuthenticated = false;

    try {
      isAuthenticated = localStorage.getItem("token") ? true : false;
      console.log(isAuthenticated);
    } catch (err) {
      console.error(err);
    }

    if (isAuthenticated) {
      const user = {
        id: "5e86809283e28b96d2d38537",
        avatar: "/assets/avatars/avatar-anika-visser.png",
        name: "Admin",
        email: "admin@demo.com",
      };

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user,
      });
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE,
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const skip = () => {
    try {
      window.sessionStorage.setItem("authenticated", "true");
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: "5e86809283e28b96d2d38537",
      avatar: "/assets/avatars/avatar-anika-visser.png",
      name: "Admin",
      email: "admin@demo.com",
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user,
    });
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const resp = await axios.post(`${url}/login`, { email, password });
      if (resp.status === 200) {
        const data = resp?.data;
        const user = {
          id: data?._id,
          avatar: "/assets/avatars/avatar-omar-darboe.png",
          name: data?.name,
          email: data?.email,
        };
        localStorage.setItem("token", data?.token);
        dispatch({
          type: HANDLERS.SIGN_IN,
          payload: user,
        });
      }
    } catch (error) {
      signOut();
      if (error?.response?.status === 400) {
        throw new Error("Please check your email and password");
      } else {
        throw new Error(error.message);
      }
    }
    setLoading(false);
  };

  const signUp = async (email, name, password) => {
    throw new Error("Sign up is not implemented");
  };

  const signOut = () => {
    localStorage.clear();
    dispatch({
      type: HANDLERS.SIGN_OUT,
    });
  };

  const getUsers = async (page = 1) => {
    setLoading(true);
    try {
      const res = await baseAxios.get(`/users?page=${page}`);
      setUsers(res?.data?.responseData);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      await baseAxios.delete(`/user?id=${id}`);
      getUsers(1);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const getArtists = async (page) => {
    setLoading(true);
    try {
      const res = await baseAxios.get(`/artists?page=${page}`);
      setArtists(res?.data?.responseData);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const deleteArtist = async (id) => {
    setLoading(true);
    try {
      await baseAxios.delete(`/artist?id=${id}`);
      getArtists(1);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const getVenues = async (page) => {
    setLoading(true);
    try {
      const res = await baseAxios.get(`/venues?page=${page}`);
      setVenues(res?.data?.responseData);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const deleteVenue = async (id) => {
    setLoading(true);
    try {
      await baseAxios.delete(`/venue?id=${id}`);
      getVenues(1);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const getGenre = async () => {
    setLoading(true);
    try {
      const res = await baseAxios.get(`/genre`);
      setGenre(res?.data?.data || []);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const postGenre = async (data) => {
    setLoading(true);
    try {
      const res = await baseAxios.post(`/genre`, data);
      setGenre(res?.data?.data || []);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const deleteGenre = async (id) => {
    setLoading(true);
    try {
      const res = await baseAxios.delete(`/genre?id=${id}`);
      setGenre(res?.data?.data || []);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const getGigs = async (page) => {
    setLoading(true);
    try {
      const res = await baseAxios.get(`/gigs?page=${page}`);
      setGigs(res?.data?.responseData);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const getEventType = async () => {
    setLoading(true);
    try {
      const res = await baseAxios.get(`/eventtype`);
      setEventType(res?.data?.data || []);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const postEventType = async (data) => {
    setLoading(true);
    try {
      const res = await baseAxios.post(`/eventtype`, data);
      setEventType(res?.data?.data || []);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const deleteEventType = async (id) => {
    setLoading(true);
    try {
      const res = await baseAxios.delete(`/eventtype?id=${id}`);
      setEventType(res?.data?.data || []);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const getData = async () => {
    setLoading(true);
    try {
      // const res = await baseAxios.get(`/users?page=${page}`);
      const data = [
        {
          _id: 1,
          name: "Sunshine1",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 2,
          name: "Sunshine2",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 3,
          name: "Sunshine3",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 4,
          name: "Sunshine4",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 5,
          name: "Sunshine5",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 6,
          name: "Sunshine6",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 7,
          name: "Sunshine7",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 8,
          name: "Sunshine8",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 9,
          name: "Sunshine9",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
        {
          _id: 10,
          name: "Sunshine10",
          place: "Heble",
          city: "Bhatkal",
          total: 13,
        },
      ];
      setData(data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
        signOut,
        getUsers,
        deleteUser,

        getArtists,
        deleteArtist,

        getVenues,
        deleteVenue,

        users,
        artists,
        venues,

        gigs,
        getGigs,

        genre,
        getGenre,
        postGenre,
        deleteGenre,

        eventType,
        getEventType,
        postEventType,
        deleteEventType,

        loading,
        setLoading,


        getData,
        data
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
