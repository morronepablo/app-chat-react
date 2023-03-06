import React from 'react'
import { Box, Stack } from '@mui/material'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = () => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((el, i) => {
                switch (el.type) {
                    case "divider":
                        // Timeline
                        return <Timeline el={el} key={i} />
                        
                    case "msg":
                        switch (el.subtype) {
                            case "img":
                                // img msg
                                return <MediaMsg el={el} key={i} />
                            case "doc":
                                // Doc msg
                                return <DocMsg el={el} key={i} />
                            case "link":
                                // Link msg
                                return <LinkMsg el={el} key={i} />
                            case "reply":
                                // Reply msg
                                return <ReplyMsg el={el} key={i} />

                            default:
                                // Text msg
                                return <TextMsg el={el} key={i} />
                        }

                    default:
                        return null
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message