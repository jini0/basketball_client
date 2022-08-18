import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import testImage from "./goods_metal_sticker.png";

const Container = styled.div`
//   position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
//   top: 0;
//   left: 0;
  width: 100%;
  height: 100%;
`;

const Target = styled.div`
  justify-content: center;
  align-items: center;
  width: 560px;
  height: 560px;
  margin: 0 auto;
  border: 1px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s ease-out;
  overflow: hidden;

  ${({ isScale, origin }) =>
    isScale &&
    css`
      transform: scale(1);
      transform-origin: ${origin};
    `}
`;

const ImageZoom = styled.div`
  position: absolute;
  ${({ width, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
    `}
  margin-top: 30px;
  top: -5%;
  right: -110%;
  display: inline-block;
  transition: transform 0.5s ease-out;
  background-image: url(${testImage});
`;

const Cursor = styled.div`
  position: absolute;
  background: white;
  opacity: 0.3;
  ${({ cursor, cursorSize, width, height }) =>
    cursor &&
    css`
      width: ${width / cursorSize}px;
      height: ${height / cursorSize}px;
      left: calc(${cursor.cursorX}px - ${width / cursorSize / 2}px);
      top: calc(${cursor.cursorY}px - ${height / cursorSize / 2}px);
    `}
  z-index: 999;
`;

const ZoomImage = ({ zoomRate, width, height }) => {
    // zoom이미지 상태관리
    const [ isZoom, setIsZoom ] = useState(false);

    // onClick 이벤트
    const onClick = ()=>{
        // zoom 돋보기 버튼
        const zoomBtn = document.querySelector('.zoom');

        if(isZoom == false){        // isZoom이 false면 setIsZoom을 true로 변경해서 zoomImage가 보이게하기!
            setIsZoom(true);
            zoomBtn.style.display = 'none';
        } else if(isZoom == true){  // 다시 클릭시, zoomImage 다시 안보이도록 false로 변경
            setIsZoom(false);
            zoomBtn.style.display = 'block';
        }
    }

  const [cursor, setCursor] = useState({
    cursorX: 0,
    cursorY: 0,
  });
  const imageRef = useRef(); // 원본 이미지
  const imageZoomRef = useRef(); // 확대될 이미지
  const cursorRef = useRef(); // 마우스커서 혹은 확대할곳

  const onMouseMove = useCallback((e, zoomRate) => { // mouse가 움직일때마다 실행 될 함수
    imageZoomRef.current.style.backgroundSize = `${ // 백그라운드 사이즈를 설정함으로써 이미ㅣ지를 확대 할 수 있다.
      imageRef.current.offsetWidth * zoomRate   
    }px ${imageRef.current.offsetHeight * zoomRate}px`; // 실제이미지의 넓이와 높이 확대될 비율을 곱한다.

    const rect = e.target.getBoundingClientRect(); // 원본 이미지의 위치를 알아냅니다.

    const getCursorPos = (e) => { // 커서의 좌표를 구하는 함수
      let x = 0,
        y = 0;
      x = e.pageX - rect.left; 
      y = e.pageY - rect.top; // 뷰포트기준 원본 이미지 안의 마우스의 위치 - 페이지 전체 위치에서 원본 이미지가 떨어져있는 위치값

      return { x, y };
    };

    const pos = getCursorPos(e);

    let x = pos.x - cursorRef.current.offsetWidth / 2;
    let y = pos.y - cursorRef.current.offsetHeight / 2;

    imageZoomRef.current.style.backgroundPosition = `-${x * zoomRate}px -${ // 복사된 이미지의 어디가 확대 될 곳인지 position을 정해준다.
      y * zoomRate
    }px`;

    setCursor({
      cursorX: e.pageX,
      cursorY: e.pageY,
    });
  }, []);

  return (
    <Container  className="imageProduct">
      <Target>
        <Cursor width={width} height={height} ref={cursorRef} cursor={cursor} cursorSize={zoomRate} />
        <Image
          ref={imageRef}
          src={testImage}
          onMouseMove={(e) => onMouseMove(e, zoomRate)}
          onClick={onClick}
        />
      </Target>

      {/* flase일 때는, zoom 안보이게 */}
      { isZoom && 
      <ImageZoom ref={imageZoomRef} width={width} height={height} />}
      <div className='zoom' onClick={onClick}></div>
    </Container>
  );
};

export default ZoomImage;