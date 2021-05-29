import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql';
import '../Launch/Style.css'

interface Props {
    data: LaunchInfoQuery;
}


const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "black" }}>
                <div className="row d-flex justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 LaunchDetailCntnr">
                                <p className="mainHead">{data.launch?.mission_name}</p>
                                <hr style={{ backgroundColor: "white", height: "2px", width: "100%" }} />
                                <h4 className="loacalHead">Details : </h4>
                                <p  className="loacalHead">{data.launch?.details}</p>
                                <h4 className="loacalHead" style={{marginBottom:"20px"}}>Launch Year : <span> {data.launch?.launch_year}</span> </h4>
                                <h5 style={{ color: "#5a67d8",marginBottom:"20px" }}>Mission Successed {data.launch?.launch_success === true ? <span style={{ color: "green" }}>YES</span> : <span style={{ color: "red" }}>NO</span>}</h5>
                                <h5 style={{ display: "flex", justifyContent: "space-between", color: "white" }} ><span>Rocket Name : {data.launch?.rocket?.rocket_name}</span>  <span>Rocket Type : {data.launch?.rocket?.rocket_type}</span></h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default LaunchDetails;