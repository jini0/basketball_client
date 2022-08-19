import React from 'react';
import YouTube from 'react-youtube';

// https://velog.io/@soonmac/React-npm-react-youtube
// https://intrepidgeeks.com/tutorial/react-easily-import-youtube-videos-react-player
const Youtube = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Youtube</h3>
                <p>DB프로미의 유튜브 채널 영상을 볼 수 있습니다.</p>
            </div>  
            <div>
                <div>
                    {/* <YouTube
                        videoId={string}                  // defaults -> null
                        id={string}                       // defaults -> null
                        className={string}                // defaults -> null
                        containerClassName={string}       // defaults -> ''
                        title={string}                    // defaults -> null
                        opts={obj}                        // defaults -> {}
                        onReady={func}                    // defaults -> noop
                        onPlay={func}                     // defaults -> noop
                        onPause={func}                    // defaults -> noop
                        onEnd={func}                      // defaults -> noop
                        onError={func}                    // defaults -> noop
                        onStateChange={func}              // defaults -> noop
                        onPlaybackRateChange={func}       // defaults -> noop
                        onPlaybackQualityChange={func}    // defaults -> noop
                    /> */}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Youtube;