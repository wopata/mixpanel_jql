import dotenv from 'dotenv'
import removeDuplicates from './delete_duplicates'

dotenv.config()

const mixpanel = {
  key: process.env.MIXPANEL_API_KEY,
  secret: process.env.MIXPANEL_API_SECRET,
  token: process.env.MIXPANEL_API_TOKEN
};

const dryRun = false;

removeDuplicates(dryRun, mixpanel)
