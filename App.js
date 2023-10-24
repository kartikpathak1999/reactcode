// const parent =React.createElement("div",

// { id :"parent"},

// React.createElement(

//     "div",
//     {id:"child"},

//     React.createElement("h1",{},"I am an h1 tag")
// )



// );






//if u have to given two element as a siblings 

const parent =React.createElement("div",

{ id :"parent"},

React.createElement(

    "div",
    {id:"child"},[

    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h1 tag")

    ])



);




//const heading=React.createElement("h1",{id:"heading"},"Hello world React");

const root =ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);