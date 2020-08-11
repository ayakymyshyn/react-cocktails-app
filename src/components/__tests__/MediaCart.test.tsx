import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MediaCard } from '../Card/MediaCard';
import { render, cleanup } from '@testing-library/react';

describe('MediaCard', () => {
    afterEach(() => {
        cleanup();
    })
    const wrapper = render(
        <Router>
            <MediaCard id='11120' title='Cocktail' image='image' />
        </Router>
    );
    it('should render without errors', () => {
        expect(wrapper).not.toBeNull();
    })
});