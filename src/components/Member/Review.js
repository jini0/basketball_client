import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';
// import { useLocation } from 'react-router-dom';
import { getCookie } from '../util/cookie';
import './Review.css';

const Review = ({product}) => {
    const navigate = useNavigate();

    // mysql로 데이터 불러오기 - review 전체 뿌리기
    const [ reviews, setReviews ] = useState([]);
    useEffect(()=>{ 
        // axios.get(`http://localhost:8001/review/${product}`)
        axios.get(`${API_URL}/review/${product}`)
        .then(result=>{
            const results = result.data;
            console.log(results);
            setReviews(result.data);
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])


    // review - 작성하기
    const id = getCookie('userId');
    // console.log(product);
    // const location = useLocation();
    // const data = location.state;
    // console.log(data)
    // console.log(data.name)

    // const arr = data.name.split(',')
    // console.log(arr);

    let today = new Date(); 
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    // let dateString = year + '-' + month  + '-' + day;
    let dateString = year +  month  + day;

    const [ review, setReview ] = useState({
        // name : arr.length>1? arr[0] : data.name,
        name : product,
        reviewtitle : "",
        reviewdesc : "",
        reviewimg : "",
        // reviewstar : "",        
        reviewstar : "★★★★★",  //❗❗3방법> 기본값으로 처음에 별5개..!(선택안해도 selected되도록)
        userid : id,
        // date : new Date()
        // 원래는 위에처럼 다 안해주고 그냥 new Date 객체만 받아서 뿌려줬다가 -> varchar(8)이라서 수정
        date : dateString
    })

    const onChange = (e)=>{
        const {name, value} = e.target;
        setReview({
            ...review,
            [name]:value
        })
    }

    //input - 이미지 - onChange이벤트
    const onChangeImg = (e)=>{
        const { name, value } = e.target;
         setReview({
            ...review,
            [name] :value.replace("C:\\fakepath\\","images/")
        })
        const reviewFile = document.querySelector("#reviewFile");
        const photoFile = document.querySelector("#photofile");
        // console.log(reviewFile.files);
        console.log(reviewFile.files[0].name);
            if(reviewFile.files[0].name){
                photoFile.innerHTML = reviewFile.files[0].name;
            }else{
                photoFile.innerHTML = "사진추가";
            }
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        // axios.post(`http://localhost:8001/addReview`, review)
        axios.post(`${API_URL}/addReview`, review)
        .then(result=>{
            alert("리뷰가 작성되었습니다.")
            // navigate(`/review/${product}`)
            window.location.reload();
        })
        .catch(e=>{
            console.log(e)
        })
    }

    //리뷰 삭제하기 - 불러오기
    function delReview(id){
        // axios.post(`http://localhost:8001/delReview/${id}`)  // post전송 --> post로 보내면 새로고침을 해야 지워진걸 볼 수 있음!
        // axios.delete(`http://localhost:8001/delReview/${id}`)   // 삭제 - delete로 해야 삭제 후 바로 랜더링 돼서 새로고침 안해도 사라짐
        axios.delete(`${API_URL}/delReview/${id}`)   // 삭제 - delete로 해야 삭제 후 바로 랜더링 돼서 새로고침 안해도 사라짐
        .then(result=>{
            console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    } 
    //리뷰 삭제
    const onDelete = (e)=>{
        e.preventDefault();
        const id = e.target.value;
        delReview(id);
        alert("리뷰 삭제 완료");
            // eslint-disable-next-line
        document.location.href = document.location.href
    }
    //자기가 작성한 리뷰가 아닐때, 삭제 버튼 클릭시
    const onClickNotId = (e) => {
        e.preventDefault();
        alert("본인이 작성한 리뷰만 삭제할 수 있습니다.");
    }


    //자기가 작성한 리뷰가 아닐때, 수정 버튼 클릭시
    const onClickNotId2 = (e) => {
        e.preventDefault();
        alert("본인이 작성한 리뷰만 수정할 수 있습니다.");
    }

    //리뷰 작성시 - 로그인 안되어 있을 경우 --> onClick이벤트
    const onNoLogin = (e) => {
        e.preventDefault();
        alert("리뷰 작성을 위해서는 로그인을 해주세요!");
        navigate('/login');     //login페이지로 이동
    }

    //❗❗*리뷰 - '사진추가' label 글자수정 (사진파일 선택시, 사진추가label에 선택한 이미지의 이름이 나오도록 ex> 6.png)
    //--> multer 전이라서,, 이미 onChange해줘야할 input에 onChange이벤트가 있어서 위에 넣어주기..!
    // const fileOnChange = ()=>{
    //     const reviewFile = document.querySelector("#reviewFile");
    //     const photoFile = document.querySelector("#photofile");
    //     // console.log(reviewFile.files);
    //     console.log(reviewFile.files[0].name);
    //         if(reviewFile.files[0].name){
    //             photoFile.innerHTML = reviewFile.files[0].name;
    //         }else{
    //             photoFile.innerHTML = "사진추가";
    //         }
    // }


    //❗❗2방법> 리뷰 평점에서 select값: 평점5점을 기본값으로 설정하기(option 태그안에 selected 속성주는거 안됨,,,)
    //https://wazacs.tistory.com/31
    // const selectList = ["★★★★★", "★★★★", "★★★", "★★", "★"];
    // const [selected, setSelected] = useState("★★★★★");   //selected 는 선택된 option이 들어갑니다. / onChange는 선택된 option의 value 값을 e.target.value 로 받은 후, Selected 에 setState 시켜줍니다. 
                                                    //--> 만약 처음부터 grape가 선택 된 채로 설정 하고 싶다면 Selected 부분에 default 값을 넣어주면 됩니다. 
    //select의 onChange함수 다르게 주기..!
    // const handleSelect = (e) => {
    //     setSelected(e.target.value);
    //     const {name, value} = e.target;
    //     setReview({
    //         ...review,
    //         [name]:value
    //     })
    //     // console.log(selected);
    // };
    // console.log(selected);
    //❗❗ ----> 이렇게 해도 안돼서,,! [review,setReivew]에서 reviewStar에 처음 값에 "★★★★★"를 넣어줌

    return (
        <div id='reviewContents'>
            <div>
            {id ?
                <div id="review">
                    <h3>Review 작성하기</h3>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="reviewtitle" placeholder="상품 후기 제목" onChange={onChange} />
                        <textarea name="reviewdesc" id="reviewdesc" cols="30" rows="10" placeholder="상품후기 작성하기" onChange={onChange}></textarea>
                        <ul id="reviewBtns">
                            <li className='reviewPhoto'>
                                <input type="file" name="reviewimg" className="reviewimg" id="reviewFile" required onChange={onChangeImg} />
                                <label id="photofile">사진추가</label>
                            </li>
                            <li>
                                <select name="reviewstar" id="reviewstar" onChange={onChange}>
                                    {/* <option value="★★★★★" selected>★★★★★</option>  ---> react는 selected 이렇게 안됨...! */}
                                    <option value="★★★★★">★★★★★</option>
                                    <option value="★★★★">★★★★</option>
                                    <option value="★★★">★★★</option>
                                    <option value="★★">★★</option>
                                    <option value="★">★</option>
                                </select>
                                {/* ❗❗2방법 --> 안됨..."★★★★★"이 selected 기본값으로 안됨 ㅠ */}
                                {/* <select name="reviewstar" id="reviewstar" onChange={handleSelect} value={selected}>
                                    {selectList.map((item) => (
                                        <option value={item} key={item}>
                                        {item}
                                        </option>
                                    ))} 
                                </select> */}
                            </li>
                            <li>
                                <input type="hidden" name="name" value={review.name} />
                                <button id="reviewBtn" type="submit">리뷰등록</button>
                            </li>
                        </ul>
                    </form>
                </div>
            : 
                <div id="review">
                    <h3>Review를 작성해주세요!!!</h3>
                    <p className='noLogin' onClick={onNoLogin}>로그인 후 이용가능합니다.</p>
                </div>
            }
                <div id="reviewText">
                    <h3>Review</h3>
                    <ul>
                        {reviews.length===0 ? <><li></li><li>아직 작성된 리뷰가 없습니다.</li></>
                        : reviews.map(review=>(
                            <li>
                                <ul>
                                    <li></li>
                                    <li>
                                        <div>
                                            <img src={'../'+review.reviewimg} alt="리뷰 상품이미지" />
                                            <p>평점 : <span>{review.reviewstar}</span></p>
                                        </div>
                                        <div>
                                            <p className='reviewTitle'>제목 : {review.reviewtitle}</p>
                                            <p>{review.reviewdesc}</p>
                                        </div>
                                        <div>
                                            <span>작성자 : {review.userid}</span>
                                            <p>작성일 : {(review.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
                                        </div>
                                    </li>
                                    {/* <li><img src={'../'+review.reviewimg} alt="리뷰 상품이미지" /></li>
                                    <li>{review.reviewtitle}</li>
                                    <li>{review.userid}</li>
                                    <li><span>{review.reviewstar}</span></li>
                                    <li>{review.reviewdesc}</li> */}
                                    <li>
                                        <form>
                                            <input type='hidden' name='product' value={review.product} />
                                            {
                                                ((id === (review.userid)) || (id ==='admin')) ? <button onClick={onDelete} value={review.id}>X</button>
                                                : <button onClick={onClickNotId}>X</button>
                                            }
                                            {/* <button type='submit'>X</button> */}
                                            {
                                                ((id === (review.userid)) || (id ==='admin')) ? <button>수정</button>
                                                : <button onClick={onClickNotId2}>수정</button>
                                            }
                                        </form>
                                    </li>    
                                </ul>
                            </li>
                            // <>  
                            //     <li></li>
                            //     <li>
                            //         <div>
                            //             <img src={'../'+review.reviewimg} alt="리뷰 상품이미지" />
                            //             <p>평점 : <span>{review.reviewstar}</span></p>
                            //         </div>
                            //         <div>
                            //             <p className='reviewTitle'>제목 : {review.reviewtitle}</p>
                            //             <p>{review.reviewdesc}</p>
                            //         </div>
                            //         <div>
                            //             <span>작성자 : {review.userid}</span>
                            //             <p>작성일 : {(review.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
                            //         </div>
                            //     </li>
                            //     {/* <li><img src={'../'+review.reviewimg} alt="리뷰 상품이미지" /></li>
                            //     <li>{review.reviewtitle}</li>
                            //     <li>{review.userid}</li>
                            //     <li><span>{review.reviewstar}</span></li>
                            //     <li>{review.reviewdesc}</li> */}
                            //     <li>
                            //         <form>
                            //             <input type='hidden' name='product' value={review.product} />
                            //             <button type='submit'>X</button>
                            //         </form>
                            //     </li>    
                            // </>
                            // <>  
                            //     <li></li>
                            //     <li>
                            //         <div>
                            //             <img src={'../'+review.reviewimg} alt="리뷰 상품이미지" />
                            //             <p>평점 : <span>{review.reviewstar}</span></p>
                            //         </div>
                            //         <div>
                            //             <p className='reviewTitle'>제목 : {review.reviewtitle}</p>
                            //             <p>{review.reviewdesc}</p>
                            //         </div>
                            //         <div>
                            //             <span>작성자 : {review.userid}</span>
                            //             <p>작성일 : {(review.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
                            //         </div>
                            //     </li>
                            //     <li>
                            //         <form>
                            //             <input type='hidden' name='product' value={review.product} />
                            //             <button type='submit'>X</button>
                            //         </form>
                            //     </li>    
                            // </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Review;