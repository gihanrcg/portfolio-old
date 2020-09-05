import React, { Component } from 'react';
import ImageGallery from '../gallery/ImageGallery';

class GallerySection extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="gallery">
                <div className="w-100">
                    <h2 className="mb-5">Gallery</h2>
                    
                        <ImageGallery />
                    
                </div>
            </section>
        );
    }
}

export default GallerySection;