import rp from "request-promise";
import cheerio from "cheerio";

import login from "../helpers/login";
import getManga from "../helpers/getManga";

const mainFlow = async () => {
  await login();
  await ufJaiminis("5df936b4efe951237c5af95b");
}

const ufJaiminis = async id => {
  try {
    const manga = await getManga(id);
    const options = {
      method: "GET",
      uri: `https://jaiminisbox.com/reader/read/${manga.sourceId}/en/0/${manga.lastChapter}/page/1`,
      transform: body => cheerio.load(body)
    };
    const $ = await rp(options);
    const date = new Date();
    console.log(
      `Searched for ${body.title} at ${date.toLocaleString(
        "en-US"
      )}, there is a new chapter.`
    );
    console.log(`at https://jaiminisbox.com/reader/read/${manga.sourceId}/en/0/${manga.lastChapter}/page/1`)
  } catch (err) {
    console.log("No new episode.");
    console.log(err);
  }
};

export default mainFlow;
