import Message from "./components/Message"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"


function App() {

  return (
    <>

      <Header/>
      <h2>Me debe 500 el que lo lea </h2>
      
      <Main/>
      
      <Message classList="mensaje " text="Desde un boton"/>
      <Message text="Desde otro boton"/>

      <Counter/>

      <Footer/>
    
    </>
  )
}

export default App



