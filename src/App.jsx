function App() {

  return (
    <div className="max-w-6xl flex flex-col items-center gap-6 my-4 mx-auto">
         <div className="text-5xl font-bold tracking-wide">
              The Real Leadership Lessons of Steve Jobs
         </div>
         <div className="text-gray-400 font-semibold ">
              Six months after Jobs’s death, the author of his best-selling biography identifies the practices that every CEO can try to emulate. <span className="text-gray-900 font-semibold">by Walter Isaacson</span>
         </div>
         <div>
            <img className="rounded-3xl" src="https://in2english.net/wp-content/uploads/2020/10/steve-jobs.jpg" alt="steve-jobs" />
         </div>
         <div className="max-w-4xl m-auto">
         <div className="leading-6 font-mono">
            <b className="text-2xl">His saga is the entrepreneurial creation myth</b> writ large: Steve Jobs cofounded Apple in his parents’ garage in 1976, was ousted in 1985, returned to rescue it from near bankruptcy in 1997, and by the time he died, in October 2011, had built it into the world’s most valuable company. Along the way he helped to transform seven industries: personal computing, animated movies, music, phones, tablet computing, retail stores, and digital publishing. He thus belongs in the pantheon of America’s great innovators, along with Thomas Edison, Henry Ford, and Walt Disney. None of these men was a saint, but long after their personalities are forgotten, history will remember how they applied imagination to technology and business.
         </div>
         <div className="flex justify-center my-4">
        <div className="my-5 mx-30 border-s-2 border-black h-16 flex items-center">
          <h1 className="mx-5 font-serif">
            <q
              >The people who are crazy enough to think they can change the
              world are the ones who do.</q
            ><br />
            —Apple’s “Think Different” commercial, 1997
          </h1>
        </div>
        </div>
        <div className="max-w-30 grid grid-cols-2 items-center gap-5">
          <p>
          One of the last times I saw him, after I had finished writing most of
          the book, I asked him again about his tendency to be rough on people.
          “Look at the results,” he replied. “These are all smart people I work
          with, and any of them could get a top job at another place if they
          were truly feeling brutalized. But they don’t.” Then he paused for a
          few moments and said, almost wistfully, “And we got some amazing
          things done.” Indeed, he and Apple had had a string of hits over the
          past dozen years that was greater than that of any other innovative
          company in modern times: iMac, iPod, iPod nano, iTunes Store, Apple
          Stores, MacBook, iPhone, iPad, App Store, OS X Lion—not to mention
          every Pixar film. And as he battled his final illness, Jobs was
          surrounded by an intensely loyal cadre of colleagues who had been
          inspired by him for years and a very loving wife, sister, and four
          children.
          </p>
          <div>
            <img src="https://i.pinimg.com/originals/fa/aa/b3/faaab317fc4ca7e3e228230dbbef769a.png" alt="steve" />
          </div>
        </div>
         <hr className="my-8"/>
         <div className="flex justify-center items-center gap-10">
          <div className="bg-green-300 rounded-full w-16 h-16 flex justify-center items-center text-3xl font-semibold">
            M
          </div>
          <div className="w-[400px] font-mono text-xs">
            Walter Isaacson, the CEO of the Aspen Institute, is the author of Steve Jobs and of biographies of Henry Kissinger, Benjamin Franklin, and Albert Einstein.
          </div>
         </div>
         </div>
         <div className="w-full h-[250px] bg-gray-800">
            <div className="text-3xl text-white font-semibold text-center mt-10">
              Subscribe To Our NewsLetter
            </div>
            <div className="mt-6 mx-4">
              <input className="w-full p-2 rounded-lg" type="text" placeholder="Enter Your Email ID" />
            </div>
            <div className="text-center mt-6">
              <button className="bg-green-400 py-2 px-16 font-medium rounded-xl">Subscribe Now</button>
            </div>
         </div>
    </div>
 
  )
}

export default App
