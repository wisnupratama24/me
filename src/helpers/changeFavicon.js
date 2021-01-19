import { useEffect } from "react";

export default function ChangeFavicon(image, title) {
  useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.href = image;
    document.title = title;
  }, [image, title]);
}
