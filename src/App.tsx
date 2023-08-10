import './App.css'
import Article from './components/Article'
import CommentsList from './components/CommentsList'

function App() {

  return (
    <div>
      <h1>My React playground for experiments with some React tools</h1>
      <section>
        <h2>1 - Learning how to work with the
          &nbsp;
          <strong>useImperativeHandle</strong>
          &nbsp;
          hook with the example from
          &nbsp;
          <a href='https://dev.to/anikcreative/react-hooks-explained-useimperativehandle-5g44#01-note-from-author'>
            Anik's React Hooks Explained: useImperativeHandle
          </a>
        </h2>
        <Article />
      </section>

    </div>
  )
}

export default App
