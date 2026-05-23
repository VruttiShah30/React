
export const Nav = ({ setTab, tab }) => {
    return <ul class="nav nav-tabs mb-4">

        <li class="nav-item">
            <button class={`nav-link ${tab == 'create' ? 'active' : ''}`}
                data-bs-toggle="tab"
                data-bs-target="#createPost" onClick={() => setTab("create")}>
                Create Post
            </button>
        </li>

        <li class="nav-item">
            <button class={`nav-link ${tab == 'display' ? 'active' : ''}`}
                data-bs-toggle="tab"
                data-bs-target="#viewPost" onClick={() => setTab("display")}>
                View Posts
            </button>
        </li>

    </ul>
}