//createElement(Object) => HTML (browser understand)
// const heading = React.createElement("h1", 
// {id:"heading"}, 
// "Hello React"
// );


//Nested Element
const parent = React.createElement("div", {id:"parent"},
[
    React.createElement("div", {id:"child1"}, 
[React.createElement("h1", {}, "h1 Tag")
,React.createElement("h2", {}, "h2 Tag") //h1 and h2 are siblings so use array
]
),
React.createElement("div", {id:"child2"}, 
[React.createElement("h1", {}, "h1 Tag")
,React.createElement("h2", {}, "h2 Tag") //h1 and h2 are siblings so use array
]
)
]
);
console.log(parent); //Object
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);