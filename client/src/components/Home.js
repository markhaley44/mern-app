import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Homestyle = styled.div`
    text-align: center;
    border: 1px solid #000;
    color: blue;
    h1{
        font-weight: bold;

    }
`


class Home extends Component {
    render() {
        return (
            <Homestyle>
                <h1>Hello, Welcome to Child Care Network</h1>
                <Link to="/users">
                    <button id="homeButton">Check In Your Child</button>
                </Link>
            </Homestyle>
        );
    }
}

export default Home;