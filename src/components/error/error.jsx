import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ErrorDivLabel, ErrorDiv } from './error.styles';
const Error = ({ message }) => {
  return (
    <ErrorDiv>
      <ErrorDivLabel>
        {message}
      </ErrorDivLabel>
    </ErrorDiv>
  )
}

export default Error;