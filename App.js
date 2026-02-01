{/* <div class="parent">
    "I'm Varsha Sreenivasulu";
    <div class="child">
        <h1>Hi I'm h1 tag</h1>
        <h2>Hi I'm h2 tag</h2>
    </div>
</div> */}


const heading = React.createElement("div", { class: "parent"} ,
     [ "I'm Varsha Sreenivasulu" , React.createElement("div", { class: "child"} , 
     [ React.createElement("h1", {}, "Hi I'm h1 tag") , React.createElement("h2", {}, "Hi I'm h2 tag") ])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)