import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../Hooks/useCounterContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  return (
    <div>
        <h1>Home</h1>
        <p>{counter}</p>
        <ChangeCounter/>
    </div>
  )
}

export default Home