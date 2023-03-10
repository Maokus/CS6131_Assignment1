import path from "path";
import { useHistory } from "react-router-dom";

interface NavBarProps {
    currentPath: string;
    items: string[][];
}

interface NavItemProps {
    active: boolean;
    label: string;
    url: string;
}

function NavItem(props: NavItemProps) {
    const history = useHistory();
    return (
        <li>
            <p
                onClick={() => { history.push(props.url) }}
                className={props.active ?
                    "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer" :
                    "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer"
                }
                aria-current="page">{props.label}</p>
        </li>
    )
}

export default function NavBar(props: NavBarProps) {

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Inventory
                        Manager</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {props.items.map((x) => { return <NavItem key={x[1]} active={path.resolve(props.currentPath) === path.resolve(x[1])} label={x[0]} url={x[1]} /> })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}