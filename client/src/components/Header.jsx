import { Navbar, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";


function Header() {
    return (
        <Navbar className="border-b-2">
            <Link to="/" className="self-center text-sm whitespace-nowrap sm:text-lg font-semibold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                    Prince's
                </span>
                Blog
            </Link>

         <form>
            <TextInput 
            placeholder="Search..."
            rightIcon={AiOutlineSearch}



            />
         </form>

        </Navbar>
    )
}

export default Header