import React from 'react';
import './rate.css';

export default class Rate extends React.Component {
    render() {
        return (
            <div className="ratePage">
                <header className="rate-header-box">
                    <div className="rate-header">
                        <h3>gelp Write a Review</h3>
                    </div>
                </header>
                <section className="rate-section">
                    <div className="rate-title">
                        <h2>Place to rate</h2>
                    </div>
                    <form id="review-form">
                        <div className="review-section">
                            <p>Select your ratings</p>
                            <div className="quantity-rating">
                                <label for="quantity-rating">Quantity</label>
                                <input type="radio" name="quantity" value="1" className="quanity-radio"/>
                                <label for="quantity">
                                    <span>1 Star</span>
                                </label>
                                <input type="radio" name="quantity" value="2" className="quanity-radio"/>
                                <label for="quantity">
                                    <span>2 Star</span>
                                </label>
                                <input type="radio" name="quantity" value="3" className="quanity-radio"/>
                                <label for="quantity">
                                    <span>3 Star</span>
                                </label>
                                <input type="radio" name="quantity" value="4" className="quanity-radio"/>
                                <label for="quantity">
                                    <span>4 Star</span>
                                </label>
                                <input type="radio" name="quantity" value="5" className="quanity-radio"/>
                                <label for="quantity">
                                    <span>5 Star</span>
                                </label>
                            </div>
                            <div className="quality-rating">
                                <label for="quality-rating">Quality</label>
                                <input type="radio" name="quality" value="1" className="quality-radio"/>
                                <label for="quality">
                                    <span>1 Star</span>
                                </label>
                                <input type="radio" name="quality" value="2" className="quality-radio"/>
                                <label for="quality">
                                    <span>2 Star</span>
                                </label>
                                <input type="radio" name="quality" value="3" className="quality-radio"/>
                                <label for="quantity">
                                    <span>3 Star</span>
                                </label>
                                <input type="radio" name="quality" value="4" className="quality-radio"/>
                                <label for="quality">
                                    <span>4 Star</span>
                                </label>
                                <input type="radio" name="quality" value="5" className="quality-radio"/>
                                <label for="quality">
                                    <span>5 Star</span>
                                </label>
                            </div>
                            <div className="price-rating">
                                <label for="price-rating">Price</label>
                                <input type="radio" name="price" value="1" className="price-radio"/>
                                <label for="price">
                                    <span>$</span>
                                </label>
                                <input type="radio" name="price" value="2" className="price-radio"/>
                                <label for="price">
                                    <span>$$</span>
                                </label>
                                <input type="radio" name="price" value="3" className="price-radio"/>
                                <label for="price">
                                    <span>$$$</span>
                                </label>
                                <input type="radio" name="price" value="4" className="price-radio"/>
                                <label for="quality">
                                    <span>$$$$</span>
                                </label>
                            </div>
                        </div>
                        <div className="review-writing-section">
                            <label for="review-summary">Review summary</label>
                            <textarea name="dream-summary" rows="15" cols="70"></textarea>
                        </div>
                        <button type="submit">Post Review</button>
                    </form>
                </section>
            </div>
        );
    }
}
