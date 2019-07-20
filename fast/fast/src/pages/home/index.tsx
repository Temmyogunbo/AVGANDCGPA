import React from "react";
import { ConnectedSignupForm } from "../../components/Form";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="col-md-4 mb-3 col-xg-4 col-xl-6">
        <h1>
          One - click
          <br /> Signup Login & pay
        </h1>
        <h3>Everywhere with a Fast button</h3>

        <ConnectedSignupForm />
      </div>
    </div>
  );
};

export default HomePage;
