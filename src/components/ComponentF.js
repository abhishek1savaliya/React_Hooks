import React from 'react'

import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (<ChannelContext.Consumer>
                            {channel => {
                                return <div>USer Context Value is {user} and Channel name is {channel}</div>
                            }}
                        </ChannelContext.Consumer>)
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
