import { Link } from "react-router-dom"

export const Nav = () => {
    return <ul class="nav nav-tabs mb-4">

        <li class="nav-item">
            <Link to={"create"} class={`nav-link`}
                data-bs-toggle="tab"
                data-bs-target="#createPost">
                Create Post
            </Link>
        </li>

        <li class="nav-item">
            <Link to={"/"} class={`nav-link`}
                data-bs-toggle="tab"
                data-bs-target="#viewPost">
                View Posts
            </Link>
        </li>

    </ul>
}