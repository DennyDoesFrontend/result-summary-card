import './App.css'
import Container from './components/Container'

function App() {
  const values = [
    {
      imageUrl: "/src/assets/images/icon-reaction.svg",
      text: "Reaction",
      value: 80,
      color: "#ff575710",
      textColor: "#ff5757",
    },
    {
      imageUrl: "/src/assets/images/icon-memory.svg",
      text: "Memory",
      value: 92,
      color: "#ffb01f10",
      textColor: "#ffb01f"
    },
    {
      imageUrl: "/src/assets/images/icon-verbal.svg",
      text: "Verbal",
      value: 61,
      color: "#00bd9110",
      textColor: "#00bd91"
    },
    {
      imageUrl: "/src/assets/images/icon-visual.svg",
      text: "Visual",
      value: 73,
      color: "#1125d410",
      textColor: "#1125d4"
    },
  ]

  return (
<div className='absolute bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg h-full md:h-auto sm:rounded-4xl overflow-hidden flex flex-col max-sm:w-full w-auto sm:flex-row'>
{/* Left section */}
      <div className='bg-gradient-to-b from-[#7857ff] to-[#2e2be9] p-10 flex flex-col gap-4 items-center rounded-b-4xl sm:rounded-4xl text-center w-full md:min-w-[320px] md:max-w-[350px] flex-[1_1_0]'>
        <h2 className='text-2xl text-[#ffffff90] font-bold'>Your Result</h2>
        <div className='size-36 bg-gradient-to-b from-[#4e21ca] to-[#2421ca00] rounded-full flex flex-col items-center justify-center'>
          <h3 className='text-7xl text-white font-bold leading-none'>76</h3>
          <p className='text-[#ffffff90] font-semibold leading-none'>of 100</p>
        </div>
        <h3 className='text-3xl text-white font-bold'>Great</h3>
        <p className='text-[#ffffff90] text-semibold text-lg'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
  
      {/* Right section (Summary) */}
      <div className='bg-white p-10 flex flex-col justify-between items-start gap-8 sm:min-w-[320px] sm:max-w-[350px] flex-[1_1_0]'>
        <h1 className='text-2xl font-bold text-[#303b5a]'>Summary</h1>
        <div className='flex flex-col gap-4 w-full'>
          {values.map((value) => (
            <Container key={value.text} imageUrl={value.imageUrl} text={value.text} value={value.value} color={value.color} textColor={value.textColor}/>
          ))}
        </div>
        <button className="w-full bg-[#303b5a] p-4 text-white font-bold rounded-full">Continue</button>
      </div>
    </div>
  );
}

export default App;
