const aws = require('aws-sdk')

const s3 = new aws.S3({
    region: 'us-east-1'
});

exports.downloadFile = async () => {
    return new Promise((resolve, reject) => {
        s3.getObject({
            Bucket: 'user-internet-data',
            Key: 'mocked_user_data.json',
        }, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(JSON.parse(data.Body.toString('utf-8')));
        });
    });
}
