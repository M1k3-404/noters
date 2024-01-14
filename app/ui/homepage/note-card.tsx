"use client";

import { NoteCard } from '@/app/lib/definitions';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import '../globals.css';

export default function NoteCard({ topic, note, date, label, favourite} : { topic: string, note: string, date: string, label: string, favourite: boolean }) {

    const [isFavourite, setIsFavourite] = useState(favourite);

    const toggleFavourite = () => {
        setIsFavourite(!isFavourite);
    }

    return(
        <div className="w-full flex flex-col shrink grow bg-customGreyBlue rounded-md px-6 pb-4">
            <p className='mt-6 text-xl font-semibold'>{topic}</p>

            <p className='my-4'>
                {note}
            </p>

            <div className="flex flex-row align-middle justify-between mt-6">
                <div className="flex flex-col">
                    <p className='font-medium'>{date}</p>
                    <p className='font-normal'>{label}</p>
                </div>

                <div className="flex flex-row">
                    <button className='bg-transparent hover:bg-transparent custom-btn mx-1'>
                        <ShareIcon sx={{ fontSize: 32 }} className="mx-1" />
                    </button>
                    <button className='bg-transparent hover:bg-transparent custom-btn mx-1' onClick={toggleFavourite}>
                        { isFavourite ? <FavoriteIcon sx={{ fontSize: 32 }} className="mx-1 text-red-500" /> : <FavoriteIcon sx={{ fontSize: 32 }} className="mx-1" /> }
                    </button>
                </div>
            </div>
        </div>
    )
}