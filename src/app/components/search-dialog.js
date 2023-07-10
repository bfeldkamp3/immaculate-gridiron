'use client'
import "tw-elements/dist/css/tw-elements.min.css";
import React from 'react'

import {
    Modal,
    Ripple,
    initTE,
} from "tw-elements";
initTE({ Modal, Ripple });

export default function SearchDialog({ classes }) {
    const searchInput = React.createRef();
    React.useEffect(() => {
        searchInput.current.focus();
    }, [])

    return (
        <div
            data-te-modal-init
            className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div
                data-te-modal-dialog-ref
                className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div
                className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                    <div
                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                        <h5 className="text-xl font-medium leading-normal text-neutral-800" id="exampleModalLabel">
                            Player Search
                        </h5>

                        <button
                        type="button"
                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>

                    <div className="relative flex-auto p-4" data-te-modal-body-ref>
                    <form className="flex items-center" autoComplete="off">   
                        <div className="relative w-full">
                            <input ref={searchInput} type="text" id="playerSearch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="enter player name..." required />
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
