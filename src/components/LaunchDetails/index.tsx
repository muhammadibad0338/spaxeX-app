import React from 'react';
import {useLaunchInfoQuery} from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';

const LaunchDetailsContainer = (props:any)=>{
    const id = props.match.params.id;
    const {data,error,loading} = useLaunchInfoQuery({variables:{id:id}});
    if (loading) {
        return  <div>
                    <h1>loading</h1>
                </div>
    }
    if(error){
        return<div>there is Error</div>
    }

    if(!data){
        return<div>Please select a mission for its details</div>
    }

    return (<LaunchDetails data={data} />);
}

export default LaunchDetailsContainer;