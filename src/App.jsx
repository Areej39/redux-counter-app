import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './utils/counter/counterSlice'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Smile, Frown, Meh} from 'lucide-react';

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleRefresh = () => {
    window.location.reload();
  }

  const buttonStyle = {
    backgroundColor: "#06b6d4",
    color: "black",
    "&:hover": {
      backgroundColor: "#0891b2",
    },
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-cyan-100 via-sky-50 to-blue-100 flex items-center justify-center p-6'>
      <div className='relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 transition duration-300 hover:scale-[1.02] hover:shadow-cyan-300/50'>
        <button onClick={handleRefresh} className='absolute top-5 right-5 p-2 hover:bg-gray-100 rounded-full transition-colors' aria-label="Refresh page">
          <ArrowPathIcon className='w-6 h-6 text-gray-700' />
        </button>

        <h1 className='text-4xl font-bold text-gray-800 text-center'>Counter App</h1>
        <p className="text-gray-500 text-center mt-2">
          Manage your counter using Redux Toolkit
        </p>

        <div className='mx-auto my-8 w-44 h-44 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg'>
          <h2 className='text-white text-6xl font-bold'>{count}</h2>
        </div>

        <div className='flex justify-center mt-6'>
          <Stack spacing={3} direction="row">
            <Button variant="contained" color='error' size='large'
              sx={buttonStyle}
              onClick={() => dispatch(decrement())}>Decrease</Button>
            <Button variant="contained" color='success' size='large'
              sx={buttonStyle}
              onClick={() => dispatch(increment())}>Increase</Button>
          </Stack>
        </div>


        <div className='flex justify-center mt-6'>
        <Stack spacing={2} direction="row">
          <Button variant="outlined"
            sx={buttonStyle}
            onClick={() => dispatch(incrementByAmount(-5))}>-5</Button>
          <Button variant="outlined"
            sx={buttonStyle}
            onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
          <Button variant="outlined"
            sx={buttonStyle}
            onClick={() => dispatch(incrementByAmount(10))}>+10</Button>
        </Stack>
      </div>

        <div className="mt-5 text-center">
          <p className="text-gray-500">Current Status</p>
          <div className="text-xl font-semibold">
            {count > 0 ? (
              <div className='flex justify-center items-center gap-2'><Smile className='w-6 h-6 text-green-500'/><span className=' text-green-500'>Positive</span></div>
              ) : count < 0 ? (
              <div className='flex justify-center items-center gap-2'><Frown className='w-6 h-6 text-red-500'/><span className='text-red-500'>Negative</span></div>
              ): (
                 <div className='flex justify-center items-center gap-2'><Meh className='w-6 h-6 text-gray-500'/><span className='text-gray-500'>Neutral</span></div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
