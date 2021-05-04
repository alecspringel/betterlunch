import React from 'react';
import styled from 'styled-components';
import MenuItem from '../general/MenuItem';
import KormaImg from '../../menuPhotos/chicken-korma.jpg';
import ChickenImg from '../../menuPhotos/chicken-large.jpg';
import CookieImg from '../../menuPhotos/cookie-sandwich.jpg';
import SaladImg from '../../menuPhotos/garden-salad.jpg';
import SphagettiImg from '../../menuPhotos/sphagetti-meatballs.jpg';
import BistroImg from '../../menuPhotos/yogurt-fruit-bistro.jpg';
import Button from '../general/Button';

const Menu = () => (
  <section className="text-center padded-section">
    <h4 className="text-orange">OPTIONS FOR EVERYONE</h4>
    <p className="p-large margin-t10">
      BetterLunch offers a variety of options for all appetites, with new
      choices each month
    </p>
    <MenuWrapper className="flex-row">
      <MenuItem
        title="Simple"
        img={SphagettiImg}
        description="Simple options that anyone will enjoy"
      />
      <MenuItem
        title="Fan Favorites"
        img={ChickenImg}
        description="Popular meals for children that get ordered often"
      />
      <MenuItem
        title="Something New"
        img={KormaImg}
        description="Adventerous dishes and new options each month"
      />
      <MenuItem
        title="Vegetarian &amp; Gluten-free"
        img={SaladImg}
        description="Options for dietary restrictions &amp; intolerances"
      />
      <MenuItem
        title="Shapes &amp; Sizes"
        img={BistroImg}
        description="A variety of sizes for big and small appetites"
      />
      <MenuItem
        title="Sweets &amp; Sides"
        img={CookieImg}
        description="Snacks and desserts to go with each meal"
      />
    </MenuWrapper>
    <Button className="primary-btn margin-t20 wide-btn" style={{ margin: 'auto' }}>
      Our Menu
    </Button>
  </section>
);

export default Menu;

const MenuWrapper = styled.div`
  flex-wrap: wrap;
  margin: 20px auto;
  max-width: 1000px;
  justify-content: center;
  padding: 20px 0;
  @media (max-width: 45rem) {
    flex-wrap: nowrap;
    justify-content: normal;
    overflow-x: scroll;
    max-width: none;
  }
`;
