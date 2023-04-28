import { useEffect, useState } from "react";
import { getReviewCategories } from "./api";
import ReviewLists from "./ReviewLists";

function ReviewCategory(items, setItems) {
  const [reviewCategories, setReviewCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviewCategories().then((reviewCategory) => {
      console.log(reviewCategory); // log the reviewCategory array to the console
      setReviewCategory(reviewCategory.category);
      setIsLoading(false);
    });
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h2>Categories</h2>
      <select className="category-dropdown" onChange={handleCategoryChange} style={{ zIndex: 999 }}>
  <option value="">Select Category</option>
  {reviewCategory.map((category) => (
    <option key={category.id} value={category.category}>
      {category.category}
    </option>
  ))}
</select>
      <ReviewLists items={items} setItems={setItems} selectedCategory={selectedCategory} />
    </main>
  );
}


export default ReviewCategory