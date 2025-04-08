"use client";
export default function Page(){
    return (
        <>
        <section>
            <div>
                {/* Outer Input */}
                <div className="ui input">
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
       
            <InnerInput/>
        </section>

            <style jsx>{`
            section {
                padding: 10px;
                }
                .ui.input input {
                background-color: #fef3b7;
                }
            `}
                
            </style>

            
        </>
    )
}

function InnerInput() {
    return (
        <div>
            {/* Inner Input */}
            <div className="ui input">
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
        
    )

}