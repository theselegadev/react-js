import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../Hooks/useCounterContext"
import { useTitleColorContext } from "../Hooks/useTitleColorContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  const {color} = useTitleColorContext()

  return (
    <div>
        <h1>Home</h1>
        <p style={{color}}>{counter}</p>
        <ChangeCounter/>
    </div>
  )
}

export default Home