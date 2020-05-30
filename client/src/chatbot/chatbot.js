import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../_actions/message_actions';
import Message from './Sections/Message';
import { List, Icon, Avatar } from 'antd';
import Card from "./Sections/Card";
import CheckString from './Check';
const username = "유저";

function Chatbot() {
    const dispatch = useDispatch();
    const messagesFromRedux = useSelector(state => state.message.messages)

    useEffect(() => {

        eventQuery('001_Welcome')
        eventQuery('002_Intro')

    }, [])


    const textQuery = async (text) => {

        //  First  Need to  take care of the message I sent     
        let conversation = {
            who: username,
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))
        // console.log('text I sent', conversation)

        var inputString = conversation.content.text.text
        
        // We need to take care of the message Chatbot sent 
        const textQueryVariables = {
            text
        }
        try {
            if(inputString[0] === '@'){
                console.log("첫번째 i", inputString);
                inputString = CheckString(inputString);
                console.log("두번째 i",inputString);
                let response;
                if(inputString === '최신'){ //@가수명_최신
                    response = await Axios.post('/api/latest/textQuery', textQueryVariables)
                }
                else if(inputString === '정확도'){ //@가수명_정확도
                    response = await Axios.post('/api/related/textQuery', textQueryVariables)
                }
                else if(inputString === '소식'){ //@가수명_소식
                    response = await Axios.post('/api/news/textQuery', textQueryVariables)
                }

                // const response = await Axios.post('/api/crawling/textQuery', textQueryVariables)
                let conversations = {}
                let pushConversations = []
                for(var i = 0; i < 3; i++){
                    conversation = {
                        who : '소통이',
                        content : response.data[i]
                    }
                    pushConversations.push(conversation)
                }
                conversations["card"] = pushConversations
                console.log("conversations",conversations)
                dispatch(saveMessage(conversations))
                
            } else {
                //I will send request to the textQuery ROUTE 
                const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)
                
                for (let content of response.data.fulfillmentMessages) {
                    
                    conversation = {
                        who: '소통이',
                        content: content
                    }
                    console.log("conversation: ",conversation)
                    dispatch(saveMessage(conversation))
                }
            }

        } catch (error) {
            conversation = {
                who: '소통이',
                content: {
                    text: {
                        text: "잘못된 입력입니다. 다시 입력해주세요!"
                    }
                }
            }

            dispatch(saveMessage(conversation))
        }

    }

    const eventQuery = async (event) => {

        // We need to take care of the message Chatbot sent 
        const eventQueryVariables = {
            event
        }

        try {
            //I will send request to the textQuery ROUTE 
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            for (let content of response.data.fulfillmentMessages) {
                let conversation = {
                    who: '소통이',
                    content: content
                }

                dispatch(saveMessage(conversation))
            }


        } catch (error) {
            let conversation = {
                who: '소통이',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }
            dispatch(saveMessage(conversation))
        }

    }


    const keyPressHanlder = (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('you need to type something first')
            }

            //we will send request to text query route 
            textQuery(e.target.value)


            e.target.value = "";
        }
    }

    const renderCards = (cards) => {
        cards.map((card,i) => console.log("card.content",card.content))
        return cards.map((card,i) => <Card key={i} cardInfo={card.content} />)
    }


    const renderOneMessage = (message, i) => {
        console.log('message', message)
        console.log('message.card',message.card)

        // we need to give some condition here to separate message kinds 

        // template for normal text 
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        } 
        else if (message.card) {

            const AvatarSrc = message.who === '소통이' ? <Icon type="robot" /> : <Icon type="smile" />
            console.log("message content",message.content)
            return <div>
                <List.Item style={{ padding: '1rem' }}>
                    <List.Item.Meta
                        avatar={<Avatar icon={AvatarSrc} />}
                        title={message.who}
                        description={renderCards(message.card)}
                    />
                </List.Item>
            </div>
        }


        // template for card message 




    }

    const renderMessage = (returnedMessages) => {

        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    }


    return (
        <div style={{
            height: 650, width: 700,
            border: '3px solid black', borderRadius: '7px'
        }}>
            <div style={{ height: 594, width: '100%', overflow: 'auto' }}>


                {renderMessage(messagesFromRedux)}


            </div>
            <input
                style={{
                    margin: 0, width: '100%', height: 50,
                    borderRadius: '4px', padding: '5px', fontSize: '1rem'
                }}
                placeholder="Send a message..."
                onKeyPress={keyPressHanlder}
                type="text"
            />

        </div>
    )
}

export default Chatbot;
