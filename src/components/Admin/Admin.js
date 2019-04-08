import React, { Component } from 'react';
import axios from 'axios';
// import './Admin.css';
// import { Moment } from 'react-moment';

const moment = require('moment');
class Admin extends Component {

    state = {
        feedbackList: [],
    }

    // function to get all feedback from the database

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/admin',
        })
            .then((response) => {
                console.log('Just the feedback data', response.data);
                this.setState({
                    feedbackList: response.data
                });
            })
            .catch((error) => {
                console.log('Error getting feedback data', error);
                alert('Sorry, could not get all submitted feedback. Try again later.');
            })
    }

    componentDidMount() {
        console.log('in componentDidMount...')
        this.getFeedback();
    }

    render() {
        return (
            <table align="center">
                <thead>
                    <tr>
                        <th>
                            Feeling
                        </th>
                        <th>
                            Comprehension
                        </th>
                        <th>
                            Support
                        </th>
                        <th>
                            Comments
                        </th>
                        <th>
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.feedbackList.map(feedback =>

                        <tr key={feedback.id}>
                            <td>
                                {feedback.feeling}
                            </td>
                            <td>
                                {feedback.understanding}
                            </td>
                            <td>
                                {feedback.support}
                            </td>
                            <td>
                                {feedback.comments}
                            </td>
                            <td>
                                {moment(feedback.date).format('YYYY-MM-DD')}
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        )
    }
}

export default Admin;
