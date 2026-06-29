import { useContext } from "react"
import { Posts } from "./Posts"
import { MyContext } from "./MyContext"

export const Display = () => {
    const { post } = useContext(MyContext)
    return <><div class="tab-pane fade show active"
        id="viewPost" >

        <div class="row">

            {post.map(ele => <Posts key={ele.username} ele={ele} />)}

        </div>

    </div>

    </>
}