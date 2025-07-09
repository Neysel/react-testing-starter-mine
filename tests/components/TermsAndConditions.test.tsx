import {render, screen} from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

describe('Terms and conditions work', () => {
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions/>);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions')

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled();
    })
    it('should enable the button when the checkbox is checked', () => {
        render(<TermsAndConditions/>);
        userEvent.setup();
    })
})