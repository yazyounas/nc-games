import React from "react";
import {useState, useEffect} from React
import { getCategory } from "./api";

function ReviewLists({reviews, setReviews}) {
    const  [isLoading, setIsLoading] = useState(true)
useEffect(() => {
    setIsLoading(true)
    getCategory()
    .then((reviews) => {
        setReviews(reviews)
        isLoading(false)
    })
})

return (<>
   
</>
)
}

export default ReviewLists;