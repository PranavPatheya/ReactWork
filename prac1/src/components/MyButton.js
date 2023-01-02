import Greetings from "./Greetings";
const MyButton=()=>{
    const personName="pranav";
    const technology="React";
    const information="Practice";
    return (
        <div>
        <button>sumbit</button>
        <Greetings name={personName} />
        <Greetings data={technology} />
        <Greetings datavalue={information} />

        </div>
        

    );
};
export default MyButton;