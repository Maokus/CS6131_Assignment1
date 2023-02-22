import { ReactNode } from "react";
import Item from "../types/item";

interface itemCardProps {
    label: string;
    sublabel?: string;
    right: ReactNode;
}

interface itemCardsProps {
    items: Item[];
}

export default function ItemCards(props: itemCardsProps) {


    var nodes = new Array<React.ReactNode>();
    for (var item of props.items) {
        nodes.push(<ItemCard key={item.name} label={item.name} sublabel={item.timeOfAquisition?.toDateString()} right={<p className="bg-blue-800 p-1 pl-3 pr-3 rounded-md">Return</p>}></ItemCard>)
    }
    return <div>
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Item name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Aquisition time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {nodes}
                </tbody>
            </table>
        </div>
    </div>
}

function ItemCard(props: itemCardProps): JSX.Element {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.label}
            </th>
            <td className="px-6 py-4">
                {props.sublabel}
            </td>
            <td className="px-6 py-4">
                Placeholder
            </td>
            <td className="px-6 py-4">
                {props.right}
            </td>
        </tr>
    )
}