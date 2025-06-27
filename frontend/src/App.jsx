import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddTask />} />
          <Route path='/tasks' element={<TaskList />} />
          <Route path='/edit/:id' element={<EditTask />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App;