import __NavMenu from "./__NavMenu";

const __Layout = ({ children, session , setSession }) => {

  return (
    <>
      <__NavMenu session={session} setSession={setSession} />
        {children}
    </>
  );
};

export default __Layout;
