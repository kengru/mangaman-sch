import rp from "request-promise";
import cheerio from "cheerio";

import login from "../helpers/login";
import getUsers from "../helpers/getUsers";
import getManga from "../helpers/getManga";

const mainFlow = async () => {
  await login();
  const users = await users()
  await ufJaiminis("5df936b4efe951237c5af95b");
}

const allUsers = async () => {
  try {
    const users = await getUsers
  }
}

const ufJaiminis = async id => {
  try {
    const manga = await getManga(id);
    const uri = `https://jaiminisbox.com/reader/read/${manga.sourceId}/en/0/${manga.lastChapter}/page/1`;
    const options = {
      method: "GET",
      uri: uri,
      transform: body => cheerio.load(body)
    };
    const $ = await rp(options);
    const date = new Date();
    console.log(
      `Searched for ${manga.title} at ${date.toLocaleString(
        "en-US"
      )}, there is a new chapter.`
    );
    return uri;
  } catch (err) {
    console.log("No new episode.");
    console.log(err);
  }
};

export default mainFlow;
