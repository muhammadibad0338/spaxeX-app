import  gql from 'graphql-tag';

export const QUERY_LAUNCH = gql`
query launches{
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;