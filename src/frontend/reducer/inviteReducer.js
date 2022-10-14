export const inviteReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "initialSet":
      return {
        ...state,
        dataList: payload,
        userList: payload.filter(
          (user) => user.profileType === "user" && user.invited === false
        ),
        groupList: payload.filter(
          (user) => user.profileType === "group" && user.invited === false
        ),
      };
    case "search":
      return {
        ...state,
        userList: state.dataList.filter(
          (user) =>
            user.profileType === "user" &&
            user.name.toLowerCase().includes(payload.toLowerCase()) &&
            user.invited === false &&
            state.selectedList.indexOf(user) === -1
        ),
        groupList: state.dataList.filter(
          (user) =>
            user.profileType === "group" &&
            user.name.toLowerCase().includes(payload.toLowerCase()) &&
            user.invited === false &&
            state.selectedList.indexOf(user) === -1
        ),
        searchInput: payload,
      };
    case "select":
      return {
        ...state,
        selectedList: [
          ...state.selectedList,
          state.dataList.find((user) => user.name === payload),
        ],
        userList: state.dataList.filter(
          (user) =>
            user.profileType === "user" &&
            user.name !== payload &&
            state.selectedList.indexOf(user) === -1 &&
            user.invited === false
        ),
        groupList: state.dataList.filter(
          (user) =>
            user.profileType === "group" &&
            user.name !== payload &&
            state.selectedList.indexOf(user) === -1 &&
            user.invited === false
        ),
        searchInput: "",
      };
    case "deselect":
      return {
        ...state,
        userList: [
          ...state.dataList.filter(
            (user) =>
              user.profileType === "user" &&
              user.invited === false &&
              state.selectedList.indexOf(user) === -1 &&
              user.name.toLowerCase().includes(state.searchInput.toLowerCase())
          ),
          ...state.dataList.filter(
            (user) => user.profileType === "user" && user === payload
          ),
        ],
        groupList: [
          ...state.dataList.filter(
            (user) =>
              user.profileType === "group" &&
              user.invited === false &&
              state.selectedList.indexOf(user) === -1 &&
              user.name.toLowerCase().includes(state.searchInput.toLowerCase())
          ),
          ...state.dataList.filter(
            (user) => user.profileType === "group" && user === payload
          ),
        ],
        selectedList: state.selectedList.filter((user) => user !== payload),
      };
    case "invited":
      return {
        dataList: state.dataList.map((user) =>
          state.selectedList.indexOf(user) === -1
            ? { ...user }
            : { ...user, access: payload, invited: true }
        ),
        userList: state.dataList.filter(
          (user) => user.profileType === "user" && user.invited === false
        ),
        groupList: state.dataList.filter(
          (user) => user.profileType === "group" && user.invited === false
        ),
        selectedList: [],
        searchInput: "",
      };
    case "uninvite":
      return {
        ...state,
        dataList: state.dataList.map((user) =>
          user.name === payload
            ? { ...user, access: "no access", invited: false }
            : { ...user }
        ),
        userList: state.dataList.filter(
          (user) => user.profileType === "user" && user.invited === false
        ),
        groupList: state.dataList.filter(
          (user) => user.profileType === "group" && user.invited === false
        ),
      };
    case "changeAccess":
      return {
        ...state,
        dataList: state.dataList.map((user) =>
          user.name === payload.name
            ? { ...user, access: payload.access }
            : { ...user }
        ),
      };
    case "reset":
      return {
        ...state,
        userList: state.dataList.filter(
          (user) => user.profileType === "user" && user.invited === false
        ),
        groupList: state.dataList.filter(
          (user) => user.profileType === "group" && user.invited === false
        ),
        selectedList: [],
        searchInput: "",
      };
    default:
      return state;
  }
};
