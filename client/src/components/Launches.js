import React from "react";
import { useQuery, gql } from '@apollo/client';

import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
    query launchesQuery {
        launches{
            flight_number,
            mission_name,
            launch_date_local,
            launch_success
        }
    }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if(loading) return <h4>Loading ...</h4>
    if(error) console.log(error);

    return(
        <>
            <h2 style={{margin:"20px auto"}}>Launches</h2>
            <MissionKey />
            {data.launches.map(launch => {
                return <LaunchItem key={launch.flight_number} launch={launch} />
            })}
        </>
    )
}

export default Launches;