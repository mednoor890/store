import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMER_QUERY } from "../../api/gql/queries/product.query";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Initial = styled.div`
  font-size: 80px;
  color: #000;
`;
const ProfileImage = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
  object-fit: cover; /* Maintain aspect ratio and fill the container */
`;

const Profile: React.FC = () => {
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
  const firstNameInitial = user.firstName.charAt(0);
  return (
    <Container>
      <h2> Profile</h2>
      <Avatar>
        {user.image ? (
          <ProfileImage src={user.image} alt="Profile" />
        ) : (
          <Initial>{firstNameInitial}</Initial>
        )}
      </Avatar>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
    </Container>
  );
};

export default Profile;
