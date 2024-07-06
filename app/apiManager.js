const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const post = ({ path, requestBody }) => {
    console.log("JSON.stringify(requestBody.email, requestBody.password)");
    console.log("pw " + requestBody);
    
  return fetch(`${apiUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: requestBody,
  });
};

export const get = ({ path }) => {
  return fetch(`${apiUrl}${path}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};
