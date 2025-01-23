export function City(){
    let cities=["Kochi","Coimbatore","Chennai","Thiruvananthapuram"];
    return (
        <>
            <ul>
            <h3>Cities List</h3>
            {cities.map((city) => (
                    <li key={city}>{city}</li>
                ))}
            </ul>
        </>
    );
}