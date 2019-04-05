import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <h1>Review Your Feedback</h1>
                        <p>Feelings: 5</p>
                        <p>Understanding: 5</p>
                        <p>Support: 5</p>
                        <p>Comments: I love this stuff!</p>
                        <br />
                        <button>Incomplete</button>
                </footer>
                <br />
            </div>
        );
    }
}

export default Footer;