import { InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../presentational/Header';
import {
  PageComponent,
  FooterComponent,
} from '../../presentational/Page/styled';
import { SelectButton } from './styled';
import {
  FormControl,
  Select,
  MenuItem,
} from '../../presentational/Select/styled';
import Body from '../../presentational/Page/Body';

const ParkSelect = () => {
  const [selectedPark, setSelectedPark] = useState('');

  const handleChange = (event) => {
    setSelectedPark(event.target.value);
  };

  return (
    <PageComponent>
      <Header />
      <Body>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Select a Park</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange}
          >
            <MenuItem value={'baldrock'}>Bald Rock</MenuItem>
            <MenuItem value={'crowdybay'}>Crowdy Bay</MenuItem>
            <MenuItem value={'kooraban'}>Kooraban</MenuItem>
          </Select>
        </FormControl>
      </Body>
      <FooterComponent>
        <SelectButton disabled={selectedPark === ''}>SELECT</SelectButton>
      </FooterComponent>
    </PageComponent>
  );
};

export default ParkSelect;
