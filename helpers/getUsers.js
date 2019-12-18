import rp from "request-promise";

const getUsers = async () => {
  const options = {
    method: "GET",
    uri: `${process.env.API}/users/all`,
    headers: {
      "Authorization": `Bearer ${process.env.TOKEN}`
    },
    json: true
  };

  try {
    const body = await rp(options);
    return body.users;
  } catch (err) {
    console.log(err);
  }
};

export default getUsers;
