import request from "request-promise-native";
import cheerio from "cheerio";

const fetchMangas = async () => {
  const res = await request.get("https://jaiminisbox.com/reader/read/one-piece-2/en/0/965/page/1");
  const $ = cheerio.load(res.response.body);
  const date = new Date();
  console.log(`Searched for One Piece at ${date.toLocaleString("en-US")}, nothing there yet.`);
  console.log($("#page").html());
};

export default fetchMangas;