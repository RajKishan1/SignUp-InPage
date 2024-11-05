// import React from "react";

// const InputVerifier = ({ username, password, mail }) => {
//   if (mail.includes("@")) {
//     console.log("email is valid");
//   } else {
//     return alert("your email should have @");
//   }
// };

// export default InputVerifier;
import React, { useEffect } from "react";

const InputVerifier = ({ username, password, mail }) => {
  useEffect(() => {
    if (mail) {
      if (mail.includes("@")) {
        console.log("Email is valid");
      } else {
        alert("Your email should contain '@'");
      }
    }
  }, [mail]); // This effect runs whenever 'mail' changes

  return (
    <div>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <p>Email: {mail}</p>
    </div>
  );
};

export default InputVerifier;
