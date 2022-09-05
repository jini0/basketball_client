import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Review.css';

const Review = () => {
    // mysql로 데이터 불러오기 - review 전체 뿌리기
    const [ reviews, setReviews ] = useState([]);
    const { itemid } = useParams();
    useEffect(()=>{ 
        axios.get(`http://localhost:8001/review/${itemid}`)
        // axios.get(`${API_URL}/review`)
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            setReviews(result.data);
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])


    // mysql로 데이터 불러오기 - review 작성하기
    // const [ reviewA, setReviewA ] = useState(null);
    // const { idid } = useParams();             
    // useEffect(()=>{
    //     axios.post(`http://localhost:8001/addReview/${idid}`)
    //     // axios.post(`${API_URL}/addReview/${idid}`)
    //     .then(result => {
    //         const results = result.data;
    //         // console.log(results);
    //         setReviewA(results); 
    //     })   
    //     .catch(e=> {
    //         console.log(e);
    //     })
    //     // eslint-disable-next-line
    // },[])

    return (
        <div id='reviewContents'>
            <div>
                <div id="review">
                    <h3>Review 작성하기</h3>
                    <form>
                        <textarea name="reviewdesc" id="reviewdesc" cols="30" rows="10" placeholder="상품후기 작성하기"></textarea>
                        <ul id="reviewBtns">
                            <li>
                                <input type="file" name="reviewimg" className="reviewimg" required />
                                <label id="photofile">사진추가</label>
                            </li>
                            <li>
                                <select name="reviewstar" id="reviewstar">
                                    <option value="★★★★★">★★★★★</option>
                                    <option value="★★★★">★★★★</option>
                                    <option value="★★★">★★★</option>
                                    <option value="★★">★★</option>
                                    <option value="★">★</option>
                                </select>
                            </li>
                            <li>
                                <input type="hidden" name="id" />
                                <button id="reviewBtn" type="submit">리뷰등록</button>
                            </li>
                        </ul>
                    </form>
                </div>
                <div id="reviewText">
                    <h3>Review</h3>
                    <ul>
                        {/* {reviews.map(review=>(
                            <>
                            <li>{review.name}</li>
                            <li><span>{review.tar}</span></li>
                            <li>{review.desc}</li>
                            <li><img src={'../'+review.reviewimg} alt="리뷰 상품이미지" /></li>
                            <li>
                                <form>
                                    <input type='hidden' name='id' value={review.itemid} />
                                    <button type='submit'>X</button>
                                </form>
                            </li>    
                            </>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Review;