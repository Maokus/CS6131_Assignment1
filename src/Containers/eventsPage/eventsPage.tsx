import Event from "../../types/event"
import Clock from 'react-live-clock';
import { useEffect, useState } from "react";

interface EventsListProps {
    events: Event[];
}

interface EventUnitProps {
    event: Event;
}

function EventUnit(props: EventUnitProps) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <li className="mb-10 ml-6">
            <span
                className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"></path>
                </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {props.event.name}
                {(time > props.event.startDate && time < props.event.endDate) ? <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Now</span> : <p></p>}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.event.startDate?.toLocaleString()} to {props.event.endDate?.toLocaleString()}</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props.event.description}</p>

        </li >
    )
}

function EventsList(props: EventsListProps) {

    var nodes = new Array<React.ReactNode>();

    for (var event of props.events) {
        nodes.push(<EventUnit event={event} key={event.name} />)
    }

    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {nodes}
        </ol>
    )
}

export default function EventsPage() {
    var ets = [{
        name: "Orientation 2023",
        description: "Orientation is a massive event with the main goal of inducting new year 1 students into NUS High. It consists of three full days of programmes with 6 theatre segments and many more individual activity units. Media club will be involved in documenting and livestreaming the event.",
        startDate: new Date(),
        endDate: new Date((new Date()).getTime() + 10000),
    }, {
        name: "Speech day 2023",
        description: "Speech day is a day to commemorate NUS High students who have clinched exceptional achievements.",
        startDate: new Date((new Date()).getTime() + 10000),
        endDate: new Date((new Date()).getTime() + 20000),
    }, {
        name: "Arbitrary event title",
        description: "Arbitrary event description",
        startDate: new Date((new Date()).getTime() + 2000000),
        endDate: new Date((new Date()).getTime() + 3000000),
    }]
    return (
        < div className="w-full flex justify-center flex-col" >
            <div className="block m-auto mt-8 dark:text-white font-semibold">
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
            </div>
            <div className="m-20 mt-8">
                <EventsList events={ets} />
            </div>
        </div >
    )
}