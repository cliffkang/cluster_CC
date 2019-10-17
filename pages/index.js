import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/exampleActions';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Table from '../components/Table/Table';

const Index = props => {
    const handleSubmit = e => {
        e.preventDefault();
        props.getPosts();
    };
    return (
        <div>
            <NavigationBar />
            <Table />
            <div>Prop from Redux {JSON.stringify(props)}</div>
            <button onClick={handleSubmit}>Load</button>
            <div>Prop from getInitialProps {props.custom}</div>
        </div>
    );
};

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
    await store.dispatch(getPosts());
    return { custom: 'custom' };
};

export default connect(
    state => state,
    { getPosts }
)(Index);
