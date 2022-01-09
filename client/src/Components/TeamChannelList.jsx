import React from 'react'
import AddIcon from '@material-ui/icons/Add';

function TeamChannelList({children,error=false,loading,type}) {
    if(error){
        return type==='team'?( 
            <div>
                <p className='bg-red-500 px-2 py-1 rounded-lg'>Connection error, please try again later</p>
            </div>
        ):null
    }
    if(loading){
        return (
            <div>
                <p>
                {type==='team'?'Channels':'Messages'} loading...
                </p>
                {/* Button to add channels */}
            </div>
        )
    }


    return (
        <div>
            <div>
                <p>
                    {type==='team'?'Channels':'Direct Messages'}
                </p>
             
            </div>
        </div>
    )
}

export default TeamChannelList
