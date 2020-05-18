import React, {useEffect} from 'react';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {saveMessage} from '../_actions/message_actions';
import Message from './sections/msg';
import Card from './sections/card';
import {List, Icon, Avatar} from 'antd';

function chatbot(){
    const dispatch = useDispatch();
    const messageFromRedux = useSelector(state => state.message.messages)

    useEffect(() => {
        eventQuery('') //처음 시작했을 때 시작할 쿼리 설정
    }, [])

    const textQuery = async(text) => {
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))
    }
}

export default chatbot;