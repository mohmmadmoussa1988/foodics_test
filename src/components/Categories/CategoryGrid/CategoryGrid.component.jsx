import React, { useState, useEffect } from 'react';
import { CategoryGridStyle } from './CategoryGrid.styles';

const CategoryGrid = (data) => {
    return (
        <CategoryGridStyle>{data.data.name}</CategoryGridStyle>
    )
}

export default CategoryGrid;