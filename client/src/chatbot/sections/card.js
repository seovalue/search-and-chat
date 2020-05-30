import React from 'react'
import { Card, Icon } from 'antd';

const { Meta } = Card;


function CardComponent(props) {
    console.log("props" ,props)
    return (
        <Card
            style={{ width: 180}}
            cover={
                <img
                    alt={props.cardInfo.description}
                    src={props.cardInfo.image} 
                    />
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
export default CardComponent
