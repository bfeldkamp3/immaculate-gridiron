'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import "tw-elements/dist/css/tw-elements.min.css";


import {
    Modal,
    initTE,
} from "tw-elements";
initTE({ Modal });

export default function SearchDialog(props) {
    const [currentPlayer, setCurrentPlayer] = React.useState('');
    const [playerList] = React.useState(Object.keys(props.players));
    const [value, setValue] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const grid = JSON.parse(localStorage.grid);
        const playerInfo = Array.from(props.players[currentPlayer]);
        
        let correctPlayer = true;
        if(!playerInfo.includes(grid.team1)){
            correctPlayer = false;
        } else if(grid.team2 !== '' && !playerInfo.includes(grid.team2)){
            correctPlayer = false;
        } else if(grid.award !== '' && !playerInfo.includes(grid.award)){
            correctPlayer = false;
        }

        if(!correctPlayer){
            document.getElementById('searchContainer').style.backgroundColor = 'red';
            setTimeout(()=>{
                document.getElementById('searchContainer').style.backgroundColor = 'white';
            }, 600);
            setValue('')
            return false;
        }

        setValue('')
        document.getElementById(`${grid.id}`).innerHTML=currentPlayer;
        document.getElementById('closeButton').click()
        return true;
    }

    const handleChange = async (event, value) => {
        setCurrentPlayer(value)
    }

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
                <div id="searchContainer"
                className="backgroundFade min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                     <button
                        id="closeButton"
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
                    <div className="relative flex-auto p-4" data-te-modal-body-ref>
                    <form className="flex items-center" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="relative w-full">
                        <Autocomplete
                            disablePortal
                            id="playerSearch"
                            options={playerList}
                            clearOnEscape
                            value={value}
                            renderOption={(props, option) => {
                                return (
                                <li {...props} key={option}>
                                    {option}
                                </li>
                                )
                            }}
                            renderInput={(params) => <TextField {...params} label="Player" />}
                            onChange={(event, value) => handleChange(event, value)}
                        />
                            {/* <input ref={searchInput} type="text" id="playerSearch" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="enter player name..." required /> */}
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium rounded-lg border border-blue-700 hover:bg-blue-800">
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
    );
}