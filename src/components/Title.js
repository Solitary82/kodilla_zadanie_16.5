import React from 'react';
import PropTypes from 'prop-types';

const Title = props => <div><h1>{props.title}</h1><h3>Liczba zadań: {props.lenght}</h3></div>;

Title.propTypes = {
	title: PropTypes.string,
	lenght: PropTypes.number
};


export default Title;
