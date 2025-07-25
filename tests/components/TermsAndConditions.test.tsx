import {render, screen} from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

describe('Terms and conditions work', () => {

    const renderComponent = () => {
            render(<TermsAndConditions/>); 

            return {
                heading: screen.getByRole('heading'),
                checkbox: screen.getByRole('checkbox'),
                button: screen.getByRole('button')
            }
        
    }

    it('should render with correct text and initial state', () => {
        const {heading, checkbox, button} = renderComponent();
        // render(<TermsAndConditions/>);

        // const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions')

        // const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        // const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled();
    })
    it('should enable the button when the checkbox is checked', async () => {
        // Arrange 
        render(<TermsAndConditions/>);

        // Act 
        const checkbox = screen.getByRole('checkbox');
        const user = userEvent.setup();
        await user.click(checkbox);

        // Assert
        expect(screen.getByRole('button')).toBeEnabled();
        // userEvent.setup();
    })
})