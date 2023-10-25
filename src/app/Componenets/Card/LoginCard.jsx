import React from "react";
import Card from "../../../../pages/Admin/Layouts/Card";

function LoginCard(props) {
  return (
    <div className="flex bg-white min-h-screen flex-col">
      <Card>{props.children}</Card>
    </div>
  );
}

export default LoginCard;
