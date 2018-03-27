## Usage

1. `cd server`
2. `npm install`
3. Run `npm start`. The server should be running on port 3000.
4. Then, open a new terminal and navigate to `./client`. Open `index.html` in a browser and click on the test button. You should see text "bar" inserted into the div.

## Explanation

- `./server` is where your backend lives. You should not have any view-related html or frontend js code in here. Only server side code such as express routes, and things such as database queries should live here.

- `./client` is where your frontend lives. This is where your view-related html and frontend js live. To get data from the backend, you make requests using `fetch` or `XMLHttpRequest` or jQuery's get function to the backend. A lot of your business logic can also be handled on this side, but always keep sensitive logic on the backend (such as handling storing username/passwords in a database).
