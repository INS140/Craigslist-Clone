// Import data
import { postings } from './postings'
// Import components
import './App.css';
import Sidebar from './Sidebar'
import SearchBar from './SearchBar'
import Directory from './Directory'
import Gallery from './Gallery'

console.log(postings)

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar />
        <SearchBar />
        <Directory />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
