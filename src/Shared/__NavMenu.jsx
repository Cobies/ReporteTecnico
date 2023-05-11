import Login from "../Components/Login";

/* eslint-disable react/prop-types */
const Navbar = ({ session, setSession }) => {
  return (
    <div >
      <Login session={session} setSession={setSession} />
    </div>
  );
};

export default Navbar;
