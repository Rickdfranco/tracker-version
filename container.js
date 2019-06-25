import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

function Contatiner(){
    return(
        <Wrapper>
            <Switch>
                <Route exact path='./componets/Computer' compontnet={()=> <div>Computer</div>}/>
            </Switch>
        </Wrapper>
    )
}