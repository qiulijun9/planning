useEffect(() => {
  const tab = localStorage.getItem("tab") || 0;
  if (tab <= 0) {
    console.log("没有登录");
  } else {
    console.log("已登录");
  }
  localStorage.setItem("tab", String(+tab + 1));

  const onBeforeunload = () => {
    const tab = localStorage.getItem("tab") || 0;
    if (tab > 0) {
      localStorage.setItem("tab", String(+tab - 1));
    }
  };
  window.addEventListener("beforeunload", onBeforeunload);
  return () => window.removeEventListener("beforeunload", onBeforeunload);
}, []);