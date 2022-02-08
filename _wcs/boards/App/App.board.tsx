import React from 'react';
import { createDemo } from '@wixc3/react-board';
import App from '../../../src/App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
});
