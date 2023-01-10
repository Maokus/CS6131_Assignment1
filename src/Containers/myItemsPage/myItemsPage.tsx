import ItemCards from "../../Components/itemCards";
import Item from "../../types/item";

export default function MyItemsPage() {
    const its: Item[] = [
        { name: "Key", description: "A key, what else is there to say", possesor: null },
        { name: "Camera 1", description: "A camera, black magic design", possesor: null }
    ]
    return (
        <div>
            <h1 className="font-semibold text-5xl m-20 dark:text-white mb-0">Welcome, NAMEPLACEHOLDER</h1>
            <div className="w-full flex justify-center">
                <div className="w-10/12 lg:w-1/3 m-20 rounded-lg dark:bg-gray-900 shadow-lg">
                    <div className="w-full text-center">
                        <h1 className="text-4xl dark:text-white font-semibold m-8">My Items</h1>
                        <hr className="border-black" />
                        <ItemCards items={its} />

                    </div>
                </div>
            </div>
        </div>
    )
}