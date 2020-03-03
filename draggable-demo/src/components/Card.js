import React from 'react';

function Card(props) {

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.opacity = 0.2;
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    const onDrop = e => {
        const target = e.target;
        e.preventDefault();

        target.style.opacity = 1;

    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={onDrop}
        >
            {props.children}
        </div>
    )
}

export default Card