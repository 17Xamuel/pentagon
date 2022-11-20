import React from "react";

export default () => {
  return (
    <div className="topbar">
      <div className="topbar-ctr card">
        <div className="topbar-left-ctr">
          <input type="checkbox" hidden id="open_side_nav" />
          <label htmlFor="open_side_nav" className="open_side_nav">
            {/* <MenuIcon fontSize="large" /> */}
          </label>
          <div className="logo">Plus Seller</div>
        </div>
        <div className="topbar-right-ctr">
          <div className="topbar-icons">
            <div className="topbar-icon-wrapper">
              <img
                src={"https://picsum.photos/100"}
                height="36px"
                width="36px"
                style={{ borderRadius: "50%", cursor: "pointer" }}
                alt="ADMIN"
                aria-controls="profile-menu-opener"
                aria-haspopup="true"
                // onClick={handleOpenActions}
              />
            </div>
            <div>
              <h3>Plus</h3>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
