import React from "react";

function MenuTop({ hideMenu, prevLink, backtoLink }) {
  return (
    <div className="h-[100px] relative flex justify-between items-end pb-5">
      <div className="flex items-center">
        {prevLink && (
          <div
            onClick={() => backtoLink(false)}
            className="flex gap-1 items-center"
          >
            <span className="icon-chevron-left text-24"></span>
            <p className="font-medium text-18 leading-18">{prevLink}</p>
          </div>
        )}
      </div>

      <span className="icon-close text-32 " onClick={() => hideMenu()}></span>
    </div>
  );
}

export default MenuTop;
