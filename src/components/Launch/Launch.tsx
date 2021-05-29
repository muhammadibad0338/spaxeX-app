import React from "react"
import { LaunchesQuery } from "../../generated/graphql";
import { Link } from "react-router-dom"
import './Style.css'

interface Props {
    data: LaunchesQuery
}

//const Launch: React.FC<Props> = ({data}) =>{
const Launch: React.FC<Props> = ({ data }) => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "black" }}>
            <div className="row d-flex justify-content-center">
                {!!data.launches && data.launches.map(
                    (launch, i) => !!launch && (
                        <div key={i} className="col-lg-7 col-md-7 col-sm-12 LaunchCntnr">
                            <h5 style={{ display: "flex", justifyContent: "space-between", color: "white" }} ><span>Flight No : {launch.flight_number}</span>  <span>{launch.launch_year}</span></h5>
                            <h1 style={{ color: "white" }}> {launch.mission_name}</h1>
                            <h5 style={{ color: "#5a67d8" }}>Mission Successed {launch.launch_success === true ? <span style={{ color: "green" }}>YES</span> : <span style={{ color: "red" }}>NO</span>}</h5>
                            <div className="d-flex justify-content-end">
                                <button  className="LaunchBtn"><Link to={`/launch/${launch.flight_number}`}>Launch Details</Link></button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
};

export default Launch;