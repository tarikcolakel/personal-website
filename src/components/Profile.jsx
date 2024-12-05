import React from "react";


const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <div className="profile-content">
        {/* Sol Kısım */}
        <div className="profile-basic-info">
          <h3 className="profile-section-title">Basic Information</h3>
          <ul className="profile-info-list">
            <li>
              <strong>Doğum Tarihi:</strong> 24.03.1996
            </li>
            <li>
              <strong>İkamet Şehri:</strong> Ankara
            </li>
            <li>
              <strong>Eğitim Durumu:</strong> Hacettepe Üniv. Biyoloji Lisans, 2016
            </li>
            <li>
              <strong>Tercih Ettiği Rol:</strong> Frontend, UI
            </li>
          </ul>
        </div>

        {/* Sağ Kısım */}
        <div className="profile-about-me">
          <h3 className="profile-section-title">About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam aut,
            odit laborum aliquam voluptatem nisi mollitia.
          </p>
          <p>
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
