import NavbarMain from '../Navigation/NavbarMain'
import MainView from '../Views/MainView'
import BottomNav from '../Navigation/BottomNav'


const Home = () => {
  return (
    <>
    <div className='h-screen'>
    <div className='w-full h-full flex flex-col'>
      < NavbarMain />
      <MainView />
      <BottomNav />
      </div>
      </div>
    </>
    
  )
}

export default Home