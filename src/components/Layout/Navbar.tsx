
import { getCategory } from "../../../sanity/sanity-config";
import Header from "../view/Header";

const Navbar = async () => {
    const Nav = await getCategory();
  return (
    <div>
        <Header NavBarItem={Nav}/>
    </div>
  )
}

export default Navbar