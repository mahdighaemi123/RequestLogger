# RequestLogger
a simple tool for api debuging

## setup
- clone reposetory
```
git clone https://github.com/mahdighaemi123/RequestLogger.git
```

- install require packages
```
npm install
```
- edit config.js as you want
```
const port = 5002
const default_response = {
    status: true,
    message: "ok :)"
}
```

- run project
```
npm start
```

## test and result
#### send test request with curl:
```
curl --location '127.0.0.1:5002?username=zahra' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'password=12345678'
```
#### terminal log will be this:
```
new request ->
[POST] /?username=zahra
body:
┌──────────┬────────────┐
│ (index)  │ Values     │
├──────────┼────────────┤
│ password │ '12345678' │
└──────────┴────────────┘
query:
┌──────────┬─────────┐
│ (index)  │ Values  │
├──────────┼─────────┤
│ username │ 'zahra' │
└──────────┴─────────┘

```