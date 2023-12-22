import Url from "../models/urlModels.js";
import { customAlphabet } from "nanoid";

export const urlShortner = async (req, res) => {
  const { originalUrl } = req.body;
  const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 6);

  function generateShortUrl() {
    return nanoid();
  }
  const shortUrl = generateShortUrl();

  const urlEntry = new Url({
    originalUrl,
    shortUrl,
  });

  await urlEntry.save();

  res.json({
    originalUrl,
    shortUrl,
  });
};
export const redirectUrl = async (req, res) => {
    const {shortUrl} = req.params;
   const response = await Url.findOne({shortUrl})
    if(response){
        res.redirect(response.originalUrl);
    }
    else{
        res.status(401).json({error:"URL not Found"})
    }
};
