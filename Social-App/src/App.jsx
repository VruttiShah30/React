import 'bootstrap/dist/css/bootstrap.min.css'
import { Title } from './components/Title'
import { Nav } from './components/Nav'
import { Create } from './components/Create'
import { Display } from './components/Display'
import { useState } from 'react'
const App = () => {

  const [tab, setTab] = useState("create")
  const [post, setPost] = useState([])

  const addPost = (data) => {
    setPost([...post, data])
  }

  const deletePost = (username) => {

    setPost(post.filter(ele => {
      if (ele.username != username) {
        return ele
      }
    }))
  }

  const addLikes = (username) => {

    const newArray = post.filter(ele => {
      if (ele.username == username) {
        ele.likes = ele.likes + 1
      }
      return ele
    })

    setPost(newArray);


  }

  return <><div class="container mt-5">
    <div class="main-box">
      <Title />
      <Nav setTab={setTab} tab={tab} />
      <div class="tab-content">
        {tab == 'create' ? <Create addPost={addPost} /> : <Display post={post} deletePost={deletePost} addLikes={addLikes} />}


      </div>
    </div>

  </div>
  </>

}

export default App