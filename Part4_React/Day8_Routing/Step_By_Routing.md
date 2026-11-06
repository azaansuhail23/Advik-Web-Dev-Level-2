1. Open the react folder into the **integrated terminal**
2. Open the **terminal & run** this below command to install react-router routing library.
3. ```JavaScript
   npm install react-router
   ```
4. Open the main.jsx file and take a import like below.
5. ```
   import { BrowserRouter } from "react-router";
   ```
6. Wrap the App with browser router like below.
7. ```
    <BrowserRouter>
           <App />
       </BrowserRouter>
   ```
8. Open the App.jsx file and take two imports like below.
9. ```
   import { Routes, Route } from "react-router";
   ```
10. Use the Routing like below.
11. ```
     return(
        <>
          <Routes>
            {/* Learn / means home page  */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </>
    ```

Note : / , /about, /contact are the urls and element means what page you want to render.
