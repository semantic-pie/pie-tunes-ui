import Flows from './Flows'
import Search from './Searach'


const Container = () => {
  return (
    <div class='container flex flex-col items-center h-screen py-5 gap-5'>
      <Search />
      <Flows />
    </div>
  )
}

export default Container