
import ReviewCategory from "./ReviewCategory";


function Home({items, setItems}) {
    return (
        <main className="home">
          <ReviewCategory items={items} setItems={setItems}/>
          
        </main>
    )
}
export default Home;