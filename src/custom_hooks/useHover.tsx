import React, { useState,useMemo, useEffect } from "react";

interface Options {
  mouseScale?: boolean;
  onMouseover?: (e: any) => any;
  onMouseleave?: (e: any) => any;
}

function useHover(){
  const [isHovering, setIsHovering] = useState(false);

  const events = useMemo(
    () => ({
      onMouseEnter: (e: React.MouseEvent) => { setIsHovering(true)},
      onMouseLeave: (e: React.MouseEvent) => { setIsHovering(false)},
    }),
    []
  );

  return [isHovering, events];
}

export default useHover;