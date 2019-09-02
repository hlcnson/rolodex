import React from 'react';

import {Card} from '../card/card.component';

import './card-list.style.css';


// Tạo một react component với cú pháp arrow function,
// nhận tham số props
export const CardList = props => {
    // console.log(props);
    // children là một thuộc tính sẵn có trong tham số props.
    return (
        <div className='card-list'>
            {
            // Đoạn code này tạo ra một danh sách các JSX element
            // của react.
            // Hàm map nhận đối số là một function, function
            // này sẽ được kích hoạt trên từng phần tử trong 
            // thuộc tính monsters.
            // Thuộc tính key giúp react phân biệt các phần tử
            // h1 được kết xuất để dễ dàng cập nhật về sau.
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}></Card>
            ))
            }
        </div>
    );
}