'use client'

import { useState } from "react";

// Export pesan biasa
export const MESSAGE = "Hello Boss Dongo";

//props = atribute 
// Export default Import
export default function CounterButton(props: any){
    const { initialValue } = props;

    const [value, setValue] = useState(initialValue);
    return <button onClick={() => {
        setValue(value + 1);
    }}
    style={{padding: 20}}>{value}</button>;
}
