import './userInfo.css';

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        {/* <img src={currentUser.avatar || './avatar.png'} alt="" /> */}
        <img src={'./avatar.png'} alt="" />
        {/* <h2>{currentUser.username}</h2> */}
        <h2>John</h2>
      </div>

      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
