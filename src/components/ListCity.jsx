function ListCity() {
    let allCities=["Chennai","Pune","Mumbai"];
    let mappedAllCities=allCities.map((eachCity)=><li className="list-group-item">{eachCity}</li>);
    return ( 
        <>
            <h3>List of Cities</h3>
            <div>
            {allCities}
            </div>
            <div>
                <ul className="list-group">{mappedAllCities} </ul>
            </div>
        </>
     );
}

export default ListCity;