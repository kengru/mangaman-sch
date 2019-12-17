import rp from "request-promise";

const getManga = async id => {
  const options = {
    method: "GET",
    uri: `${process.env.API}/mangas/${id}`,
    headers: {
      "Authorization": `Bearer ${process.env.TOKEN}`
    }
  };

  try {
    const body = await rp(options);
    return body.manga;
  } catch (err) {
    console.log(err);
  }
};

export default getManga;
