import "./homereview.css";

function Homereview() {
    return (
        <div className="homereview">
            <h1>People love using topmate</h1>
            <div className="homereview-container">
                <div className="homereview-single">
                    <p>Love the integrations with Calendar, Zoom, WhatsApp and Apple Pay. Makes my life easier</p>
                    <div  className="homereview-profile">
                        <img className="homereview-img" src="https://i.pinimg.com/564x/c7/27/1a/c7271ad11ed4ef1dec4d67a995440135.jpg" />
                        <h5>Robert Johnson</h5>
                    </div>
                </div>
                <div className="homereview-single">
                    <p>The entire experience is just so seamless. My followers love it</p>
                    <div  className="homereview-profile">
                        <img className="homereview-img" src="data:image/jpeg;base64,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" />
                        <h5>Jessica</h5>
                    </div>
                </div>
                <div className="homereview-single">
                    <p>I am on track to earn 6 figures on Topmate. I never imagined I could do this</p>
                    <div className="homereview-profile">
                        <img className="homereview-img" src="https://media.licdn.com/dms/image/D4D03AQEWo0W3odZDyA/profile-displayphoto-shrink_800_800/0/1684069545710?e=2147483647&v=beta&t=_Q-EfookU-mbqaY1LYGgaLG52wHvk1Cgfvn7Avw2wo0" />
                        <h5>Rohan</h5>
                    </div>
                </div>
            </div>
            <div className="homereview-container">
                <div className="homereview-single">
                    <p>All my monetisation now happens in one place</p>
                    <div  className="homereview-profile">
                        <img className="homereview-img" src="https://media.licdn.com/dms/image/C4D03AQH75-W0CdkHpg/profile-displayphoto-shrink_800_800/0/1598375391021?e=2147483647&v=beta&t=SOoVT3l577XvgJSAm9Jxf50C3-F5xmKDiwxbWkMu3_4" />
                        <h5>Shubhanshu Sharma</h5>
                    </div>
                </div>
                <div className="homereview-single">
                    <p>The team is extremely helpful and cares a lot about feedback. They keep rolling out new features too!</p>
                    <div  className="homereview-profile">
                        <img className="homereview-img" src="https://shivamkhandelwal.in/assets/img/dp_small.jpeg" />
                        <h5>Shivam Khandelwal</h5>
                    </div>
                </div>
                <div className="homereview-single">
                    <p>It was so easy to setup, almost magical</p>
                    <div className="homereview-profile">
                        <img className="homereview-img" src="https://i.pinimg.com/564x/c7/27/1a/c7271ad11ed4ef1dec4d67a995440135.jpg" />
                        <h5>carl pary</h5>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Homereview;