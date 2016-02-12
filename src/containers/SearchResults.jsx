import React,{PropTypes} from 'react';
import Content from './Content.jsx';
import { connector } from '../tools';

const SearchResults = () =>{
    return (<Content>
    </Content>);
};


SearchResults.propTypes ={
    values: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    values: state.changeDropdown
});

const actionList = {PropTypes};

export default connector(mapStateToProps, actionList)(SearchResults);
//export default (SearchResults);