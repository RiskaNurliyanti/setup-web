
import CounterButton, {MESSAGE} from '../../../../components/CounterButton';

export default function Page() {
    return (
        <>
        <h1> Import/Export Component</h1>
        <p>{MESSAGE}</p>
        <CounterButton initialValue={1}/>
        <CounterButton initialValue={2}/>
        <CounterButton initialValue={3}/>
        </>
    );
}

//props = atribute 
// function CounterButton(props: any){
//     const { initialValue } = props;
//     return <button>{initialValue}</button>;
// }
