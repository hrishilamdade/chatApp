import React from 'react'
import {ChannelList,useChatContext} from 'stream-chat-react'
import {ChannelSearch,TeamChannelList,TeamChannelPreview} from './'
import Cookies from 'universal-cookie' 
import {Box} from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const SideBar=()=>{
    return (
        <div className='basis-2 max-w-max bg-indigo-700 h-screen max-h-screen p-4'>
            <div className='mb-3'>
                <Box
                    style={{width:'2rem'}}
                    className='w-6 h-6 text-white'
                    component={WhatsAppIcon}
                />
            </div>
            <div className='mb-3'>
                <Box
                    className='w-6 h-6 text-white'
                    component={ExitToAppIcon}
                />
            </div>
        </div>
    )
}

const CompanyHeader=()=>{
    return (
        <div className=''>
            <h4 className='font-bold text-2xl my-4'>LetsChat</h4>
        </div>
    )
}

function ChannelListContainer() {
    return (
        <div className="flex flex-row w-1/4">
            <SideBar/>
            <div className='basis-7 px-3'>
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type="team"
                        />
                    )}
                    Preview={(previewProps)=>
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                        />
                    }

                />
                 <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps)=>
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    }

                />
            </div>
        </div>
    )
}

export default ChannelListContainer
