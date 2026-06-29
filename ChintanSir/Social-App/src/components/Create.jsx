import { useContext, useRef } from "react"
import { MyContext } from "./MyContext"


export const Create = () => {
    const { addPost } = useContext(MyContext)
    const username = useRef()
    const title = useRef()
    const contents = useRef()

    const submithandler = (e) => {
        e.preventDefault()
        var data = {
            "username": username.current.value,
            "title": title.current.value,
            "contents": contents.current.value,
            "likes": 0
        }

        addPost(data)

    }

    return <><div class="tab-pane fade show active"
        id="createPost">

        <form onSubmit={submithandler}>
            <div class="card p-4">

                <div class="mb-3">
                    <label class="form-label">
                        Username
                    </label>

                    <input type="text"
                        class="form-control"
                        placeholder="Enter username" ref={username} />
                </div>


                <div class="mb-3">
                    <label class="form-label">
                        Post Title
                    </label>

                    <input type="text"
                        class="form-control"
                        placeholder="Enter post title" ref={title} />
                </div>

                <div class="mb-3">

                    <label class="form-label">
                        Post Content
                    </label>

                    <textarea
                        class="form-control"
                        rows="5"
                        placeholder="What's on your mind?" ref={contents}>
                    </textarea>

                </div>

                <button class="btn btn-primary w-100" type="submit">
                    Create Post
                </button>

            </div>
        </form>

    </div>
    </>

}