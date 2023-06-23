import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_CUSTOMER_QUERY } from "../../api/gql/queries/product.query";

const Profile:React.FC = () => {
    const { userId } = useParams();
    const { loading, error, data } = useQuery(GET_CUSTOMER_QUERY, {
      variables: { customerId: userId },
    });
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      console.error("Error fetching user data:", error);
      return <div>Error</div>;
    }
  
    const user = data?.getCustomer;
  
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {user.firstName} {user.lastName}</p>
        <p>Email: {user.email}</p>
      </div>
    );
};

export default Profile;
