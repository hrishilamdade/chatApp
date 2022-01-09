import React, { useEffect, useState } from 'react'
import { useChatContext } from 'stream-chat-react';
import SearchIcon from '@material-ui/icons/Search';
import { Input, Box } from '@material-ui/core';

function ChannelSearch() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        
    }, []);

    const getChannels=async (text)=>{
        try{
            //fetch Channels
        }
        catch(error){
            setQuery('')
        }
    }
    const onQueryChange=(e)=>{
        setLoading(true);
        setQuery(e.target.value)
        getChannels(e.target.value);
    }
    return (
        <div className='text-black'>
            <div className='flex flex-row items-center bg-blue-100 my-2 p-2 rounded-lg'>
                <Box
                    component={SearchIcon}
                    className='text-gray-600'
                />
                <input 
                    type="text" 
                    className='pl-2 bg-transparent' 
                    placeholder='Search'
                    value={query}
                    onChange={onQueryChange}
                />
            </div>
        </div>
    )
}

export default ChannelSearch
