
const Home = () => {

  return (

    <>
    <div className="home-container p-4 m-4 bg-blue-200 rounded-lg">
      <h1 className="home-title bg-amber-800 text-white text-2xl font-bold p-2 rounded">
        Welcome to the Home Page
      </h1>
      <p>This is the home page of our React application.</p>
      <p>Explore our features and enjoy your stay!</p>
      <p>Feel free to contact us for more information.</p>

      {/* card from flowbite in tailwind css */}
    

    </div>
    
     <div className="w-full py-2.5 font-medium text-sm text-white text-center bg-gradient-to-r from-[#4F39F6] to-[#FDFEFF] mb-4  p-4 m-4 rounded-lg">
            <p><span className="px-3 py-1 rounded-md text-indigo-600 bg-white mr-2">Launch offer</span>Try prebuiltui today and get $50 free credits</p>
        </div>

       <div className="flex flex-wrap justify-center items-center space-x-2 text-sm text-gray-500 font-medium mb-4">
            <button type="button" aria-label="Home">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z" fill="#475569" stroke="#475569" strokeWidth=".094"/>
                </svg>
            </button>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1"/>
            </svg>
            <a href="#">E-Commerce</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1"/>
            </svg>
            <a href="#">Product</a>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1"/>
            </svg>
            <a href="#" className="text-indigo-500">Earphones</a>
        </div>

    </>
  );
};






export default Home;
