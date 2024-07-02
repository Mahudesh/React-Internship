
const user={
    name: 'MAHUDESH M',
    imageUrl: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageSize: 500
};
function DisplayData( )
{
    return(
        <div>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} style={{width: user.imageSize,height: user.imageSize}}/>
        </div>
    );
}
export default DisplayData;
