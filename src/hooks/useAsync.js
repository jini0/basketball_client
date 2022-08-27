import { useReducer, useEffect } from 'react'

//초기값 설정
const initialState = {
    loading: false,
    data: null,
    error: null
}

//LOADING, SUCESS, ERROR
function reducer(state, action) {
    switch(action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            return state;
    }
}

function useAsync(callback, deps=[]) {
    //상태관리하기
    //useReducer(함수,초기값)
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const fetchData = async () => {
        dispatch({type: "LOADING"});
        try{
            const data = await callback();
            dispatch({
                type: "SUCCESS",    //요청이 성공
                data: data
            })
        }
        catch(e){
            dispatch({
                type: "ERROR",      //에러
                error: e
            })
        }
    }
    //랜더하고 호출
    useEffect(()=>{
        fetchData();
    //eslint-disable-next-line
    }, deps);
    return [state, fetchData];
}
export default useAsync;