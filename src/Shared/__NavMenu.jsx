import Login from "../Components/Login";

/* eslint-disable react/prop-types */
const Navbar = ({ session, setSession }) => {

  return (
    <>
      <Login session={session} setSession={setSession} />
    </>
  );
};

export default Navbar;
