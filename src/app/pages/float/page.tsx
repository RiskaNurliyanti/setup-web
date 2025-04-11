"use client";

export default function Page(){
    return (
        <>
        <main>
            <img className="float-left"   src="../../../../canva-background-virtual-idulfitri-ornamental-hijau-emas-RfUsa0JFstQ.jpg" 
                alt="Desain Ornamental Hijau Emas Idulfitri"
                height="120" width="100" ></img>
            <img className="float-right"   src="../../../../canva-background-virtual-idulfitri-ornamental-hijau-emas-RfUsa0JFstQ.jpg" 
                alt="Desain Ornamental Hijau Emas Idulfitri"
                height="120" width="100" ></img>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
                adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, 
                euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. 
                Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
            <p>Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. 
                Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus 
                orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. 
                Maecenas adipiscing ante non diam sodales hendrerit. Fusce ac felis sit amet ligula pharetra condimentum.</p>
        </main>

        <style jsx>{`
           main {
                margin: 10px;
            }
            
            .float-left {
              float: left;
              padding-right: 20px;
            }
            
            .float-right {
                float: right;
                padding-left: 20px;
            }

            
        `}
        </style>
        </>
    );
}