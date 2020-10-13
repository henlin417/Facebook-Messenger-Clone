import React, { forwardRef } from 'react';
import Card from '@material-ui/core/Card'; 
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './Message.css';
const Message = forwardRef(({ message, username}, ref) => {
    const isUser = username === message.username;
     
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>  
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="white" 
                        vari ant="h5"
                        components="h2"
                    >
                        {!isUser && `${message.username || 'Unkown User'}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
