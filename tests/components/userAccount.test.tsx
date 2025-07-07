// import { it, expect, describe } from 'vitest';
// we have globals in vitest.config.ts
import { User } from "../../src/entities";
import {render, screen} from '@testing-library/react';
import Greet from '../../src/components/Greet';
import '@testing-library/jest-dom/vitest';
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
    it('should render user name', () => {

        const user: User = {id:1, name:'Mosh'};


        render(<UserAccount user={user}/>  );
  // use getByText
  // queryByRole
  // expect().not.toBeInTheDocument

        // it returns h1, h2 and so on
        screen.debug();
        // const heading = screen.getByText('Yasha') ; 
        // expect(heading).toBeInTheDocument();
        // expect(heading).toHaveTextContent(/mosh/i);
        screen.getByText(user.name);

        expect(screen.getByText(user.name)).toBeInTheDocument()
    })
        it('should not render button if user is not admin', () => {

        const user: User = {id:1, name:'Mosh'};
        render(<UserAccount user={user}/>  );

        // it returns h1, h2 and so on
        const button = screen.queryByRole('button') ; 
        expect(button).not.toBeInTheDocument();
    })
    it('more correct test', () => {
        render(<Greet />);

        // it returns h1, h2 and so on
        const button = screen.getByRole('button') ; 
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    })
})