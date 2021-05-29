import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LoadingDiv } from './loading.styles';
import Loader from 'react-loader-spinner'

const Loading = () => {
  const appLoading = useSelector(state => state.app.SHOW_LOADING);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(appLoading);
  }, [appLoading]);

  return (
    <>
      {showLoading &&
        <LoadingDiv>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}

          />
        </LoadingDiv>
      }
    </>
  )
}

export default Loading;