import rp from "request-promise";

const logIn = async () => {
  const options = {
    method: "POST",
    uri: `${process.env.API}/auth/login`,
    body: {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PWD
    }
  };
  try {
    const body = await rp(options);
    process.env.TOKEN = body.token;
    process.env.USERID = body.userId;
  } catch (err) {
    console.log(err);
  }
};

export default logIn;
