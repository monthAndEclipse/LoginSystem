when sending a post request with the body to the backend where uses express.

we should sepecify the header to tell the backend what kind of data that we are sending.

useless you will get an empty request body or the data become an object's key.

````
'Content-Type': 'application/json' >>  express.json() middleware
app.use(express.json());

'Content-Type': 'application/x-www-form-urlencoded' >> express.urlencoded() middleware
app.use(express.urlencoded({extended:true}));
````