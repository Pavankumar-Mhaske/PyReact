
function Cards(props) {
    return (
        // <div className="container text-primary">
        //     <h1> I Am {name} </h1>
        // </div>
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={props.src} alt="Card cap"/>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.parg}</p>
        
        <a href="/" className="btn btn-primary">Bye Product</a>

        </div>
        </div>
    );


}

export default Cards ;