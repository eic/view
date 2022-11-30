import React, { useContext } from 'react';

import { JSROOTContext } from '@ndmspc/react-jsroot'

const LoadingStatus = () => {
    const status = useContext(JSROOTContext)
    return (
        <div>
            Loading status: <b>{status}</b>
        </div>
    );
}

export default LoadingStatus;