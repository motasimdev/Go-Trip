
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Container from './components/Container'

function App() {
  return (
    <>
    <Container>
      <Button Tagname='button' className={""} >
        button
      </Button>
      <Card />
    </Container>
    </>
  )
}

export default App
