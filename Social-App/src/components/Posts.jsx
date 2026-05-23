

export const Posts = ({ ele, deletePost, addLikes }) => {
    return <div class="col-md-6 mb-4">

        <div class="card post-card">

            <div class="card-body">

                <div class="d-flex align-items-center mb-3">


                    <div>
                        <h5 class="mb-0">
                            {ele.username}
                        </h5>


                    </div>

                </div>

                <h4>{ele.title}</h4>

                <p>
                    {ele.contents}
                </p>

                <div class="d-flex justify-content-between">

                    <button class="btn btn-outline-danger" onClick={() => addLikes(ele.username)}>
                        ❤️ Like {ele.likes}
                    </button>

                    <button class="btn btn-danger" onClick={() => deletePost(ele.username)}>
                        🗑 Delete
                    </button>

                </div>

            </div>

        </div>

    </div>

}