import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { inviteReducer } from "../reducer/inviteReducer";

const InviteContext = createContext();

const InviteProvider = ({ children }) => {
  const [list, dispatchList] = useReducer(inviteReducer, {
    dataList: [],
    userList: [],
    groupList: [],
    selectedList: [],
    searchInput: "",
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("database.json");
      dispatchList({ type: "initialSet", payload: data });
    })();
  }, []);

  return (
    <InviteContext.Provider value={{ list, dispatchList }}>
      {children}
    </InviteContext.Provider>
  );
};

const useInvite = () => useContext(InviteContext);

export { InviteProvider, useInvite };
