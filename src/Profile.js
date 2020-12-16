import React from "react";

const profileData = {
  moon: {
    name: "문상호",
    description: "Frontend Engineer",
  },
  homer: {
    name: "심슨",
    description: "심슨 가족 아빠 캐릭터",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
