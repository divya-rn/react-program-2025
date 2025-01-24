import { AppHeader } from "./AppHeader";

export function ComponentNotFound(){
    return(
        <>
        <AppHeader />
            <div className="container m-5 text-center">
                <h1 className="text-danger border-danger">404 - Component Not Found</h1>
            </div>
        </>
    )
}