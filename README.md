# File Metadata Microservice

## Getting Started

* clone this repo
* `npm install`
* `node server.js`

## Usage

* Upload a file at `http://www.example.com/api/`
 
Returns JSON

```JSON
{
    "size": "200"
}
```

[DEMO](https://filemetadatahank.herokuapp.com/api)

#### Notes

Heroku only allows `./tmp` directory for writing.