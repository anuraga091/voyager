## About the Project
Replica of https://voyager.online/txns[https://voyager.online/txns] with React and tailwind

## How to setup
1. Clone this repo
2. Go inside the folder and do `npm install`
3. Once done with npm install do `npm start` to run the server. Make sure that backend server should also run parallelly

### Features:
1. Custom Infinite Scroll
2. Tooltip
3. Replica with almost same UI
4. Responsive
5. When the user clicks on a transaction from screen 1️⃣, he should be redirected to 2nd page[https://voyager.online/tx/0x30b0013be9343eefa91333ec2ace938a2eef4955102ad2b09ceb030cc6f706e] if and only if
    1. the transaction was of type `INVOKE`
    2. the transaction version was `1`
    3. the transaction was a success
    4. we can skip implementing this page for any other type of transaction

It has frontend and backend
