// import { useRecoilValue, useResetRecoilState } from "recoil";
// import Header from "./Header";
// import { tokenState, userState } from "../../../store/stateAtoms";
// import { useNavigate } from "react-router-dom";
// import { AuthAPI } from "../../../api";
// import { useEditor } from "@tiptap/react";
// import { useEffect } from "react";

// const Index = () => {
//   const navigate = useNavigate();
//   const user = useRecoilValue(userState);
//   const setToken = useResetRecoilState(tokenState);
//   const setUser = useResetRecoilState(userState);

//   useEffect(() => {}, [user, userState]);

//   const handleLogout = async () => {
//     try {
//       const result = await AuthAPI.logout();
//       setToken();
//       setUser();
//       navigate("/");
//     } catch (error) {}
//   };

//   return <Header {...{ user }} {...{ handleLogout }} />;
// };

// export default Index;
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return <Header />;
};

export default Index;
