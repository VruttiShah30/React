import { Posts } from "./Posts"

export const Display = ({ post, deletePost, addLikes }) => {
    return <><div class="tab-pane fade show active"
        id="viewPost" >

        <div class="row">

            {post.map(ele => <Posts key={ele.username} ele={ele} deletePost={deletePost} addLikes={addLikes} />)}





        </div>

    </div>

    </>
}