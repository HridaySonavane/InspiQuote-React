import React from "react";

function Banner() {
  const positiveAff = [
    { id: 1, quote: "Sucess is when you find people copying you." },
    { id: 2, quote: "Learn to be in present and enjoy the moment." },
    {
      id: 3,
      quote: "Always speak what you feel and never be sorry for being real.",
    },
    {
      id: 4,
      quote:
        "The one who is not successful that doesn't means he is fool/unsuccessful",
    },
    { id: 5, quote: "Problems are not too big, we just over think about it." },
    { id: 6, quote: "Confidence is the key to success 🔑" },
    { id: 7, quote: "Never tell anyone what you're doing until its done." },
    {
      id: 8,
      quote: "Don't make permanent decisions based on temporary mood swings.",
    },
    {
      id: 9,
      quote:
        "Sir doesn't mean your talking about male it means your talking to a powerful and confident person",
    },
    { id: 10, quote: "The Wrong people always teaches you the right thing " },
    { id: 11, quote: "Let them laugh on you they have no idea what's coming" },
    { id: 12, quote: "I don't react but trust me i notice everything " },
    {
      id: 13,
      quote:
        "Sucess comes from experience and experience comes from bad experience ",
    },
    { id: 14, quote: "Get up and live the live the life you once IMAGINED " },
    {
      id: 15,
      quote: "The pro is the amateur who simply showed up every day. ",
    },
    {
      id: 16,
      quote:
        "Sit on as many chairs as you can before you find the one chair on which you feel you belong ",
    },
    {
      id: 17,
      quote:
        "Ego is a bubble. Instead of bursting it and seeing what all lies outside, we invest most of our energy protecting it ",
    },
    {
      id: 18,
      quote:
        "It is better to be busy in the chase of finding yourself instead of being busy in the rat race and never know yourself ",
    },
    {
      id: 19,
      quote:
        "Persistence isn’t a one-day miracle. It is a conscious choice translated into habit ",
    },
    {
      id: 20,
      quote:
        "Time goes away and leaves us with only one of these two things: regret or results ",
    },
    {
      id: 21,
      quote: "Only when you go against the flow will you find your own flow ",
    },
    { id: 22, quote: "If you don’t ask, the answer is always no " },
    {
      id: 23,
      quote:
        "People will help you only when you have helped them understand how they can ",
    },
    {
      id: 24,
      quote:
        "Nothing beats the feeling of having done more in twenty-four hours than what the day expected you to! ",
    },
    { id: 25, quote: "Picking one, teaches. Picking both, confuses " },
    {
      id: 26,
      quote: "No one sees the multiple failures before that one ‘huge success ",
    },
    {
      id: 27,
      quote:
        "The key to having more opportunities in life is to give yourself enough opportunities to get curious ",
    },
    {
      id: 28,
      quote:
        "Perfection is personal. It is what makes others wonder. But for you it is the only way you know! ",
    },
    {
      id: 29,
      quote:
        "Your kindness might cause you pain, a sense of betrayal, heartburn. Be kind anyway ",
    },
    {
      id: 30,
      quote: "Run away from those who are trying to run away from themselves ",
    },
  ];

  const generate = ()=> {
    
    var randomNumber = Math.floor(Math.random() * (positiveAff.length));

    document.getElementById('quoteDisplay').innerHTML = positiveAff[randomNumber].quote;
  }

  return (
    <div className="w-screen h-screen">
      <img
        className="top-0 left-0 w-screen h-screen object-cover"
        src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"
        alt=""
      />

      <div className="w-screen h-screen absolute top-0 flex flex-col justify-center items-center text-black">
        <div className="w-96 h-56 m-auto p-4 bg-gradient-to-b from-white rounded-md border-white border backdrop-blur-sm">
          <h1 className="text-2xl font-semibold m-1 ml-2">Generate a Quote</h1>

          <h1
            className="text-center text-wrap absolute m-auto w-72 left-0 right-0 h-28 py-4"
            id="quoteDisplay"
          ></h1>

          <button onClick={generate} className="button absolute m-auto w-24 h-9 bottom-4 left-0 right-0">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
