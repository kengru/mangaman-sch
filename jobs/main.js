import rp from "request-promise";
import cheerio from "cheerio";

const fetchMangas = () => {
  const options = {
    uri: "https://jaiminisbox.com/reader/read/one-piece-2/en/0/966/page/1",
    transform: body => cheerio.load(body)
  };
  rp.get(options)
    .then($ => $("#container > div.sorry").html())
    .catch(err => console.log(err));
  const date = new Date();
  console.log(
    `Searched for One Piece at ${date.toLocaleString(
      "en-US"
    )}, nothing there yet.`
  );
  // console.log(res);
  // console.log($("#container > div.sorry").html());
};

export default fetchMangas;
