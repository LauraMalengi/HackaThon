import {link} from "react-router-dom"

function Navbar () {
    return (
        <nav>
            <h2>Books</h2>
            <ul>
                <li>
                    <link to="/">Home<link/>
                </li>
                 <li>
                    <link to="/Create">Create<link/>
                </li>
                 <li>
                    <link to="/Get">Get<link/>
                </li>
                 <li>
                    <link to="/Update">Update<link/>
                </li>
                 <li>
                    <link to="/Delete">Delete<link/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
