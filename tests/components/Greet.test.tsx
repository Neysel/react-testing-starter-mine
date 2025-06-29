import { it, expect, describe } from 'vitest';
import {render, screen} from '@testing-library/react';
import Greet from '../../src/components/Greet';
import '@testing-library/jest-dom/vitest';

describe('greet', () => {
    it('should render Hello with the name when Name is provided', () => {
        render(<Greet name="Mosh"/>);

        // it returns h1, h2 and so on
        const heading = screen.getByRole('heading') ; 
        expect(heading)
    })
})