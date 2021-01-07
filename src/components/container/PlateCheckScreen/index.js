import React, { useState } from 'react';
import Header from '../../presentational/Header';
import Body from '../../presentational/Page/Body';
import {
  PageComponent,
  FooterComponent,
} from '../../presentational/Page/styled';
import {
  PlateInput,
  PlatContainer,
  PlateState,
  StateButton,
  PlateSearch,
  SearchButton,
  SearchIcon,
  ParkName,
} from './styled';

const PlateCheckScreen = () => {
  const [selectedState, setSelectedState] = useState('');
  const [plateText, setPlateText] = useState('');

  const handlePlateTextChange = (e) => {
    console.log(plateText);
    setPlateText(e.target.value);
  };

  const handleStateSelected = (state) => {
    setSelectedState(state);
  };

  const handlePlateSearch = () => {
    console.log(selectedState, plateText);
  };

  const handleSelectedRender = (value) =>
    value === selectedState ? 'contained' : 'outlined';

  return (
    <PageComponent>
      <Header />
      <Body noFooter>
        <div>
          <ParkName>
            Blue MountainBlue MountainBlue MountainBlue MountainBlue
            MountainBlue MountainBlue MountainBlue MountainBlue
            MountainsssssssssBlue Mountains
          </ParkName>
          <PlatContainer>
            <PlateState>{selectedState}</PlateState>
            <PlateInput value={plateText} onChange={handlePlateTextChange} />
            <PlateSearch>
              <SearchButton
                disabled={plateText === '' || selectedState === ''}
                onClick={handlePlateSearch}
              >
                <SearchIcon />
              </SearchButton>
            </PlateSearch>
          </PlatContainer>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '20px 0',
          }}
        >
          <StateButton
            variant={handleSelectedRender('NSW')}
            onClick={() => handleStateSelected('NSW')}
            color="primary"
          >
            NSW
          </StateButton>
          <StateButton
            variant={handleSelectedRender('VIC')}
            onClick={() => handleStateSelected('VIC')}
            color="primary"
          >
            VIC
          </StateButton>
          <StateButton
            variant={handleSelectedRender('QLD')}
            onClick={() => handleStateSelected('QLD')}
            color="primary"
          >
            QLD
          </StateButton>
          <StateButton
            variant={handleSelectedRender('TAS')}
            onClick={() => handleStateSelected('TAS')}
            color="primary"
          >
            TAS
          </StateButton>
          <StateButton
            variant={handleSelectedRender('SA')}
            onClick={() => handleStateSelected('SA')}
            color="primary"
          >
            SA
          </StateButton>
          <StateButton
            variant={handleSelectedRender('WA')}
            onClick={() => handleStateSelected('WA')}
            color="primary"
          >
            WA
          </StateButton>
          <StateButton
            variant={handleSelectedRender('NT')}
            onClick={() => handleStateSelected('NT')}
            color="primary"
          >
            NT
          </StateButton>
        </div>
      </Body>
    </PageComponent>
  );
};

export default PlateCheckScreen;
