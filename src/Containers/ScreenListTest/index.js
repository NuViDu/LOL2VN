import React from 'react';
import Header from './Header';
import ListTest from './ListTest';
class ScreenTest extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <br/><br/><br/><br/>
                <ListTest/>
            </div>
        )
    }
}
export default ScreenTest;