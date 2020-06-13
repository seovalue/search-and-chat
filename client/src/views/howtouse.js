import React from "react";
import { withRouter, Link } from "react-router-dom";

function howtouse() {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
            <div style={{
                height: 610, width: 700,
                border: '3px solid black', borderRadius: '7px'
            }}>
                <div style = {{display: 'flex', justifyContent: 'center', paddingTop:'2rem', fontSize: '1rem', paddingLeft:'1rem',paddingRight:'1rem'}}>
                    우선, SEARCH AND CHAT 웹페이지에 접속해주셔서 감사합니다. <br/>
                    간단한 사용 방법을 알려드리겠습니다.<br/><br/>
                    1. 챗봇과의 대화는 회원/비회원 모두 이용 가능합니다.<br/>
                    2. 회원인 경우에는, 회원 가입 시 등록한 키워드를 챗봇이 먼저 검색해주어 정보를 제공해줍니다.<br/>
                    3. 비회원인 경우에는, 직접 챗봇에게 검색을 요청하셔야합니다.<br/>
                    4. 챗봇과의 일상적인 대화는 회원/비회원 구분없이 모두 가능합니다.<br/>
                    5. 로그인 시, 해당 페이지로 연결을 위해 더블 클릭이 필요할 수 있습니다.<br/>
                    6. 챗봇에게 정보를 요청할 때에는 챗봇이 알려주는 양식에 맞추어 입력하셔야 가능합니다.<br/>
                    7. 아직 챗봇은 많은 경험이 부족합니다. 여러분의 모든 대화를 이해하지 못할 수 있으니 양해 부탁드립니다.<br/>
                    8. 회원/비회원의 구분을 위해 세션을 사용합니다. 또한 여러분께 보여지는 페이지는 단일 페이지로 구성되었습니다.<br/>
                       따라서 챗봇과의 대화 페이지에서는 뒤로가기나 새로고침 시 이용에 불편함이 있을 수 있어 뒤로가기는 막아두었습니다.<br/>
                       다시 메인 페이지로 이동하시기 위해서는, 페이지 URL로 다시 접속하시면 재 접속 가능합니다.<br/>
                    ** 아래 메인 페이지로 돌아가기를 클릭하여, 챗봇과의 즐거운 대화 즐기시길 바랍니다. 감사합니다!
                </div>
                <div style = {{display: 'flex', justifyContent: 'center', paddingTop:'2rem',paddingLeft:'1rem',paddingRight:'1rem', fontSize: '1.5rem'}}>
                    <Link to ='/'>메인 페이지로 돌아가기</Link>
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(howtouse);