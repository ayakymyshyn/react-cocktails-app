import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { MediaCard } from '../Card/MediaCard';

describe('MediaCard', () => {
  afterEach(() => {
    cleanup();
  });
  const wrapper = render(
    <Router>
      <MediaCard id="11120" title="Cocktail" image="image" />
    </Router>,
  );
  it('should render without errors', () => {
    expect(wrapper).not.toBeNull();
  });
});
