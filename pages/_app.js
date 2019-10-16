import React from 'react';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
// import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

const MyApp = ({ Component, pageProps, store }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    // we can dispatch from here too
    ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
    return { pageProps };
};

export default withRedux(makeStore)(MyApp);
