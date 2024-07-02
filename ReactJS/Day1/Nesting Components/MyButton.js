import MyApp from "./MyApp";

function MyButton()
{
    function actionsAdd()
    {
        alert("Successfully Added");
    }
    function actionsEdit()
    {
        alert("Successfully Edited")
    }
    function actionsDelete()
    {
        alert("Deleted SuccessFully");
    }
    return (
        <div>
        
        <button onClick={actionsAdd}>Add</button>
        <button onClick={actionsEdit}>Edit</button>
        <button onClick={actionsDelete}>Delete</button>
        </div>

    );
}
export default MyButton;
