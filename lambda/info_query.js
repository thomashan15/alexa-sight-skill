const aws = require('aws-sdk')

const s3 = new aws.S3({
    region: 'us-east-1'
});

let userData = undefined;

exports.getUserData = async () => {
    return new Promise((resolve, reject) => {
        if (userData) {
            return resolve(userData);
        }

        s3.getObject({
            Bucket: 'user-internet-data',
            Key: 'mocked_user_data.json',
        }, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            userData = JSON.parse(data.Body.toString('utf-8'));
            resolve(userData);
        });
    });
}
