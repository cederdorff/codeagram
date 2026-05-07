export function UserInfo({ avatar, timestamp, username }) {
  return (
    <div className="user-info">
      <img className="avatar" src={avatar} />
      <div className="user-copy">
        <h2>{username}</h2>
        <p>{timestamp}</p>
      </div>
    </div>
  );
}
