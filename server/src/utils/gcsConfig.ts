import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: "your-project-id",
  keyFilename: "path-to-your-service-account-key.json",
});

const bucketName = "your-bucket-name";

module.exports = {
  storage,
  bucketName,
};
