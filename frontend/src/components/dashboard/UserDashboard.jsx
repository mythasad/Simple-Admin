import SimpleMenuList from "../menu/MenuList/SimpleMenuList"
function UserDashboard() {
  return (
    <>
    
    <header><h1>
        Simple Menu | Simple
    </h1>
      <nav><a href="/signup">Sign Up</a>
      <a href="/login">Login</a></nav>

    </header>
    <SimpleMenuList />
    </>
  )
}

export default UserDashboard