import React from 'react';
import './Game.css';

const RankTeam = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>팀 순위</h3>
                <p>KBL구단의 시즌 순위를 확인할 수 있습니다.</p>
            </div>   
            <div id='rankTeam'>
                <div className='inner'>
                    {/* 팀순위 카테고리영역 */}
                    <div className='rank_category'>
                        <div className='rank_selector'>
                            <div className='rank_selected'>
                                <label>경기</label>
                                <div className='rank_text'>정규경기</div>
                                {/* React에서는 option에 selected를 쓰는 대신 select에서 value로 사용!  */}
                                <select className='rank_options'>
                                    <option className='opt' value="1">정규경기</option>
                                    <option className='opt' value="2">D리그</option>
                                </select>
                            </div>
                            <div className='rank_selected'>
                                <label>년도</label>
                                <div className='rank_text'>2022-2023</div>
                                <select className='rank_options'>
                                    <option className='opt' value="22">2022-2023</option>
                                    <option className='opt' value="21">2021-2022</option>
                                    <option className='opt' value="10">2020-2021</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* 팀순위 본문 */}
                    <div className='teamR'>
                        <section className='teamR_container'>
                            {/* ex> 2021-2022 정규시즌 성적 */}
                            <section className='rankTeam_table'>
                                <div className='teamRanking'>
                                    <h3>팀 순위</h3>
                                    <div className='table_wrap'>
                                        <table className='table_header'>
                                            <thead>
                                                <tr>
                                                    <th className='ranking'>순위</th>
                                                    <th className='name'>팀</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='ranking'>1</td>
                                                    <td className='ranking'>서울 SK</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>2</td>
                                                    <td className='ranking'>수원 KT</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>3</td>
                                                    <td className='ranking'>안양 KGC</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>4</td>
                                                    <td className='ranking'>울산 현대모비스</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>5</td>
                                                    <td className='ranking'>고양 오리온</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>6</td>
                                                    <td className='ranking'>대구 한국가스공사</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>7</td>
                                                    <td className='ranking'>창원 LG</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>8</td>
                                                    <td className='ranking'>원주 DB</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>9</td>
                                                    <td className='ranking'>전주 KCC</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>10</td>
                                                    <td className='ranking'>서울 삼성</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className='data_wrap'>
                                            <table className='table_data'>
                                                <thead>
                                                    <tr>
                                                        <th className='win'>win</th>
                                                        <th className='lose'>lose</th>
                                                        <th className='win_rate'>승률</th>
                                                        <th className='game_difference'>게임차</th>
                                                        <th className='game5'>최근5경기</th>
                                                        <th className='consecutive'>연승·연패</th>
                                                        <th className='home'>홈경기</th>
                                                        <th className='away'>원정</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='win'>40</td>
                                                        <td className='lose'>14</td>
                                                        <td className='win_rate'>0.741</td>
                                                        <td className='game_difference'>0</td>
                                                        <td className='game5'>패승패패패</td>
                                                        <td className='consecutive'>1연패</td>
                                                        <td className='home'>21-6</td>
                                                        <td className='away'>19-8</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>37</td>
                                                        <td className='lose'>17</td>
                                                        <td className='win_rate'>0.685</td>
                                                        <td className='game_difference'>3</td>
                                                        <td className='game5'>승승승승패</td>
                                                        <td className='consecutive'>1연패</td>
                                                        <td className='home'>21-7</td>
                                                        <td className='away'>16-10</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>32</td>
                                                        <td className='lose'>22</td>
                                                        <td className='win_rate'>0.593</td>
                                                        <td className='game_difference'>8</td>
                                                        <td className='game5'>승승패패승</td>
                                                        <td className='consecutive'>1연승</td>
                                                        <td className='home'>18-9</td>
                                                        <td className='away'>14-13</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>30</td>
                                                        <td className='lose'>24</td>
                                                        <td className='win_rate'>0.556</td>
                                                        <td className='game_difference'>10</td>
                                                        <td className='game5'>패패패패승</td>
                                                        <td className='consecutive'>1연승</td>
                                                        <td className='home'>15-12</td>
                                                        <td className='away'>15-12</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>27</td>
                                                        <td className='lose'>27</td>
                                                        <td className='win_rate'>0.500</td>
                                                        <td className='game_difference'>13</td>
                                                        <td className='game5'>패승승승승</td>
                                                        <td className='consecutive'>1연승</td>
                                                        <td className='home'>15-12</td>
                                                        <td className='away'>12-15</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>27</td>
                                                        <td className='lose'>27</td>
                                                        <td className='win_rate'>0.500</td>
                                                        <td className='game_difference'>13</td>
                                                        <td className='game5'>승승승승승</td>
                                                        <td className='consecutive'>3연승</td>
                                                        <td className='home'>15-12</td>
                                                        <td className='away'>12-15</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>24</td>
                                                        <td className='lose'>30</td>
                                                        <td className='win_rate'>0.444</td>
                                                        <td className='game_difference'>16</td>
                                                        <td className='game5'>패승승패패</td>
                                                        <td className='consecutive'>2연패</td>
                                                        <td className='home'>16-11</td>
                                                        <td className='away'>8-19</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>23</td>
                                                        <td className='lose'>31</td>
                                                        <td className='win_rate'>0.426</td>
                                                        <td className='game_difference'>17</td>
                                                        <td className='game5'>패패패승승</td>
                                                        <td className='consecutive'>1연승</td>
                                                        <td className='home'>13-14</td>
                                                        <td className='away'>10-17</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>21</td>
                                                        <td className='lose'>33</td>
                                                        <td className='win_rate'>0.389</td>
                                                        <td className='game_difference'>19</td>
                                                        <td className='game5'>패패패승패</td>
                                                        <td className='consecutive'>1연패</td>
                                                        <td className='home'>11-16</td>
                                                        <td className='away'>10-17</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='win'>9</td>
                                                        <td className='lose'>45</td>
                                                        <td className='win_rate'>0.167</td>
                                                        <td className='game_difference'>31</td>
                                                        <td className='game5'>패패패패패</td>
                                                        <td className='consecutive'>13연패</td>
                                                        <td className='home'>6-20</td>
                                                        <td className='away'>3-25</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* 팀간 승패표 */}
                            <section className='team_winlose_table'>
                                <div className='record'>
                                    <h3>팀간 승패표</h3>
                                    <div className='table_wrap'>
                                        <table className='table_header'>
                                            <thead>
                                                <tr>
                                                    <th className='ranking'>순위</th>
                                                    <th className='name'>팀</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='ranking'>1</td>
                                                    <td className='ranking'>서울 SK</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>2</td>
                                                    <td className='ranking'>수원 KT</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>3</td>
                                                    <td className='ranking'>안양 KGC</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>4</td>
                                                    <td className='ranking'>울산 현대모비스</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>5</td>
                                                    <td className='ranking'>고양 오리온</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>6</td>
                                                    <td className='ranking'>대구 한국가스공사</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>7</td>
                                                    <td className='ranking'>창원 LG</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>8</td>
                                                    <td className='ranking'>원주 DB</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>9</td>
                                                    <td className='ranking'>전주 KCC</td>
                                                </tr>
                                                <tr>
                                                    <td className='ranking'>10</td>
                                                    <td className='ranking'>서울 삼성</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className='data_wrap'>
                                            <table className='table_data'>
                                                <thead>
                                                    <tr>
                                                        <th>서울 SK</th>
                                                        <th>수원 KT</th>
                                                        <th>안양 KGC</th>
                                                        <th>울산 현대모비스</th>
                                                        <th>고양 오리온</th>
                                                        <th>대구 한국가스공사</th>
                                                        <th>창원 LG</th>
                                                        <th>원주 DB</th>
                                                        <th>전주 KCC</th>
                                                        <th>서울 삼성</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='empty'>-</td>
                                                        <td>4:2</td>
                                                        <td>1:5</td>
                                                        <td>4:2</td>
                                                        <td>5:1</td>
                                                        <td>6:0</td>
                                                        <td>4:2</td>
                                                        <td>6:0</td>
                                                        <td>5:1</td>
                                                        <td>5:1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2:4</td>
                                                        <td className='empty'>-</td>
                                                        <td>4:2</td>
                                                        <td>4:2</td>
                                                        <td>5:1</td>
                                                        <td>4:2</td>
                                                        <td>5:1</td>
                                                        <td>1:5</td>
                                                        <td>6:0</td>
                                                        <td>6:0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5:1</td>
                                                        <td>2:4</td>
                                                        <td className='empty'>-</td>
                                                        <td>2:4</td>
                                                        <td>5:1</td>
                                                        <td>3:3</td>
                                                        <td>1:5</td>
                                                        <td>5:1</td>
                                                        <td>4:2</td>
                                                        <td>5:1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2:4</td>
                                                        <td>2:4</td>
                                                        <td>4:2</td>
                                                        <td className='empty'>-</td>
                                                        <td>3:3</td>
                                                        <td>4:2</td>
                                                        <td>5:1</td>
                                                        <td>3:3</td>
                                                        <td>2:4</td>
                                                        <td>5:1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1:5</td>
                                                        <td>1:5</td>
                                                        <td>1:5</td>
                                                        <td>3:3</td>
                                                        <td className='empty'>-</td>
                                                        <td>4:2</td>
                                                        <td>4:2</td>
                                                        <td>4:2</td>
                                                        <td>4:2</td>
                                                        <td>5:1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0:6</td>
                                                        <td>2:4</td>
                                                        <td>3:3</td>
                                                        <td>2:4</td>
                                                        <td>2:4</td>
                                                        <td className='empty'>-</td>
                                                        <td>2:4</td>
                                                        <td>6:0</td>
                                                        <td>5:1</td>
                                                        <td>5:1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2:4</td>
                                                        <td>1:5</td>
                                                        <td>5:1</td>
                                                        <td>1:5</td>
                                                        <td>2:4</td>
                                                        <td>4:2</td>
                                                        <td className='empty'>-</td>
                                                        <td>3:3</td>
                                                        <td>2:4</td>
                                                        <td>4:2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0:6</td>
                                                        <td>5:1</td>
                                                        <td>1:5</td>
                                                        <td>3:3</td>
                                                        <td>2:4</td>
                                                        <td>0:6</td>
                                                        <td>3:3</td>
                                                        <td className='empty'>-</td>
                                                        <td>4:2</td>
                                                        <td>5:1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1:5</td>
                                                        <td>0:6</td>
                                                        <td>2:4</td>
                                                        <td>4:2</td>
                                                        <td>2:4</td>
                                                        <td>1:5</td>
                                                        <td>4:2</td>
                                                        <td>2:4</td>
                                                        <td className='empty'>-</td>
                                                        <td>5:1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1:5</td>
                                                        <td>0:6</td>
                                                        <td>1:5</td>
                                                        <td>1:5</td>
                                                        <td>1:5</td>
                                                        <td>2:4</td>
                                                        <td>1:5</td>
                                                        <td>1:5</td>
                                                        <td className='empty'>-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RankTeam;