import {render, screen} from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
    it('should render nothing if given an empty array', () => {
        const result = <ProductImageGallery imageUrls={[]}/>
        expect(result).toBeEmptyDOMElement
    })
        it('should render items list', () => {

        const imageURLs = ['url1', 'url2']
        render(<ProductImageGallery imageUrls={imageURLs}/>)
        const images = screen.getAllByRole('img');
        // const result = 

        // expect(result).not.toBeEmptyDOMElement
        expect(images).toHaveLength(2);
    })
})