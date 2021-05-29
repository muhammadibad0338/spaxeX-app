import gql from 'graphql-tag'

export const QUERY_LAUNCH_DETAILS = gql`
query LaunchInfo($id:String){
    launch(id:$id){
      flight_number
      mission_name
      launch_year
      launch_success
      details
      rocket{
        rocket_name
        rocket_type
      }
      links {
        video_link
      }
      
    }
}`;