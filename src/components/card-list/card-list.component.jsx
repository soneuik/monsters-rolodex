import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component';

//props로 파라메터값이 들어온다.    <CardList monsters={this.state.monsters}>안의 monsters
//monster의 값은 App.js에서 json으로 받아온 this.state.monsters으로 채워줬다. 

export const CardList = props => ( 
    <div className='card-list'>{
          props.monsters.map((monster =>
            //{}안의 monster는 CardList의 props의 monster이고
            //괄호가 없는 monster는 parameter값으로 Card 컴포넌트에 전달하는 값
            // monster={monster}
               <Card key={monster.id} monster={monster}/>
        ))} 
    </div>  
);