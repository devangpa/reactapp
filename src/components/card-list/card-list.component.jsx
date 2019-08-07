import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component'

export const Cardlist = (props)=> (

    <div className="card-list">
    {props.monstar.map(monster=><Card key={monster.id} monstar={monster}/>)
    }
    </div>
    );
