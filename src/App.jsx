import Header from './Header';
import Footer from './Footer';
import Content from './Content'; // Assuming content is defined in another file
import List from './List'; // Assuming list is defined in another file
function App(){
  return (
    <div>
       <Header title = "To do list"/>
       <Content />
       <List />
         <Footer />
    </div>
  );
}

export default App
