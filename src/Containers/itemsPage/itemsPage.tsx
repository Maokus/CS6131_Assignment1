import ItemCards from "../../Components/itemCards";
import Item from "../../types/item";

function SearchBar() {
    return (
        < div className="m-3" >
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Items..." required />
                    <button type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </div >
    )
}

export default function ItemsPage() {
    const its: Item[] = [
        { name: "Camera 2", id: "BMPCC2", status: "status", remark: "null", totalQuantity: 1, remainingQuantity: 1, possesor: null },
        { name: "Camera 3", id: "BMPCC3", status: "status", remark: "null", totalQuantity: 1, remainingQuantity: 1, possesor: null },
    ]
    return (
        <div>
            <h1 className="font-semibold text-5xl m-20 dark:text-white mb-0">Welcome, Vikram.</h1>
            <div className="w-full flex justify-center">
                <div className="w-10/12 lg:w-1/3 m-20 rounded-lg dark:bg-gray-900 shadow-lg">
                    <div className="w-full text-center">
                        <h1 className="text-4xl dark:text-white font-semibold m-8">Inventory Items</h1>
                        <SearchBar />
                        <hr className="border-black" />
                        <ItemCards items={its} />

                    </div>
                </div>
            </div>
        </div>
    )
}