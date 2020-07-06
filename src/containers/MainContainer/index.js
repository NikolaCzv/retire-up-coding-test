import React, { useState } from 'react';
import { Range } from 'rc-slider';
import {
  data,
  firstYear,
  lastYear
} from './data';

import { 
  Container,
  FilterWrapper,
  FilterHeader,
  YearHeader,
  Table,
  TableHeader,
  TableElement,
  TableRow,
  THead,
  TBody
} from './style';

function MainContainer() {
  const [range, setRange] = useState([firstYear, lastYear]);

  const renderData = () => {
    const filteredData = data.filter(({ year }) => year >= range[0] && year <= range[1]);

    return filteredData.map(({ year, totalReturn, cumulativeReturn }) => {
      return (
        <TBody key={year}>
          <TableRow>
            <TableElement>{year}</TableElement>
            <TableElement>{totalReturn}</TableElement>
            <TableElement>{cumulativeReturn}</TableElement>
          </TableRow>
        </TBody>
      )
    });
  };

  const onSliderChange = value => setRange(value);

  return (
      <Container>
        <FilterWrapper>
          <FilterHeader>Filter by Year</FilterHeader>
          <YearHeader>Min: {range[0]}</YearHeader>
          <YearHeader>Max: {range[1]}</YearHeader>
          <Range 
              defaultValue={[firstYear, lastYear]}
              min={firstYear}
              max={lastYear}
              onChange={onSliderChange}
          />
        </FilterWrapper>
        <Table>
          <THead>
            <TableRow>
              <TableHeader>Year</TableHeader>
              <TableHeader>Total Return</TableHeader>
              <TableHeader>Cumulative Returns</TableHeader>
            </TableRow>
          </THead>
          {renderData()}
        </Table>
      </Container>
  );
};

export default MainContainer;
