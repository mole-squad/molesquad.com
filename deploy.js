const S3 = require('S3');

const { AWS_ID, AWS_SECRET, S3_BUCKET } = process.env;

const client = S3.createClient({
  s3Options: {
    accessKeyId: AWS_ID,
    secretAccessKey: AWS_SECRET,
    region: 'us-east-2'
  }
});

const uploader = client.uploadDir({
  localDir: 'dist',
  // deleteRemoved: true,
  s3Params: {
    Bucket: S3_BUCKET
  }
})

uploader.on('error', (err) => {
  console.error("unable to sync:", err.stack);
});

uploader.on('progress', () => {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', () => {
  console.log("done uploading");
});