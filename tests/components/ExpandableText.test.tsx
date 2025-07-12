import {render, screen} from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import { version } from 'os';
import userEvent from '@testing-library/user-event';

describe('group', () => {
    it('should render short version of the huge text', () => {

        let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde labore ullam non, minima eaque modi eius? Aspernatur consequatur quisquam libero harum modi, sed eum officiis nobis blanditiis error, odit corporis ab nulla rem porro maiores obcaecati quasi iste velit, maxime aliquam in! Blanditiis obcaecati sit consequuntur deserunt accusantium quia hic! Molestiae, fugit doloremque. Rem rerum quis consequuntur laboriosam hic obcaecati corporis optio omnis praesentium, nihil, beatae vero, tempore quae debitis commodi facilis error nemo facere dolor atque saepe! Ipsam pariatur iure sapiente et consequuntur exercitationem, expedita asperiores quam facilis totam cum aliquam saepe quis fugit maiores hic beatae ab quas, error voluptatem repellendus? Debitis nulla, corrupti impedit libero ex, reiciendis doloremque cum modi, dignissimos numquam iure eum laboriosam consectetur voluptatem harum quis officiis. Eaque repellendus quam ducimus fuga quo vel vitae non, facere exercitationem excepturi harum veritatis consequatur molestias omnis temporibus esse mollitia corrupti! Eveniet laudantium tenetur alias delectus numquam quis vero voluptas atque placeat adipisci sint, aperiam vitae repellendus perspiciatis voluptate'

        render(<ExpandableText text={text}/>)

        let correct_text = screen.getByRole("article")
        expect(correct_text).not.toHaveTextContent(text);


        // another version
        // const text = 'a'.repeat(256);

        // const truncatedText = text.substring(0, 255) + '...';
        // expect(screen.getByText(truncatedText)).toBeInTheDocument();
        // const button = screen.getByRole('button');
        // expect(button).toBeInTheDocument();
        // expect(button).toHaveTextContent(/more/i)

    })
    it('should expand text when show more button is clicked', async () => {
        let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde labore ullam non, minima eaque modi eius? Aspernatur consequatur quisquam libero harum modi, sed eum officiis nobis blanditiis error, odit corporis ab nulla rem porro maiores obcaecati quasi iste velit, maxime aliquam in! Blanditiis obcaecati sit consequuntur deserunt accusantium quia hic! Molestiae, fugit doloremque. Rem rerum quis consequuntur laboriosam hic obcaecati corporis optio omnis praesentium, nihil, beatae vero, tempore quae debitis commodi facilis error nemo facere dolor atque saepe! Ipsam pariatur iure sapiente et consequuntur exercitationem, expedita asperiores quam facilis totam cum aliquam saepe quis fugit maiores hic beatae ab quas, error voluptatem repellendus? Debitis nulla, corrupti impedit libero ex, reiciendis doloremque cum modi, dignissimos numquam iure eum laboriosam consectetur voluptatem harum quis officiis. Eaque repellendus quam ducimus fuga quo vel vitae non, facere exercitationem excepturi harum veritatis consequatur molestias omnis temporibus esse mollitia corrupti! Eveniet laudantium tenetur alias delectus numquam quis vero voluptas atque placeat adipisci sint, aperiam vitae repellendus perspiciatis voluptate'


        render(<ExpandableText text={text}/>)

        const button = screen.getByRole('button');
        const user = userEvent.setup();
//   screen.debug();
        // this is important line
        await user.click(button);

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    })
     it('should truncate text when show less button is clicked', async () => {
        let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde labore ullam non, minima eaque modi eius? Aspernatur consequatur quisquam libero harum modi, sed eum officiis nobis blanditiis error, odit corporis ab nulla rem porro maiores obcaecati quasi iste velit, maxime aliquam in! Blanditiis obcaecati sit consequuntur deserunt accusantium quia hic! Molestiae, fugit doloremque. Rem rerum quis consequuntur laboriosam hic obcaecati corporis optio omnis praesentium, nihil, beatae vero, tempore quae debitis commodi facilis error nemo facere dolor atque saepe! Ipsam pariatur iure sapiente et consequuntur exercitationem, expedita asperiores quam facilis totam cum aliquam saepe quis fugit maiores hic beatae ab quas, error voluptatem repellendus? Debitis nulla, corrupti impedit libero ex, reiciendis doloremque cum modi, dignissimos numquam iure eum laboriosam consectetur voluptatem harum quis officiis. Eaque repellendus quam ducimus fuga quo vel vitae non, facere exercitationem excepturi harum veritatis consequatur molestias omnis temporibus esse mollitia corrupti! Eveniet laudantium tenetur alias delectus numquam quis vero voluptas atque placeat adipisci sint, aperiam vitae repellendus perspiciatis voluptate'
        const truncatedText = text.substring(0, 255) + '...';

        render(<ExpandableText text={text}/>)

        const button = screen.getByRole('button');
        const user = userEvent.setup();
//   screen.debug();
        // this is important line
        await user.click(button);
           await user.click(button);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/more/i);
    })
})