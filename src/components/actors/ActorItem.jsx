export function ActorItem({item,removeActor}) {
   // console.log(props);
    return ( 
        <>
            <tr>
                <td>{item.actorId}</td>
                <td><img src={item.actorImageUrl} width="100" height="100"></img></td>
                <td>{item.actorName}</td>
                <td>{item.actorMovie}</td>
                <td>
                    <button className="btn btn-danger"
                    onClick={()=>removeActor(item.actorId)}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
     );
}
