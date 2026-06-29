

export const Container = ({ children }) => {


    return <><div class="container mt-5">
        <div class="main-box">
            {children[0]}
            <div class="tab-content">
                {children[1]}
                {children[2]}
            </div>
        </div>
    </div></>
}