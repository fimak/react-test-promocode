import { Notes } from '../features/notes/ui/Notes.tsx';
import { RadioSelection } from '../features/selection/ui/RadioSelection.tsx';

function App() {

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-4xl m-4">Test task</h1>
      <RadioSelection />
      <Notes />
    </div>
  )
}

export default App
