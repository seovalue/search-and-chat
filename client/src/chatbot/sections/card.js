import React from 'react'
import { Card, Icon } from 'antd';

const { Meta } = Card;

function CardComponent(props) {
    console.log("props" ,props)
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt={props.cardInfo.description}
                    src={props.cardInfo.image} />
            }
            actions={[
                <a target="_blank" rel="noopener noreferrer" href={props.cardInfo.link}>
                    <Icon type="ellipsis" key="ellipsis" />
                </a>
            ]}
        >
            <Meta
                title={props.cardInfo.title}
                description={props.cardInfo.description}
            />

        </Card>

    )
}


/*
function CardComponent(props) {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt={props.cardInfo.fields.description.stringValue}
                    src={props.cardInfo.fields.image.stringValue} />
            }
            actions={[
                <a target="_blank" rel="noopener noreferrer" href={props.cardInfo.fields.link.stringValue}>
                    <Icon type="ellipsis" key="ellipsis" />
                </a>
            ]}
        >
            <Meta
                title={props.cardInfo.fields.title.stringValue}
                description={props.cardInfo.fields.description.stringValue}
            />

        </Card>

    )
}
*/
export default CardComponent
