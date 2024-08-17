import { DiscountCode } from '../features/discount-code/ui/DiscountCode.tsx';
import { DiscountCodeGenerator } from '../features/discount-code/ui/DiscountCodeGenerator.tsx';
import { Notes } from '../features/notes/ui/Notes.tsx';
import { RadioSelection } from '../features/selection/ui/RadioSelection.tsx';

function App() {

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-4xl m-4">Test task</h1>
      <RadioSelection />
      <DiscountCode />
      <DiscountCodeGenerator />
      <Notes />
    </div>
  )
}

export default App
