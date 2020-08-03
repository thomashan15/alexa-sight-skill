const aws = require('aws-sdk')

const s3 = new aws.S3({
    region: 'us-east-1'
});

let userData = {
    "user_id": "123456789",
    "data": {
        "isp": "AT&T U-verse",
        "bandwidth": "80mbps",
        "download_speed_mbps": "75mbps",
        "upload_speed_mbps": "10mbps",
        "usage_per_device": [
            {
                "name": "Yuki's laptop",
                "usage": "15mbps"
            },
            {
                "name": "Thomas's PC",
                "usage": "20mbps"
            }
        ],
        "known_devices": [
            {
                "name": "Yuki's laptop",
                "mac": "01:01:01:01:01:01"
            },
            {
                "name": "Thomas's PC",
                "mac": "01:01:01:01:01:01"
            }
        ],
        "latency": {
            "internet_latency_avg_ms": "30ms",
            "latency_server": "SEA",
            "latency_data": [
                {
                    "time": 1596222785856,
                    "latency": "150ms"
                },
                {
                    "time": 1596222775856,
                    "latency": "220ms"
                }
            ]
        }
    }
};

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
