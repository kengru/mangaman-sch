import rp from "request-promise";
import cheerio from "cheerio";

import login from "../helpers/login";

const mainFlow = async () => {

}

const fetchJaiminis = id => {
  const options = {
    uri: "https://jaiminisbox.com/reader/read/one-piece-2/en/0/965/page/1",
    transform: body => cheerio.load(body)
  };
  rp.get(options)
    .then($ => {
      console.log("New episode.");
    })
    .catch(err => {
      console.log("No new episode.");
    });
  const date = new Date();
  console.log(
    `Searched for One Piece at ${date.toLocaleString(
      "en-US"
    )}, nothing there yet.`
  );
  // console.log(res);
  // console.log($("#container > div.sorry").html());
};

export default mainFlow;
