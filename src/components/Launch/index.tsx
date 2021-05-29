import React from 'react';
import {useLaunchesQuery} from "../../generated/graphql";
import Launch from './Launch';

const LaunchContainer =()=>{
    const { data,error,loading} = useLaunchesQuery();
    
    if (loading){
        return <div>Data is loading</div>
    }

    if(error || !data){
        return <div>Something went wrong</div>
    }
    return <Launch data={data}/>
}

export default LaunchContainer;