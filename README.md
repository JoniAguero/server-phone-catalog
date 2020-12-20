# Server Phone Catalog :rocket:

Server of the project [Client Phone Catalog](https://github.com/JoniAguero/client_phone_catalog#client-phone-catalog-rocket)

API built with Node JS, express and mongoose. Mongo is used as a database, and a cluster has been created in [Mongo Atlas](https://www.mongodb.com/cloud/atlas).  
Images are uploaded to an AWS S3 Bucket. [JWT](https://jwt.io/) is used to manage authentication token.

CI/CD: [CircleCi](https://circleci.com/) & [Heroku](https://www.heroku.com/what)

APP Preview: [APP hosted by Netfily](https://client-phone-catalog.netlify.app/)  
API Preview: [API hosted by Heroku](https://api-phone-catalog.herokuapp.com/)
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the app.

```bash
npm install
cd /server
npm run dev
```

## Dependencies

```
  "aws-sdk": "^2.814.0",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "chalk": "^4.1.0",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.0",
    "express-validator": "^6.8.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.11.7",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "uuid": "^8.3.2"
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)