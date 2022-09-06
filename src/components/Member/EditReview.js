import React from 'react';

const EditReview = () => {
    return (
        <div id="review">
            <h3>Review 수정하기</h3>
            <form>
                <input type="text" name="reviewtitle" placeholder="상품 후기 제목"/>
                <textarea name="reviewdesc" id="reviewdesc" cols="30" rows="10" placeholder="상품후기 작성하기"></textarea>
                <ul id="reviewBtns">
                    <li>
                        <input type="file" name="reviewimg" className="reviewimg" />
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
                        <input type="hidden" name="name"/>
                        <button id="reviewBtn" type="submit">리뷰수정</button>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default EditReview;