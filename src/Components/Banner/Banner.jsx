

const Banner = () => {
    return (
        <div>
            <div className="hero h-[50vh]" style={{backgroundImage: 'url(https://i.ibb.co/bsWy0Zf/volunteer-young-people-donation-boxes-isolated-white-background-vector-flat-cartoon-illustrations-so.jpg)'}}>
  <div className="hero-overlay bg-white bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-8 text-2xl md:text-3xl lg:text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
      <input className="py-3 px-2 border border-gray-400 rounded-l-md" type="text" name="" id="" placeholder="search here..." />
      <button className="bg-red-600 px-6 py-3 rounded-r-md">search</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;